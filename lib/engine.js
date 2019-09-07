/**
 * FHIR Mapping Engine
 *
 * Create a new instance of an engine, and load it
 * up with a set of maps.
 *
 * Then call execute, given inputs, for a map.
 *
 * @example
 *
 *  const maps = [ map1, map2, map3 ];
 *  const engine = new Engine(maps);
 *
 *  const inputs = [ source1, source2 ];
 *  const targets = engine.execute('http://map1', inputs);
 */
const _ = require('lodash');
const ast = require('./parser/ast');
const { StructureMap } = require('./mapping-resources');

class Engine {
  constructor (maps) {
    this.structureMapsByUrl = {};
    _.castArray(maps).forEach(map => this.addMap(map));
  }

  addMap (map) {
    const tree = ast(map);
    if (!(tree)) { throw (new Error('Parsing Error')); }
    const structureMap = StructureMap.fromCtx(tree);
    structureMap.engine = this;
    const { url } = structureMap;
    if (this.structureMapsByUrl[url]) {
      console.log(`WARN: Over-writing existing map ${url}`);
    }
    this.structureMapsByUrl[url] = structureMap;
  }

  execute (url, inputs = []) {
    this.inputs = _.castArray(inputs);
    const structureMap = this.structureMapsByUrl[url];
    return structureMap.transform(inputs);
  }
}

module.exports = Engine;
