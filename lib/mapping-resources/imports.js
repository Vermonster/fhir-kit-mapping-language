const { stripDelimited } = require('../utils');

class Imports {
  static fromCtx (ctx) {
    const url = stripDelimited(ctx.url().getText());
    return new this({ url });
  }

  constructor ({ url }) {
    this.url = url;
  }
}

module.exports = Imports;
