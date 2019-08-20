const _ = require('lodash');
const { inspect } = require('util');
const { safeGetText } = require('./utils');

class StructureMap {
  static fromCtx(ctx) {
    const groups = ctx.group().map(group => Group.fromCtx(group));
    return new this({ groups });
  }

  constructor ({ groups = [] }) {
    this.groups = groups;
  }

  get defaultGroup() {
    return this.groups[0];
  }

  transformTargets (inputs = []) {
    const transformContext = { structureMap: this, rules: [], aliasMap: [] };
    return this.defaultGroup.transformTargets(inputs, transformContext);
  }
}

class Group {
  static fromCtx (ctx) {
    const identifier = ctx.identifier().getText();
    const parameters = ctx.parameters().parameter().map(p => Parameter.fromCtx(p));
    const rules = ctx.rules().js_rule().map(r => Rule.fromCtx(r));
    return new this({ identifier, parameters, rules });
  }

  constructor ({ identifier, parameters = [], rules = [] }) {
    this.identifier = identifier;
    this.parameters = parameters;
    this.rules = rules;
  }


  parametersWithInputMode (inputMode) {
    return this.parameters.reduce((memo, parameter) => {
      if (parameter.inputMode === inputMode) { memo.push(parameter); }
      return memo;
    }, []);
  }

  parameterWithInputModeAndAlias (inputMode, alias) {
    return this.parametersWithInputMode(inputMode)
      .find(parameter => parameter.identifier === alias);
  }

  parametersByAlias () {
    return this.parameters.reduce((memo, parameter) => {
      memo[parameter.identifier] = parameter;
      return memo;
    }, {});
  }

  aliasMap(inputs) {
    return this.parameters.map((parameter, index) => {
      return {
        identifier: parameter.identifier,
        path: '',
        value: inputs[index] || {}
      };
    });
  }

  transformTargets (inputs, transformContext) {
    transformContext.group = this;
    transformContext.aliasMap = [
      ...transformContext.aliasMap,
      ...this.aliasMap(inputs)
    ];

    this.rules.forEach(rule => rule.transformTargets(transformContext));

    const { aliasMap } = transformContext;
    transformContext.group = null;

    return this.parameters
      .filter(parameter => parameter.inputMode === 'target')
      .map((parameter) => {
        return aliasMap.find(mapping => mapping.identifier === parameter.identifier);
      })
      .map(parameter => parameter.value);
  }
}

class Rule {
  static fromCtx (ctx) {
    const ctxRuleSources = ctx.ruleSources().ruleSource();
    const ctxRuleTargets = ctx.ruleTargets().ruleTarget();

    const ruleSources = ctxRuleSources.map((ctxRuleSource) => {
      return RuleSource.fromCtx(ctxRuleSource);
    });

    const ruleTargets = ctxRuleTargets.map((ctxRuleTarget) => {
      return RuleTarget.fromCtx(ctxRuleTarget);
    });

    const dependent = ctx.dependent()
      ? Dependent.fromCtx(ctx.dependent())
      : undefined;

    return new this({ ruleSources, ruleTargets, dependent });
  }

  constructor ({ ruleSources, ruleTargets, dependent, ruleName }) {
    this.ruleSources = ruleSources;
    this.ruleTargets = ruleTargets;
    this.dependent = dependent;
    this.ruleName = ruleName;
  }

  get aliasMap () {
    const ruleSourcesAndTargets = [this.ruleSources, this.ruleTargets]
      .reduce((memo, val) => memo.concat(val), []);

    const aliasMap = ruleSourcesAndTargets
      .filter(rst => rst.alias)
      .map((rst) => {
        return {
          identifier: rst.alias.identifier[0],
          path: rst.alias.identifier[1]
        };
      });

    return aliasMap;
  }

  findRuleSourceByAlias (alias) {
    return this.ruleSources.find(rs => rs.alias.identifier === alias);
  }

