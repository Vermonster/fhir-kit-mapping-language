const Engine = require('../../lib/engine');

describe('invocation', () => {
  test.skip('dependent rule', () => {
    const map = `map "http://test.com" = test
    group example(source src, target tgt) {
      src.name as sn -> tgt.name as tn then {
        sn.first as fn -> tn.first = fn;
        sn.last as ln -> tn.last = ln;
      };
    }`;

    const inputs = [{ name: { first: 'bob', last: 'smith' }}];

    const engine = new Engine({ inputs, map });
    const targets = engine.execute();

    expect(targets).toEqual(inputs);
  });
});
