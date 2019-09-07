const Engine = require('../../lib/engine');

describe('import', () => {
  test('importing single known map', () => {
    const map1 = `map "http://test.com/1" = test

    imports "http://test.com/2"

    group example1(source src, target tgt) {
      src.name as sn -> tgt.name as tn then example2(sn, tn);
    }`;

    const map2 = `map "http://test.com/2" = test
    group example2(source src, target tgt) {
      src.firstName as ss -> tgt.firstName = ss;
    }`;

    const inputs = [{ name: { firstName: 'Bob' } }];
    const engine = new Engine([map1, map2]);
    const targets = engine.execute('http://test.com/1', inputs);
    expect(targets).toEqual(inputs);
  });

  test('importing using wildcard', () => {
    const map1 = `map "http://test.com/1" = test

    imports "http://test.com/2*"

    group example1(source src, target tgt) {
      src.name as sn -> tgt.name as tn then example2(sn, tn);
      src.name as sn -> tgt.name as tn then example3(sn, tn);
    }`;

    const map2 = `map "http://test.com/2first" = test
    group example2(source src, target tgt) {
      src.firstName as ss -> tgt.firstName = ss;
    }`;

    const map3 = `map "http://test.com/2last" = test
    group example3(source src, target tgt) {
      src.lastName as ss -> tgt.lastName = ss;
    }`;

    const inputs = [{ name: { firstName: 'Bob', lastName: 'Smith' } }];
    const engine = new Engine([map1, map2, map3]);
    const targets = engine.execute('http://test.com/1', inputs);
    expect(targets).toEqual(inputs);

  });

});
