const RuleContext = require('./rule-context');
const Alias = require('./alias');

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

module.exports = RuleSource;
