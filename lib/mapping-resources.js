const _ = require('lodash');
const { safeGetText, targetsFromContext, getSourceByAlias } = require('./utils');

class StructureMap {
  constructor({ defaultGroup, groups = [] }) {
    this.defaultGroup = defaultGroup;
    this.groups = groups;
  }

  transformTargets(inputs = []) {
    const transformContext = { structureMap: this };
    return this.defaultGroup.transformTargets(inputs, transformContext);
  }
}

class Group {
  static fromCtx(ctx) {
    const identifier = ctx.identifier().getText();
    const parameters = ctx.parameters().parameter().map(p => Parameter.fromCtx(p));
    const rules = ctx.rules().js_rule().map(r => Rule.fromCtx(r));
    return new this({ identifier, parameters, rules });
  }

  constructor({ identifier, parameters = [], rules = [] }) {
    this.identifier = identifier;
    this.parameters = parameters;
    this.rules = rules;
  }

  transformTargets(inputs, transformContext) {
    transformContext.group = this;

    transformContext.parameterMap = {};
    this.parameters.forEach((parameter, i) => {
      transformContext.parameterMap[parameter.identifier] = {
        value: inputs[i] || {},
        inputMode: parameter.inputMode
      };
    });

    this.rules.forEach(rule => rule.transformTargets(transformContext));

    return targetsFromContext(transformContext);
  }
}

class Rule {
  static fromCtx(ctx) {
    const ctxRuleSources = ctx.ruleSources().ruleSource();
    const ctxRuleTargets = ctx.ruleTargets().ruleTarget();

    const ruleSources = ctxRuleSources.map((ctxRuleSource) => {
      return RuleSource.fromCtx(ctxRuleSource);
    });

    const ruleTargets = ctxRuleTargets.map((ctxRuleTarget) => {
      return RuleTarget.fromCtx(ctxRuleTarget);
    });

    return new Rule({ruleSources, ruleTargets});
  }

  constructor({ ruleSources, ruleTargets, dependent, ruleName }) {
    this.ruleSources = ruleSources;
    this.ruleTargets = ruleTargets;
    this.dependent = dependent;
    this.ruleName = ruleName;
  }

  transformTargets(transformContext) {
    transformContext.rule = this;
    this.ruleTargets.forEach(ruleTarget => ruleTarget.transformTargets(transformContext));
    return targetsFromContext(transformContext);
  }
}

class RuleSource {
  static fromCtx(ctx) {
    const args = {
      ruleContext: RuleContext.fromCtx(ctx.ruleContext()),
      alias: Alias.fromCtx(ctx.alias())
    };
    return new this(args);
  }

  constructor({ ruleContext, sourceType, sourceDefault, alias, whereClause, checkClause, log }) {
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
  static fromCtx(ctx) {
    const args = {
      ruleContext: RuleContext.fromCtx(ctx.ruleContext()),
      transform: Transform.fromCtx(ctx.transform()),
      alias: Alias.fromCtx(ctx.alias())
    };
    return new this(args);
  }

  constructor({ ruleContext, invocation, transform, alias, targetListMode }) {
    this.ruleContext = ruleContext;
    this.transform = transform;
    this.alias = alias;
    this.targetListMode = targetListMode;
    this.invocation = invocation;
  }

  transformTargets(transformContext) {
    // this is the copy case right now only
    const ruleSource = getSourceByAlias(transformContext, this.transform.ruleContext);

    const source = _.get(transformContext,
      'parameterMap.' + ruleSource.ruleContext.identifiers[0] + '.value'
    );
    const value = _.get(source, ruleSource.ruleContext.identifiers[1]);

    const targetPath = this.ruleContext.identifiers[1];

    const target = _.get(transformContext,
      'parameterMap.' + this.ruleContext.identifiers[0] + '.value'
    );

    const assignTarget = {};
    _.set(assignTarget, targetPath, value);

    Object.assign(target, assignTarget);
    return targetsFromContext(transformContext);
  }
}

class RuleContext {
  static fromCtx(ctx) {
    const identifiers = _.castArray(ctx.identifier())
      .map(i => i.getText());
    return new this({ identifiers });
  }

  constructor({ identifiers }) {
    this.identifiers = identifiers;
  }
}

class Alias {
  static fromCtx(ctx) {
    if (!(ctx)) { return; }
    const identifier = ctx.identifier().getText();
    return new this({identifier});
  }

  constructor({ identifier }) {
    this.identifier = identifier;
  }
}

class Transform {
  static fromCtx(ctx) {
    const literal = safeGetText(ctx, 'literal');
    const ruleContext = safeGetText(ctx, 'ruleContext');
    const invocation = safeGetText(ctx, 'invocation');

    return new this({ literal, ruleContext, invocation });
  }

  constructor({ literal, ruleContext, invocation }) {
    this.literal = literal;
    this.ruleContext = ruleContext;
    this.invocation = invocation;
  }
}

class Invocation {
  constructor({ identifier, paramList }) {
    this.identifier = identifier;
    this.paramList = paramList;
  }
}

class ParamList {
  constructor({ params }) {
    this.params = params;
  }
}

class Parameter {
  static fromCtx(ctx) {
    const inputMode = ctx.inputMode().getText();
    const identifier = ctx.identifier().getText();
    const type = safeGetText(ctx, 'type');
    return new this({inputMode, identifier, type});
  }

  constructor({ inputMode, identifier, type }) {
    this.inputMode = inputMode;
    this.identifier = identifier;
    this.type = type;
  }
}

module.exports = {
  StructureMap,
  Group
};
