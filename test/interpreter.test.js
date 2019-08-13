const Engine = require('../lib/engine');

test('simple assignment', () => {
  const map = `map "http://test.com" = test
  group example(source src, target tgt) {
    src.name as v -> tgt.name = v;
  }`;

  const sources = [{ name: 'bob' }];
  const engine = new Engine({sources, map});
  const targets = engine.execute();

  expect(targets).toEqual(sources);
});

// 1. group-level: create variable src for source
// 2. group-level: create variable tgt for target
// 3. rule-level: create variable v for src.name
// 4. rule-level: assign tgt.name to the value of v
//class StructureMap() {
  //init() {
  //}

  //transform(source) {
    //const target = {};
    //this.defaultGroup.transform(source, target);
    //return target;
  //}
//}

//class Group() {
  //init() {
  //}

  //transform(source, target) {

  //}
//}

//const ruleTarget = new RuleTarget("name", "v", {});
//const ruleSource = new RuleSource("name", { alias: "v" }, {});
//const rule = new Rule(ruleSource, ruleTarget, {});
//const defaultGroup = new Group("example", [rule], {});
//const structureMap = new StructureMap(map, defaultGroup, []);

//const target = structureMap.transform({ name: "Bob" });
//test('simple assignment', () => {
  //const structureMap = `map "http://test.com" = test
  //group example(source src, target tgt) {
    //src.name as v -> tgt.name = v;
  //}`;

  //const source = { name: 'bob' };
  //const target = interpreter(source, structureMap);

  //expect(target).toEqual(source);
//});

// 1. group-level: create variable src for source
// 2. group-level: create variable tgt for target
// 3. rule-level: create variable vs for src.name
// 4. rule-level: create a new property on tgt of type 'name',
//      assign to variable vt
// 5. rule-level: call mapping (e.g. group) `name()` passing in vs and vt,
//      and see above process.
test.skip('assignment with groups', () => {
  const structureMap = `map "http://test.com" = test
  group example(source src, target tgt) {
    src.name as vs -> tgt.name = create('name') as vt then name(vs, vt);
  }

  group name(source src, target tgt) {
    src.name as v -> tgt.name = v;
  } `;

  const source = { name: 'bob' };
  const target = interpreter(source, structureMap);

  expect(target).toEqual(source);
});


// 1. group-level: create variable src for source
// 2. group-level: create variable tgt for target
// 3. rule-level: create variable sn for source.name
// 4. rule-level: create variable tn for target.name
// 5. rule-level: run sub-rule with variables in scope
// 5a. sub-rule-level(1): create variable f for sn.first
// 5b. sub-rule-level(1): assign tn.first to the value of f
// 5c. sub-rule-level(2): create variable l for sn.last
// 5d. sub-rule-level(2): assign tn.last to the value of l
test.skip('dependent rule', () => {
  const structureMap = `map "http://test.com" = test

  group example(source src, target tgt) {
    src.name as sn -> tgt.name as tn then {
      sn.first as f -> tn.first = f;
      sn.last as l -> tn.last = l;
    };
  }`;

  const source = { name: { first: 'Rob', last: 'Bor' } };
  const target = interpreter(source, structureMap);
  expect(target).toEqual(source);
});

// 1. structure-map: load structure def for Fake1 in source NS
// 2. structure-map: load structure def for Fake2 in source NS
// 3. structure-map: load groups defined in "Map1to2"
// 4. group-level: create variable src for source
// 5. group-level: create variable tgt for target
// 6. rule-level: lookup data-type for src.created (type=date)
// 7. rule-level: create attribute on tgt with the same name and type
// 8. rule-level: apply the mapping rule for `date`
test.skip('simple rule using structure defs and imported maps', () => {
  const structureMap = `map "http://test.com" = test

  uses "Fake1" alias Fake1 as source
  uses "Fake2" alias Fake2 as target

  imports "Map1to2"

  group example(source src, target tgt) {
    src.created -> tgt.created;
  }`;

  const source = { created: '2013-04-05' };
  const target = interpreter(source, structureMap);
  expect(target).toEqual(source);
});
