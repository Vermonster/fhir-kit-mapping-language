const Param = require('./param');

class ParamList {
  static fromCtx (ctx) {
    const params = ctx.param().map(p => Param.fromCtx(p));

    return new this({ params });
  }

  constructor ({ params }) {
    this.params = params;
  }
}

module.exports = ParamList;
