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

module.exports = Alias;
