const _ = require('lodash');

const typesByDefinitionAndPath = (structureDefinition, path) => {
  const elementsPath = 'resource.snapshot.element';

  const name = _.get(structureDefinition, 'resource.name');
  const fullPath = `${name}.${path}`;

  const elements = _.get(structureDefinition, elementsPath);

  const matchingElement = elements.find((e) => {
    return (
      (_.get(e, 'path') === fullPath) ||
      (_.get(e, 'path') === `${fullPath}[x]`)
    );
  });

  const types = _.get(matchingElement, 'type');
  return types.map(type => type.code);
};

module.exports = { typesByDefinitionAndPath }
