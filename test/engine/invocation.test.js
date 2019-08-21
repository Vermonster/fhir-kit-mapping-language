const Engine = require('../../lib/engine');

describe('invocation', () => {
  test('dependent rule', () => {
    const map = `map "http://test.com" = test
    group example(source src, target tgt) {
      src.name as vn -> tgt.name as tn then {
        vn.firstName as g -> tn.firstName = g;
        vn.lastName as ln -> tn.familyName = ln;
      };
    }`;

    const inputs = [{ name: { firstName: 'bob', lastName: 'smith' } }];

    const engine = new Engine({ inputs, map });
    const targets = engine.execute();

    expect(targets).toEqual([{ name: { firstName: 'bob', familyName: 'smith' } }]);
  });
});
