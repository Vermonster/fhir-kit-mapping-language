const Literal = require('./literal');
const Invocation = require('./invocation');

const { safeGetText } = require('../utils');

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

module.exports = Transform;
