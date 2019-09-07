const { safeGetText } = require('../utils');

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

module.exports = Parameter;
