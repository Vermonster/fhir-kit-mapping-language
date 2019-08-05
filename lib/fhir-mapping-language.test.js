const { fhirMap } = require('./fhir-mapping-language');


test('src.attr1 -> tgt.attr2', () => {
  const source = { name: 'Bob' };

  const structureMap = `
    map "http://test.com/test" = test
    group example(source src, target tgt) {
      src.name -> tgt.realName;
    }`;

  const expectedTarget = { fullName: 'Bob' };

  const target = fhirMap(source, structureMap);
  expect(target).toEqual(expectedTarget);
});

test.skip('nested', () => {
  const source = {
    name: {
      given: 'Bob'
    }
  };

  const structureMap = `
    map "http://test.com/test" = test
    group example(source src, target tgt) {
      src.name as sname -> tgt.name as tname then {
        sname.given -> tname.surname;
      };
    }`;

  const expectedTarget = {
    name: {
      surname: 'Bob'
    }
  };

  const target = fhirMap(source, structureMap);
  expect(target).toEqual(expectedTarget);
});
