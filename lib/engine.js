const _ = require('lodash');
const ast = require('./parser/ast');
const { StructureMap } = require('./mapping-resources');

class Engine {
  constructor ({ inputs, map }) {
    this.inputs = _.castArray(inputs);
    this.map = map;
  }

  execute () {
    const tree = ast(this.map);
    if (!(tree)) { throw (new Error('Parsing Error')); }

    const structureMap = StructureMap.fromCtx(tree);
    return structureMap.transform(this.inputs);
  }
}

module.exports = Engine;
