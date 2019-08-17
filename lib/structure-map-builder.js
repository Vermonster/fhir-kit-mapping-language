const { StructureMap, Group } = require('./mapping-resources.js')

const Listener = require('./parser/generated/js_mappingListener.js')
  .js_mappingListener

class StructureMapBuilder extends Listener {
  constructor () {
    super()
    this.groups = []
    this.structureMap = {}
  }

  enterGroup (ctx) {
    const group = Group.fromCtx(ctx)
    this.groups.push(group)
  }

  exitStructureMap (ctx) {
    const defaultGroup = this.groups.shift()
    this.structureMap = new StructureMap({
      defaultGroup,
      groups: this.groups
    })
  }
};

module.exports = StructureMapBuilder
