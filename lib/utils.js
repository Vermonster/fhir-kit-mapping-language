const _ = require('lodash');

function typesByDefinitionAndPath (structureDefinition, path) {
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
}

function safeGetText (ctx, method) {
  return ctx[method]() &&
    ctx[method]().getText();
}

function stripDelimited (delimited) {
  const string = delimited.toString();
  return string.substring(1, string.length - 1);
}

module.exports = {
  typesByDefinitionAndPath,
  safeGetText,
  stripDelimited
};
