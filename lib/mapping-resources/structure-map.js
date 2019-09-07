const MapId = require('./map-id');
const Group = require('./group');
const Imports = require('./imports');

class StructureMap {
  static fromCtx (ctx) {
    const mapId = MapId.fromCtx(ctx.mapId());

    const groups = ctx.group().map(group => Group.fromCtx(group));

    const imports = ctx.imports()
      ? ctx.imports().map(i => Imports.fromCtx(i))
      : undefined;

    return new this({ mapId, groups, imports });
  }

  constructor ({ mapId, groups = [], imports = [], engine }) {
    this.mapId = mapId;
    this.groups = groups;
    this.imports = imports;
    this.engine = engine;
  }

  get importedStructureMaps () {
    return this.imports
      .map(i => this.engine.matchMaps(i.url))
      .reduce((acc, val) => acc.concat(val), []);
  }

  get allGroups () {
    const importedGroups = this.importedStructureMaps
      .map(s => s.groups)
      .reduce((acc, val) => acc.concat(val), []);

    return this.groups.concat(importedGroups);
  }

  get name () {
    return this.mapId.identifier;
  }

  get url () {
    return this.mapId.url;
  }

  get defaultGroup () {
    return this.groups[0];
  }

  transform (inputs = [], transformContext = {}) {
    transformContext.structureMap = this;

    const { variableMap } = this.defaultGroup.transform(inputs, transformContext);

    const { items } = variableMap;
    return items
      .filter(item => item.root && item.options.inputMode === 'target')
      .map(item => item.value);
  }
}

module.exports = StructureMap;
