const { Transform, fhirMap } = require('./fhir-mapping-language');

test.skip('Transform.value', () => {
  const source =  { a: { b: { c: 'hello' }}};
  const target = { a: { z: 'existing' }};

  const sourcePath = ['a','b','c'];
  const targetPath = ['a','d','e'];

  const expected = { a: { z: 'existing', d: { e: 'hello'}}};
  const transform = new Transform(source, target, '->', sourcePath, targetPath);

  expect(transform.evaluate()).toEqual(expected);
});

test('assignment', () => {
  const structureMap = `map "http://test.com" = test
  group example(source src, target tgt) {
    src.name as vvs -> tgt.name = create('type') as vvt then defaultMappingGroup(vvs, vvt);
  }`;

  // 1. store src as source
  // 2. store tgt as target
  // 3. store vss as src.name
  // 4. create tgt.name
  // 5. store vvt as tgt.name
  // 6. create the value vvt to be vvs
  const source = { name: 'bob' };

  const target = fhirMap(source, structureMap);
  expect(target).toEqual(source);
});











test.skip('src.attr1 -> tgt.attr2', () => {
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
