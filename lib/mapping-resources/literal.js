const { safeGetText } = require('../utils');

class Literal {
  static fromCtx (ctx) {
    const integer = ctx.INTEGER()
      ? parseInt(safeGetText(ctx, 'INTEGER'), 10)
      : undefined;

    const number = ctx.NUMBER()
      ? parseFloat(safeGetText(ctx, 'NUMBER'))
      : undefined;

    const string = ctx.STRING()
      ? safeGetText(ctx, 'STRING').replace(/^'(.+(?='$))'$/, '$1').toString()
      : undefined;

    const datetime = ctx.DATETIME()
      ? new Date(safeGetText(ctx, 'DATETIME').replace(/^@/, ''))
      : undefined;

    const time = ctx.TIME()
      ? safeGetText(ctx, 'TIME')
      : undefined;

    const bool = ctx.BOOL()
      ? (safeGetText(ctx, 'BOOL') === 'true')
      : undefined;

    return new this({ integer, number, string, datetime, time, bool });
  }

  get dataType () {
    return Object.keys(this).find(k => this[k] !== undefined);
  }

  get value () {
    return this[this.dataType];
  }

  constructor ({ integer, number, string, datetime, time, bool }) {
    this.integer = integer;
    this.number = number;
    this.string = string;
    this.datetime = datetime;
    this.time = time;
    this.bool = bool;
  }
}

module.exports = Literal;
