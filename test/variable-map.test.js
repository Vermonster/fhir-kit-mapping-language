const { VariableMap } = require('../lib/variable-map');

let variableMap;

beforeEach(() => {
  variableMap = new VariableMap();
  const source = { name: { firstName: 'Bob', lastName: 'Smith' } };
  variableMap.addItem({
    identifier: 'src',
    value: source,
    root: true
  });

  variableMap.addItem({
    identifier: 'sn',
    path: ['src', 'name']
  });

  variableMap.addItem({
    identifier: 'last',
    path: ['sn', 'lastName']
  });
});

it('#addItem() - duplicates overwrite', () => {
  variableMap.addItem({
    identifier: 'src',
    value: { foo: 'bar' },
    root: true
  });

  const value = variableMap.getValue('src');
  expect(value).toEqual({ foo: 'bar' });

  const { items } = variableMap;
  const matches = items.filter(i => i.identifier === 'src');
  expect(matches.length).toEqual(1);
});

it('#dependents()', () => {
  let dependents = variableMap.dependents('src');
  expect(dependents.map(d => d.identifier)).toEqual(['sn', 'last']);

  dependents = variableMap.dependents('sn');
  expect(dependents.map(d => d.identifier)).toEqual(['last']);

  dependents = variableMap.dependents('last');
  expect(dependents.map(d => d.identifier)).toEqual([]);
});

describe('#delItem()', () => {
  it('#delItem() - leaf', () => {
    variableMap.delItem('last');
    expect(variableMap.find('last')).toBe(undefined);
  });

  it('#delItem() - dependents', () => {
    variableMap.delItem('src');
    expect(variableMap.find('last')).toBe(undefined);
    expect(variableMap.find('sn')).toBe(undefined);
    expect(variableMap.find('src')).toBe(undefined);
  });
});

describe('#resolvePath()', () => {
  it('resolves string - flat', () => {
    const path = variableMap.resolvePath('sn');
    expect(path).toEqual(['src', 'name']);
  });

  it('resolves string - nested', () => {
    const path = variableMap.resolvePath('last');
    expect(path).toEqual(['src', 'name', 'lastName']);
  });

  it('resolves array', () => {
    const path = variableMap.resolvePath(['sn', 'lastName']);
    expect(path).toEqual(['src', 'name', 'lastName']);
  });

  it('does not resolve bad paths', () => {
    const path = variableMap.resolvePath('foo');
    expect(path).toEqual([]);
  });
});

describe('#getValue()', () => {
  it('gets value string - root', () => {
    const value = variableMap.getValue('src');
    expect(value).toEqual({ name: { firstName: 'Bob', lastName: 'Smith' } });
  });

  it('gets value string - flat', () => {
    const value = variableMap.getValue('sn');
    expect(value).toEqual({ firstName: 'Bob', lastName: 'Smith' });
  });

  it('gets value string - nested', () => {
    const value = variableMap.getValue('last');
    expect(value).toEqual('Smith');
  });

  it('gets value array', () => {
    const value = variableMap.getValue(['sn', 'firstName']);
    expect(value).toEqual('Bob');
  });

  it('thows error with bad paths', () => {
    expect(() => {
      variableMap.getValue('foo');
    }).toThrow();
  });
});

describe('#setValue()', () => {
  it('sets string - root', () => {
    variableMap.setValue('src', { test: true });
    const value = variableMap.getValue('src');
    expect(value).toEqual({ test: true });
  });

  it('sets string - flat', () => {
    variableMap.setValue('sn', { testName: 'Jones' });
    const value = variableMap.getValue('sn');
    expect(value).toEqual({ testName: 'Jones' });
  });

  it('sets string - nested', () => {
    variableMap.setValue('last', 'Smithgate');
    const value = variableMap.getValue('last');
    expect(value).toEqual('Smithgate');
  });

  it('sets with path (merge)', () => {
    variableMap.setValue(['sn', 'middleName'], 'Peter');
    const value = variableMap.getValue('sn');
    expect(value).toEqual({ firstName: 'Bob', middleName: 'Peter', lastName: 'Smith' });
  });

  it('thows error with bad paths', () => {
    expect(() => {
      variableMap.setValue('foo', 'test');
    }).toThrow();
  });
});
