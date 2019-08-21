const Engine = require('../../lib/engine');

describe('dependent', () => {
  test('rule', () => {
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

  test('invocation', () => {
    const map = `map "http://test.com" = test
    group example(source src, target tgt) {
      src.status as ss -> tgt.statusCode = ss;
      src.name as vn -> tgt.name as tn then name(vn, tn);
    }

    group name(source src, target tgt) {
      src.firstName as ss -> tgt.firstName = ss;
      src.lastName as ln -> tgt.familyName = ln;
    }`;

    const inputs = [{ status: 'active', name: { firstName: 'bob', lastName: 'smith' } }];

    const engine = new Engine({ inputs, map });
    const targets = engine.execute();

    expect(targets).toEqual([{ statusCode: 'active', name: { firstName: 'bob', familyName: 'smith' } }]);
  });
});