  transformTargets (transformContext) {
    transformContext.aliasMap = [
      ...transformContext.aliasMap,
      ...this.aliasMap
    ];
    transformContext.rules.push(this);

    this.ruleTargets.forEach(ruleTarget => ruleTarget.transformTarget(transformContext));
    this.dependent && this.dependent.transformTargets(transformContext);

    transformContext.rules.pop();
    // transformContext.aliasMap.pop();

    const { group } = transformContext;
    return transformContext;
  }
}

class RuleSource {
  static fromCtx (ctx) {
    const args = {
      ruleContext: RuleContext.fromCtx(ctx.ruleContext()),
      alias: ctx.alias() ? Alias.fromCtx(ctx.alias()) : undefined
    };
    return new this(args);
  }

  get aliasMap() {
    const aliasMap = {};
    if (this.alias) {
      const { identifier } = this.alias;
      const { path } = this.ruleContext;
      aliasMap[identifier] = path;
    }
    return aliasMap;
  }

  constructor ({ ruleContext, sourceType, sourceDefault, alias, whereClause, checkClause, log }) {
    this.ruleContext = ruleContext;
    this.sourceType = sourceType;
    this.sourceDefault = sourceDefault;
    this.alias = alias;
    this.whereClause = whereClause;
    this.checkClause = checkClause;
    this.log = log;
  }
}

class RuleTarget {
  static fromCtx (ctx) {
    const args = {
      ruleContext: ctx.ruleContext()
        ? RuleContext.fromCtx(ctx.ruleContext())
        : undefined,

      transform: ctx.transform()
        ? Transform.fromCtx(ctx.transform())
        : undefined,

      invocation: ctx.invocation()
        ? Invocation.fromCtx(ctx.invoaction())
        : undefined,

      alias: ctx.alias()
        ? Alias.fromCtx(ctx.alias())
        : undefined,
    };
    return new this(args);
  }

  constructor ({ ruleContext, invocation, transform, alias, targetListMode }) {
    this.ruleContext = ruleContext;
    this.transform = transform;
    this.alias = alias;
    this.targetListMode = targetListMode;
    this.invocation = invocation;
  }

  get aliasMap() {
    const aliasMap = {};
    if (this.alias) {
      const { identifier } = this.alias;
      const { path } = this.ruleContext;
      aliasMap[identifier] = path;
    }
    return aliasMap;
  }

  get mode() {
    const { ruleContext, invocation } = this;
    if (ruleContext) { return 'ruleContext'; }
    if (invocation) { return 'invocation'; }
  }

  transformTarget (transformContext) {
    transformContext.ruleTarget = this;
    transformContext.ruleSources = transformContext.rules.last().ruleSources;

    const { transform, invocation } = this;

    if (transform) {
      return transform.transformTarget(transformContext);
    }

    if (invocation) {
      return invocation.transformTarget(transformContext);
    }
  }
}

class RuleContext {
  static fromCtx (ctx) {
    const identifiers = _.castArray(ctx.identifier())
      .map(i => i.getText());
    return new this({ identifiers });
  }

  get path() {
    return this.identifiers.join('.');
  }

  constructor ({ identifiers }) {
    this.identifiers = identifiers;
  }
}

class Alias {
  static fromCtx (ctx) {
    const identifier = ctx.identifier()
      ? ctx.identifier().getText()
      : undefined;

    return new this({ identifier });
  }

  constructor ({ identifier }) {
    this.identifier = identifier;
  }
}

class Transform {
  static fromCtx (ctx) {
    const literal = ctx.literal()
      ? Literal.fromCtx(ctx.literal())
      : undefined;

    const ruleContext = safeGetText(ctx, 'ruleContext');
    const invocation = safeGetText(ctx, 'invocation');

    return new this({ literal, ruleContext, invocation });
  }

  get dataType () {
    return this.literal.dataType;
  }

  get mode () {
    return Object.keys(this).find(k => (this[k] !== undefined));
  }

  constructor ({ literal, ruleContext, invocation }) {
    this.literal = literal;
    this.ruleContext = ruleContext;
    this.invocation = invocation;
  }

  transformTarget (transformContext) {
    const { mode } = this;

    switch (mode) {
      case 'ruleContext':
        return this._transformTargetRuleContext(transformContext);
        break;
      case 'literal':
        return this._transformTargetLiteral(transformContext);
        break;
      default:
        raise(new Error('Not Implemented'));
    }
  }

