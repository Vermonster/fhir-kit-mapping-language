const antlr4 = require('antlr4')
const _ = require('lodash')
const StructureMapBuilder = require('./structure-map-builder')
const ast = require('./parser/ast')

class Engine {
  constructor ({ inputs, map }) {
    this.inputs = _.castArray(inputs)
    this.map = map
  }

  execute () {
    const tree = ast(this.map)
    if (!tree) { throw ('Parsing Error') }

    const structureMapBuilder = new StructureMapBuilder()
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(structureMapBuilder, tree)
    const structureMap = structureMapBuilder.structureMap

    return structureMap.transformTargets(this.inputs)
  }
}

module.exports = Engine
