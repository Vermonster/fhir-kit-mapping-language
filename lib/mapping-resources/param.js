const Literal = require('./literal');

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

module.exports = Param;
