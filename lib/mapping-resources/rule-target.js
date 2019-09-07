const RuleContext = require('./rule-context');
const Transform = require('./transform');
const Invocation = require('./invocation');
const Alias = require('./alias');

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

module.exports = RuleTarget;
