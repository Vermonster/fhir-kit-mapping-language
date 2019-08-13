const _ = require('lodash');
const { safeGetText } = require('./utils');

// const map = `
// map "http://test.com" = test
// group example(source src, target tgt) {
//   src.name as v -> tgt.name = v;
// }
// `;
//
//
// const structureMap = new StructureMap();
// const params = [ { inputMode: 'source', identifier: 'src' },
//                  { inputMode: 'target', identifier: 'tgt' } ];
// const group = new Group('example', params);
//
// const ruleSource = new RuleSource(context: 'src.name', alias: 'v');
// const ruleSources = [ ruleSource ];
//
// const ruleTarget = new RuleTarget(context: 'tgt.name', transform: { operation: 'copy', context: 'v' });
// const ruleTargets = [ ruleSource ];
//
// const rule = new Rule(ruleSources, ruleTargets);
//
// group.rules.push(rule);
//
// structureMap.defaultGroup = group;
class StructureMap {
  constructor({ defaultGroup, groups = [] }) {
    this.defaultGroup = defaultGroup;
    this.groups = groups;
  }

  transformTargets(sources) {
    const targets = [];
    const transformContext = { structureMap: this };
    this.defaultGroup.transformTargets(sources, targets, transformContext);
    return targets;
  }
}

class Group {
  static fromCtx(ctx) {
    const identifier = ctx.identifier().getText();
    const parameters = ctx.parameters().parameter().map(p => Parameter.fromCtx(p));
    const rules = ctx.rules().js_rule().map(r => Rule.fromCtx(r));
    return new this({ identifier, parameters, rules });
  }

  indexForParameter(inputMode, identifier) {
    let index = 0;
    const parameter = this.parameters.find((parameter) => {
      if (parameter.inputMode == inputMode &&
        parameter.identifer == identifier) {
        return true;
      } else {
        index++;
        return false;
      }
    });
    return index;
  }

  constructor({ identifier, parameters = [], rules = [] }) {
    this.identifier = identifier;
    this.parameters = parameters;
    this.rules = rules;
  }

  transformTargets(sources, targets, transformContext) {
    const newTargets = this.rules.map((rule) => {
      transformContext.group = this;
      return rule.transformTargets(sources, targets, transformContext);
    });
    console.log(newTargets);
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

  transformTargets(sources, targets, transformContext) {
    console.log(transformContext);
    return this.ruleTargets.map((ruleTarget) => {
      transformContext.rule = this;
      return ruleTarget.transformTargets(
        sources,
        targets,
        transformContext
      );
    });
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

  transformTargets(sources, targets, transformContext) {
    const target = {};
    const path = 'name';
    const value = 'Bob';
    _.set(target, path, value);
    return _.castArray(target);
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
