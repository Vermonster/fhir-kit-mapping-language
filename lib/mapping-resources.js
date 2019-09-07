const _ = require('lodash');
const { inspect } = require('util'); // eslint-disable-line no-unused-vars
const { safeGetText } = require('./utils');
const { VariableMap } = require('./variable-map');

class StructureMap {
  static fromCtx (ctx) {
    const mapId = MapId.fromCtx(ctx.mapId());

    const groups = ctx.group().map(group => Group.fromCtx(group));

    const imports = ctx.imports()
      ? ctx.imports().map(i => Imports.fromCtx(i))
      : undefined;

    return new this({ mapId, groups, imports });
  }

  constructor ({ mapId, groups = [], imports = [], engine }) {
    this.mapId = mapId;
    this.groups = groups;
    this.imports = imports;
    this.engine = engine;
  }

  get importedStructureMaps () {
    const { structureMapsByUrl } = this.engine;

    return this.imports.map(i => {
      const { url } = i;
      return structureMapsByUrl[url];
    });
  }

  get allGroups () {
    const importedGroups = this.importedStructureMaps
      .map(s => s.groups)
      .reduce((acc, val) => acc.concat(val), []);
    return this.groups.concat(importedGroups);
  }

  get name () {
    return this.mapId.identifier;
  }

  get url () {
    return this.mapId.url;
  }

  get defaultGroup () {
    return this.groups[0];
  }

  transform (inputs = [], transformContext = {}) {
    transformContext.structureMap = this;

    const { variableMap } = this.defaultGroup.transform(inputs, transformContext);

    const { items } = variableMap;
    return items
      .filter(item => item.root && item.options.inputMode === 'target')
      .map(item => item.value);
  }
}

function stripDelimited(delimited) {
  const string = delimited.toString();
  return string.substring(1, string.length - 1);
}

class MapId {
  static fromCtx (ctx) {
    const url = stripDelimited(ctx.url().getText());
    const identifier = stripDelimited(ctx.identifier().getText());
    return new this({ url, identifier });
  }

  constructor ({ url, identifier }) {
    this.url = url;
    this.identifier = identifier;
  }
}

class Imports {
  static fromCtx (ctx) {
    const url = stripDelimited(ctx.url().getText());
    return new this({ url });
  }

