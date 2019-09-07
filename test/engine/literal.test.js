const Engine = require('../../lib/engine');

describe('literal', () => {
  test('string', () => {
    const map = `map "http://test.com" = test
    group example(source src, target tgt) {
      src -> tgt.value = 'test';
    }`;

    const inputs = [];
    const engine = new Engine(map);
    const targets = engine.execute('http://test.com', inputs);

    const expectedTargets = [{ value: 'test' }];
    expect(targets).toEqual(expectedTargets);
    expect(typeof targets[0].value).toBe('string');
  });

  test('integer', () => {
    const map = `map "http://test.com" = test
    group example(source src, target tgt) {
      src -> tgt.value = 121;
    }`;

    const inputs = [];
    const engine = new Engine(map);
    const targets = engine.execute('http://test.com', inputs);

    const expectedTargets = [{ value: 121 }];
    expect(targets).toEqual(expectedTargets);

    // TODO: Consider BigInt to have ints and floats?
    expect(typeof targets[0].value).toBe('number');
  });

  test('number', () => {
    const map = `map "http://test.com" = test
    group example(source src, target tgt) {
      src -> tgt.value = 1.21;
    }`;

    const inputs = [];
    const engine = new Engine(map);
    const targets = engine.execute('http://test.com', inputs);

    const expectedTargets = [{ value: 1.21 }];
    expect(targets).toEqual(expectedTargets);
    expect(typeof targets[0].value).toBe('number');
  });

  test('bool, true', () => {
    const map = `map "http://test.com" = test
    group example(source src, target tgt) {
      src -> tgt.value = true;
    }`;

    const inputs = [];
    const engine = new Engine(map);
    const targets = engine.execute('http://test.com', inputs);

    const expectedTargets = [{ value: true }];
    expect(targets).toEqual(expectedTargets);
    expect(typeof targets[0].value).toBe('boolean');
  });

  test('bool, false', () => {
    const map = `map "http://test.com" = test
    group example(source src, target tgt) {
      src -> tgt.value = false;
    }`;

    const inputs = [];
    const engine = new Engine(map);
    const targets = engine.execute('http://test.com', inputs);

    const expectedTargets = [{ value: false }];
    expect(targets).toEqual(expectedTargets);
    expect(typeof targets[0].value).toBe('boolean');
  });

  test('datetime', () => {
    const map = `map "http://test.com" = test
    group example(source src, target tgt) {
      src -> tgt.value = @2019-08-19T16:22:23.118Z;
    }`;

    const inputs = [];
    const engine = new Engine(map);
    const targets = engine.execute('http://test.com', inputs);

    const expectedTargets = [{ value: new Date('2019-08-19T16:22:23.118Z') }];
    expect(targets).toEqual(expectedTargets);
    expect(targets[0].value instanceof Date).toBe(true);
  });

  test.skip('time', () => {
    // Pending time...
  });
});