  _transformTargetLiteral (transformContext) {
    const { ruleContext, literal } = this;
    const { ruleTarget, group } = transformContext;

    const targetAlias = ruleTarget.ruleContext.identifiers[0];
    const targetPath = ruleTarget.ruleContext.identifiers[1];

    const targetInput = transformContext.aliasMap
      .find(item => item.identifier === targetAlias)
      .value;

    const { value } = literal;
    targetInput[targetPath] = value;
    return transformContext;
  }

  _transformTargetRuleContext (transformContext) {
    const { ruleContext } = this;
    const { rules, group, ruleTarget, ruleSources } = transformContext;

    const ruleSource = ruleSources.find(ruleSource => ruleSource.alias.identifier === ruleContext);
    const sourceAlias = ruleSource.ruleContext.identifiers[0];
    const sourcePath = ruleSource.ruleContext.identifiers[1];
    const sourceInput = transformContext.aliasMap
      .find(item => item.identifier === sourceAlias)
      .value;

    const targetAlias = ruleTarget.ruleContext.identifiers[0];
    const targetPath = ruleTarget.ruleContext.identifiers[1];
    const targetInput = transformContext.aliasMap
      .find(item => item.identifier === targetAlias)
      .value;

    const sourceValue = _.get(sourceInput, sourcePath);
    _.set(targetInput, targetPath, sourceValue);
    return transformContext;
  }
}

class Literal {
  static fromCtx (ctx) {
    const integer = ctx.INTEGER()
      ? parseInt(safeGetText(ctx, 'INTEGER'), 10)
      : undefined;

    const number = ctx.NUMBER()
      ? parseFloat(safeGetText(ctx, 'NUMBER'))
      : undefined;

    const string = ctx.STRING()
      ? safeGetText(ctx, 'STRING').replace(/^'(.+(?='$))'$/, '$1').toString()
      : undefined;

    const datetime = ctx.DATETIME()
      ? new Date(safeGetText(ctx, 'DATETIME').replace(/^\@/, ''))
      : undefined;

    const time = ctx.TIME()
      ? raise(new Error('Not Implemented'))
      : undefined;

    const bool = ctx.BOOL()
      ? (safeGetText(ctx, 'BOOL') === 'true')
      : undefined;

    return new this({ integer, number, string, datetime, time, bool });
  }

  get dataType () {
    return Object.keys(this).find(k => this[k] !== undefined);
  }

  get value () {
    return this[this.dataType];
  }

  constructor ({ integer, number, string, datetime, time, bool }) {
    this.integer = integer;
    this.number = number;
    this.string = string;
    this.datetime = datetime;
    this.time = time;
    this.bool = bool;
  }
}

class Dependent {
  static fromCtx(ctx) {
    const invocation = ctx.invocation()
      ? Invocation.fromCtx(ctx.invocation())
      : undefined;

    const rules = ctx.rules()
      ? ctx.rules().js_rule().map(rule => Rule.fromCtx(rule))
      : undefined;


    return new this({ invocation, rules });
  }

  constructor({ invocation, rules = [] }) {
    this.invocation = invocation;
    this.rules = rules;
  }

  transformTargets(transformContext) {
    if (this.rules) {
      const r = this.rules.forEach(rule => rule.transformTargets(transformContext));
    }

    const { group } = transformContext;
    return group.parametersWithInputMode('target');
  }
}

class Invocation {
  constructor ({ identifier, paramList }) {
    this.identifier = identifier;
    this.paramList = paramList;
  }
}

class ParamList {
  constructor ({ params }) {
    this.params = params;
  }
}

class Parameter {
  static fromCtx (ctx) {
    const inputMode = ctx.inputMode().getText();
    const identifier = ctx.identifier().getText();
    const type = safeGetText(ctx, 'type');
    return new this({ inputMode, identifier, type });
  }

  constructor ({ inputMode, identifier, type }) {
    this.inputMode = inputMode;
    this.identifier = identifier;
    this.type = type;
  }
}

module.exports = {
  StructureMap,
};
