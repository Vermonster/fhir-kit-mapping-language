const RuleSource = require('./rule-source');
const RuleTarget = require('./rule-target');
const Invocation = require('./invocation');

const { safeGetText } = require('../utils');

class Dependent {
  static fromCtx (ctx) {
    const invocation = ctx.invocation()
      ? Invocation.fromCtx(ctx.invocation())
      : undefined;

    const rules = ctx.rules()
      ? ctx.rules().js_rule().map(r => Rule.fromCtx(r))
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

module.exports = Dependent;

class Rule {
  static test () { return 'test'; }
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

module.exports = Rule;
