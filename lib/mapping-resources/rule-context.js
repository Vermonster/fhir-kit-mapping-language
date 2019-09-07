const _ = require('lodash');

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

module.exports = RuleContext;
