const Rule = require('./rule');
const Parameter = require('./parameter');
const VariableMap = require('../variable-map');

class Group {
  static fromCtx (ctx) {
    const identifier = ctx.identifier().getText();
    const parameters = ctx.parameters().parameter().map(p => Parameter.fromCtx(p));
    const rules = ctx.rules().js_rule().map(r => Rule.fromCtx(r));
    return new this({ identifier, parameters, rules });
  }

  constructor ({ identifier, parameters = [], rules = [] }) {
    this.identifier = identifier;
    this.parameters = parameters;
    this.rules = rules;
  }

  // Make a new variableMap with inputs passed in
  variableMapWithInputs (inputs) {
    const variableMap = new VariableMap();
    const { parameters } = this;

    parameters.forEach((parameter, index) => {
      const { identifier, inputMode, type } = parameter;
      const paramsForMap = {
        identifier: identifier,
        root: true,
        options: { inputMode, type },
        value: inputs[index]
      };
      variableMap.addItem(paramsForMap);
    });
    return variableMap;
  }

  transform (inputs = [], transformContext = {}) {
    const { rules } = this;
    const variableMap = this.variableMapWithInputs(inputs);

    rules.forEach(rule => rule.transform(variableMap, transformContext));

    return { variableMap, transformContext };
  }
}

module.exports = Group;
