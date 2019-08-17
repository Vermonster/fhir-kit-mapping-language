const _ = require('lodash')

if (!Array.prototype.last) {
  Array.prototype.last = function () {
    return this[this.length - 1]
  }
};

function typesByDefinitionAndPath (structureDefinition, path) {
  const elementsPath = 'resource.snapshot.element'

  const name = _.get(structureDefinition, 'resource.name')
  const fullPath = `${name}.${path}`

  const elements = _.get(structureDefinition, elementsPath)

  const matchingElement = elements.find((e) => {
    return (
      (_.get(e, 'path') === fullPath) ||
      (_.get(e, 'path') === `${fullPath}[x]`)
    )
  })

  const types = _.get(matchingElement, 'type')
  return types.map(type => type.code)
}

function safeGetText (ctx, method) {
  return ctx[method]() &&
    ctx[method]().getText()
}

function targetsFromContext (transformContext) {
  return Object.keys(transformContext.parameterMap).reduce((memo, key) => {
    const parameter = transformContext.parameterMap[key]
    if (parameter.inputMode === 'target') { memo.push(parameter.value) }
    return memo
  }, [])
}

function getSourceByAlias (transformContext, alias) {
  return _.get(transformContext, 'rule.ruleSources')
    .find(r => r.alias.identifier === alias)
}

module.exports = {
  typesByDefinitionAndPath,
  safeGetText,
  targetsFromContext,
  getSourceByAlias
}
