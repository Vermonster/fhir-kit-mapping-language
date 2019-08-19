const _ = require('lodash');
const { inspect } = require('util');
const { safeGetText } = require('./utils');

class StructureMap {
  constructor ({ defaultGroup, groups = [] }) {
    this.defaultGroup = defaultGroup;
    this.groups = groups;
  }

  transformTargets (inputs = []) {
    const transformContext = { structureMap: this };
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

  _mapInputsToParameters (inputs = []) {
    return this.parameters.forEach((parameter, index) => {
      parameter.input = inputs[index] || {};
    });
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

  transformTargets (inputs, transformContext) {
    this._mapInputsToParameters(inputs);
    transformContext.group = this;

    this.rules.forEach(rule => rule.transformTargets(transformContext));

    return this.parametersWithInputMode('target')
      .map(parameter => parameter.input);
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

    return new Rule({ ruleSources, ruleTargets });
  }

  constructor ({ ruleSources, ruleTargets, dependent, ruleName }) {
    this.ruleSources = ruleSources;
    this.ruleTargets = ruleTargets;
    this.dependent = dependent;
    this.ruleName = ruleName;
  }

  findRuleSourceByAlias (alias) {
    return this.ruleSources.find(rs => rs.alias.identifier === alias);
  }

  transformTargets (transformContext) {
    transformContext.rule = this;
    this.ruleTargets.forEach(ruleTarget => ruleTarget.transformTarget(transformContext));
    const { group } = transformContext;
    return group.parametersWithInputMode('target');
  }
}

class RuleSource {
  static fromCtx (ctx) {
    const args = {
      ruleContext: RuleContext.fromCtx(ctx.ruleContext()),
      alias: Alias.fromCtx(ctx.alias())
    };
    return new this(args);
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
      ruleContext: RuleContext.fromCtx(ctx.ruleContext()),
      transform: Transform.fromCtx(ctx.transform()),
      alias: Alias.fromCtx(ctx.alias())
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

  transformTarget (transformContext) {
    const { transform } = this;

    if (transform.ruleContext) {
      return this._transformTargetRuleContext(transformContext);
    }

    if (transform.literal) {
      return this._transformTargetLiteral(transformContext);
    }

    if (transform.invoation) {
    }
  }

  _transformTargetLiteral (transformContext) {
    const { transform } = this;
    const { rule } = transformContext;
    const { group } = transformContext;
    const { ruleContext } = transform;

    const targetAlias = this.ruleContext.identifiers[0];
    const targetPath = this.ruleContext.identifiers[1];
    const { input: targetInput } = group.parameterWithInputModeAndAlias('target', targetAlias);

    const { value } = transform.literal;
    Object.assign(targetInput, _.set({}, targetPath, value));
    return group.parametersWithInputMode('target');
  }

  _transformTargetRuleContext (transformContext) {
    const { transform } = this;
    const { rule } = transformContext;
    const { group } = transformContext;
    const { ruleContext } = transform;

    const ruleSource = rule.findRuleSourceByAlias(ruleContext);

    const sourceAlias = ruleSource.ruleContext.identifiers[0];
    const sourcePath = ruleSource.ruleContext.identifiers[1];
    const { input: sourceInput } = group.parameterWithInputModeAndAlias('source', sourceAlias);

    const targetAlias = this.ruleContext.identifiers[0];
    const targetPath = this.ruleContext.identifiers[1];
    const { input: targetInput } = group.parameterWithInputModeAndAlias('target', targetAlias);

    const sourceValue = _.get(sourceInput, sourcePath);
    Object.assign(targetInput, _.set({}, targetPath, sourceValue));
    return group.parametersWithInputMode('target');
  }
}

class RuleContext {
  static fromCtx (ctx) {
    const identifiers = _.castArray(ctx.identifier())
      .map(i => i.getText());
    return new this({ identifiers });
  }

  constructor ({ identifiers }) {
    this.identifiers = identifiers;
  }
}

class Alias {
  static fromCtx (ctx) {
    if (!(ctx)) { return; }
    const identifier = ctx.identifier().getText();
    return new this({ identifier });
  }

  constructor ({ identifier }) {
    this.identifier = identifier;
  }
}

class Transform {
  static fromCtx (ctx) {
    const literal = ctx.literal() ? Literal.fromCtx(ctx.literal()) : undefined;
    const ruleContext = safeGetText(ctx, 'ruleContext');
    const invocation = safeGetText(ctx, 'invocation');

    return new this({ literal, ruleContext, invocation });
  }

  get dataType () { return this.literal.dataType; }

  constructor ({ literal, ruleContext, invocation }) {
    this.literal = literal;
    this.ruleContext = ruleContext;
    this.invocation = invocation;
  }
}

class Literal {
  static fromCtx (ctx) {
    const integer = ctx.INTEGER() ? parseInt(safeGetText(ctx, 'INTEGER'), 10) : undefined;
    const number = ctx.NUMBER() ? parseFloat(safeGetText(ctx, 'NUMBER')) : undefined;
    const string = ctx.STRING() ? safeGetText(ctx, 'STRING').replace(/^'(.+(?='$))'$/, '$1').toString() : undefined;
    const datetime = ctx.DATETIME() ? new Date(safeGetText(ctx, 'DATETIME').replace(/^\@/, '')) : undefined;
    const time = ctx.TIME() ? raise('Not Implemented') : undefined;
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
  Group
};
