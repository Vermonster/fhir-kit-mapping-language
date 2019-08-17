const Engine = require('../../lib/engine');

describe('copy, concrete syntax', () => {

  test('single rule, single source, new target', () => {
    const map = `map "http://test.com" = test
    group example(source src, target tgt) {
      src.name as v -> tgt.name = v;
    }`;

    const inputs = [{ name: 'bob' }];

    const engine = new Engine({inputs, map});
    const targets = engine.execute();

    const expectedTargets = [{ name: 'bob' }];
    expect(targets).toEqual(expectedTargets);
  });

  test('single rule, single source, existing target', () => {
    const map = `map "http://test.com" = test
    group example(source src, target tgt) {
      src.name as v -> tgt.name = v;
    }`;

    const inputs = [{ name: 'bob' }, { size: 'average' }];

    const engine = new Engine({inputs, map});
    const targets = engine.execute();

    const expectedTargets = [{ name: 'bob', size: 'average' }];
    expect(targets).toEqual(expectedTargets);
  });


  test('multiple rules, single source, new target', () => {
    const map = `map "http://test.com" = test
    group example(source src, target tgt) {
      src.name as v -> tgt.name = v;
      src.size as v -> tgt.size = v;
      src.active as sa -> tgt.activeStatus = sa;
    }`;

    const inputs = [{ name: 'bob', size: 'small', active: true }];

    const engine = new Engine({inputs, map});
    const targets = engine.execute();

    const expectedTargets = [{ name: 'bob', size: 'small', activeStatus: true }];
    expect(targets).toEqual(expectedTargets);
  });

  test('multiple rules, multiple sources, new target', () => {
    const map = `map "http://test.com" = test
    group example(source src, source src2, target tgt) {
      src.name as v -> tgt.name = v;
      src2.size as v -> tgt.size = v;
    }`;

    const inputs = [ { name: 'bob' }, { size: 'small' } ];

    const engine = new Engine({inputs, map});
    const targets = engine.execute();

    const expectedTargets = [{ name: 'bob', size: 'small' }];
    expect(targets).toEqual(expectedTargets);
  });

  test('multiple rules, single source, multiple new targets', () => {
    const map = `map "http://test.com" = test
    group example(source src, target tgt, target tgt2) {
      src.name as v -> tgt.name = v;
      src.size as v -> tgt2.size = v;
    }`;

    const inputs = [ { name: 'bob', size: 'small' } ];

    const engine = new Engine({inputs, map});
    const targets = engine.execute();

    const expectedTargets = [{ name: 'bob' }, { size: 'small' }];
    expect(targets).toEqual(expectedTargets);
  });

  test('multiple rules, multiple single sources, multiple exiting targets', () => {
    const map = `map "http://test.com" = test
    group example(source src, source src2, target tgt, target tgt2) {
      src.name as v -> tgt.name = v;
      src.name as v -> tgt2.name = v;
      src2.size as ss -> tgt2.size = ss;
    }`;

    const inputs = [
      { name: 'bob' },
      { size: 'small' },
      { active: true },
      { active: true }
    ];

    const engine = new Engine({inputs, map});
    const targets = engine.execute();

    const expectedTargets = [
      { name: 'bob', active: true },
      { name: 'bob', size: 'small', active: true }
    ];
    expect(targets).toEqual(expectedTargets);
  });
});
