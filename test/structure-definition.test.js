const { typesByDefinitionAndPath } = require('../lib/structure-definition');
const fake1StructureDefinition = require('./fixtures/fake-v1-structure-definition');

test('typesByDefinitionAndPath', () => {
  const type = typesByDefinitionAndPath(fake1StructureDefinition,
    'created');
  expect(type).toEqual(['date']);
});

test('typesByDefinitionAndPath [x]', () => {
  const type = typesByDefinitionAndPath(fake1StructureDefinition,
    'archived');
  expect(type).toEqual(['date', 'boolean']);
});
