const { interpreter }= require('../lib/interpreter');


// 1. create variable src for source
// 2. create variable tgt for target
// 3. create variable v for src.name
// 4. assign tgt.name to the value of v
test('simple assignment', () => {
  const structureMap = `map "http://test.com" = test
  group example(source src, target tgt) {
    src.name as v -> tgt.name = v;
  }`;
  const source = { name: 'bob' };

  const target = interpreter(source, structureMap);
  expect(target).toEqual(source);
});


// 1. create variable src for source
// 2. create variable tgt for target
// 3. create variable vs for src.name
// 4. create a new property on tgt of type 'name'
// 5. call mapping (e.g. group) `name` and see above
test.skip('assignment with groups', () => {
  const structureMap = `map "http://test.com" = test
  group example(source src, target tgt) {
    src.name as vs -> tgt.name = create('name') as vt then name(vs, vt);
  }

  group name(source src, target tgt) {
    src.name as v -> tgt.name = v;
  }
  `;
  const source = { name: 'bob' };

  const target = fhirMap(source, structureMap);
  expect(target).toEqual(source);

});


// 1. load structure def for Fake1 in source NS
// 2. load structure def for Fake2 in target NS
// 3. load structure map 'Map1to2'
// 2. create a new attribute on the target called name
// 3. perform the appropiate mapping for that type
test.skip('simple form', () => {
  const structureMap = `map "http://test.com" = test

  uses "Fake1" alias Fake1 as source
  uses "Fake2" alias Fake2 as target

  imports "Map1to2"

  group example(source src, target tgt) {
    src.created -> tgt.created ;
  }`;

  const source = { name: 'bob' };

  const target = fhirMap(source, structureMap);
  expect(target).toEqual(source);
});


// 1. variable: store src as source
// 2. variable: store tgt as target
// 3. variable: store vss as src.name
// 4. path: vss: as 'src.name'
// 5. create tgt.name
// 5. path: vvt: as 'tgt.name'
// 6. create the value vvt to be vvs


test.skip('Transform.value', () => {
  const source =  { a: { b: { c: 'hello' }}};
  const target = { a: { z: 'existing' }};

  const sourcePath = ['a','b','c'];
  const targetPath = ['a','d','e'];

  const expected = { a: { z: 'existing', d: { e: 'hello'}}};
  const transform = new Transform(source, target, '->', sourcePath, targetPath);

  expect(transform.evaluate()).toEqual(expected);
});
