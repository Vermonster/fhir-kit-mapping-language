const antlr4 = require('antlr4');
const _ = require('lodash');
const StructureMapBuilder = require('./structure-map-builder');
const ast = require('./parser/ast');

class Engine {
  constructor({ sources, map }) {
    console.log(sources);
    this.sources = _.castArray(sources);
    this.map = map;
  }

  execute() {
    const tree = ast(this.map);
    if (!tree) { throw("Parsing Error"); }

    const structureMapBuilder = new StructureMapBuilder();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(structureMapBuilder, tree);
    const structureMap = structureMapBuilder.structureMap;
    console.log(JSON.stringify(structureMap, null, 2));
    return structureMap.transformTargets(this.sources);
  }
}

module.exports = Engine;