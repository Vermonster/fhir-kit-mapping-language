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

});
