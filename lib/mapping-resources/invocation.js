const ParamList = require('./param-list');

class Invocation {
  static fromCtx (ctx) {
    const identifier = ctx.identifier().getText();

    const paramList = ctx.paramList()
      ? ParamList.fromCtx(ctx.paramList())
      : undefined;

    return new this({ identifier, paramList });
  }

  constructor ({ identifier, paramList }) {
    this.identifier = identifier;
    this.paramList = paramList;
  }

  transform (variableMap, transformContext) {
    const { identifier, paramList } = this;
    const { params } = paramList;
    const { structureMap } = transformContext;
    const { allGroups } = structureMap;

    const inputs = params.map((param) => {
      const { literal, identifier } = param;
      if (literal) { return literal; }
      if (identifier) { return variableMap.getValue(identifier); }
    }).filter(i => i !== undefined);

    const group = allGroups.find(g => g.identifier === identifier);
    const { variableMap: subVariableMap } = group.transform(inputs, transformContext);

    subVariableMap.items.forEach((item, index) => {
      const param = params[index];
      if (param) {
        const { identifier } = param;
        if (identifier) { variableMap.setValue(identifier, item.value); }
      }
    });
    return { variableMap, transformContext };
  }
}

module.exports = Invocation;