  constructor ({ url }) {
    this.url = url;
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

  // Make a new variableMap with inputs passed in
  variableMapWithInputs (inputs) {
    const variableMap = new VariableMap();
    const { parameters } = this;

    parameters.forEach((parameter, index) => {
      const { identifier, inputMode, type } = parameter;
      const paramsForMap = {
        identifier: identifier,
        root: true,
        options: { inputMode, type },
        value: inputs[index]
      };
      variableMap.addItem(paramsForMap);
    });
    return variableMap;
  }

  transform (inputs = [], transformContext = {}) {
    const { rules } = this;
    const variableMap = this.variableMapWithInputs(inputs);

    rules.forEach(rule => rule.transform(variableMap, transformContext));

    return { variableMap, transformContext };
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

    const ruleName = safeGetText(ctx, 'ruleName');

    return new this({ ruleSources, ruleTargets, dependent, ruleName });
  }

  constructor ({ ruleSources, ruleTargets, dependent, ruleName }) {
    this.ruleSources = ruleSources || [];
    this.ruleTargets = ruleTargets || [];
    this.dependent = dependent;
    this.ruleName = ruleName;
  }

  addVariableMaps (variableMap) {
    const { ruleTargets, ruleSources } = this;

    [...ruleSources, ...ruleTargets]
      .forEach(rst => rst.addVariableMap(variableMap));

    return variableMap;
  }

  delVariableMaps (variableMap) {
    const { ruleTargets, ruleSources } = this;

    [...ruleSources, ...ruleTargets]
      .forEach(rst => rst.delVariableMap(variableMap));

    return variableMap;
  }

  transform (variableMap, transformContext) {
    const { ruleTargets, dependent } = this;

    this.addVariableMaps(variableMap);

    ruleTargets.forEach(ruleTarget => {
      ruleTarget.transformTarget(variableMap, transformContext);
    });

    if (dependent) {
      dependent.transform(variableMap, transformContext);
    }

    this.delVariableMaps(variableMap);

    return { variableMap, transformContext };
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

  constructor ({ ruleContext, sourceType, sourceDefault, alias, whereClause, checkClause, log }) {
    this.ruleContext = ruleContext;
    this.sourceType = sourceType;
    this.sourceDefault = sourceDefault;
    this.alias = alias;
    this.whereClause = whereClause;
    this.checkClause = checkClause;
    this.log = log;
  }

  addVariableMap (variableMap) {
    const { alias, ruleContext } = this;
    if (alias) {
      const { identifier } = alias;
      const { path } = ruleContext;
      variableMap.addItem({ identifier, path });
    }
    return variableMap;
  }

  delVariableMap (variableMap) {
    const { alias } = this;
    if (alias) {
      const { identifier } = alias;
      variableMap.delItem(identifier);
    }
    return variableMap;
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
        ? Invocation.fromCtx(ctx.invocation())
        : undefined,

      alias: ctx.alias()
        ? Alias.fromCtx(ctx.alias())
        : undefined
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

  addVariableMap (variableMap) {
    const { alias, ruleContext } = this;
    if (alias) {
      const { identifier } = alias;
      const { path } = ruleContext;
      variableMap.addItem({ identifier, path });
    }
    return variableMap;
  }

  delVariableMap (variableMap) {
    const { alias } = this;
    if (alias) {
      const { identifier } = alias;
      variableMap.delItem(identifier);
    }
    return variableMap;
  }

  transformTarget (variableMap, transformContext) {
    const { transform, invocation } = this;

    transformContext.ruleTarget = this;
    if (transform) {
      return transform.transform(variableMap, transformContext);
    }

    if (invocation) {
      return invocation.transform(variableMap, transformContext);
    }
    delete transformContext.ruleTarget;

    return { variableMap, transformContext };
  }
}

class RuleContext {
  static fromCtx (ctx) {
    const identifiers = _.castArray(ctx.identifier())
      .map(i => i.getText());
    return new this({ identifiers });
  }

  get path () {
    return this.identifiers;
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

    const ruleContext = safeGetText(ctx, 'ruleContext') || undefined;

    const invocation = ctx.invocation()
      ? Invocation.fromCtx(ctx.invocation())
      : undefined;

    return new this({ literal, ruleContext, invocation });
  }

  get dataType () {
    return this.literal.dataType;
  }

  constructor ({ literal, ruleContext, invocation }) {
    this.literal = literal;
    this.ruleContext = ruleContext;
    this.invocation = invocation;
  }

  transform (variableMap, transformContext) {
    const { ruleContext, literal, invocation } = this;

    const { ruleTarget } = transformContext;
    const { ruleContext: targetRuleContext } = ruleTarget;
    const { identifiers } = targetRuleContext;

    let value;

    if (ruleContext) {
      value = variableMap.getValue(ruleContext);
    } else if (literal) {
      value = literal.value;
    } else if (invocation) {
      return invocation.transform(variableMap, transformContext);
    }

    variableMap.setValue(identifiers, value);
    return { variableMap, transformContext };
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
      ? new Date(safeGetText(ctx, 'DATETIME').replace(/^@/, ''))
      : undefined;

    const time = ctx.TIME()
      ? safeGetText(ctx, 'TIME')
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
  static fromCtx (ctx) {
    const invocation = ctx.invocation()
      ? Invocation.fromCtx(ctx.invocation())
      : undefined;

    const rules = ctx.rules()
      ? ctx.rules().js_rule().map(rule => Rule.fromCtx(rule))
      : undefined;

    return new this({ invocation, rules });
  }

  constructor ({ invocation, rules = [] }) {
    this.invocation = invocation;
    this.rules = rules;
  }

  transform (variableMap, transformContext) {
    const { rules, invocation } = this;

    if (rules) {
      rules.forEach(rule => rule.transform(variableMap, transformContext));
    }

    if (invocation) {
      invocation.transform(variableMap, transformContext);
    };

    return { variableMap, transformContext };
  }
}

class Invocation {
  static fromCtx (ctx) {
    const identifier = ctx.identifier().getText();

    const paramList = ctx.paramList()
      ? ParamList.fromCtx(ctx.paramList())
      : undefined;

    return new this({ identifier, paramList });
  }

  constructor ({ identifier, paramList }) {
    this.identifier = identifier;
    this.paramList = paramList;
  }

  transform (variableMap, transformContext) {
    const { identifier, paramList } = this;
    const { params } = paramList;
    const { structureMap } = transformContext;
    const { allGroups } = structureMap;

    const inputs = params.map((param) => {
      const { literal, identifier } = param;
      if (literal) { return literal; }
      if (identifier) { return variableMap.getValue(identifier); }
    }).filter(i => i !== undefined);

    const group = allGroups.find(g => g.identifier === identifier);
    const { variableMap: subVariableMap } = group.transform(inputs, transformContext);

    subVariableMap.items.forEach((item, index) => {
      const param = params[index];
      if (param) {
        const { identifier } = param;
        if (identifier) { variableMap.setValue(identifier, item.value); }
      }
    });
    return { variableMap, transformContext };
  }
}

class ParamList {
  static fromCtx (ctx) {
    const params = ctx.param().map(p => Param.fromCtx(p));

    return new this({ params });
  }

  constructor ({ params }) {
    this.params = params;
  }
}

class Param {
  static fromCtx (ctx) {
    const identifier = ctx.identifier().getText();

    const literal = ctx.literal()
      ? Literal.fromCtx(ctx.literal())
      : undefined;

    return new this({ identifier, literal });
  }

  constructor ({ identifier, literal }) {
    this.identifier = identifier;
    this.literal = literal;
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
  StructureMap
};
