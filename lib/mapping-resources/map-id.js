const { stripDelimited } = require('../utils');

class MapId {
  static fromCtx (ctx) {
    const url = stripDelimited(ctx.url().getText());
    const identifier = stripDelimited(ctx.identifier().getText());
    return new this({ url, identifier });
  }

  constructor ({ url, identifier }) {
    this.url = url;
    this.identifier = identifier;
  }
}

module.exports = MapId;
