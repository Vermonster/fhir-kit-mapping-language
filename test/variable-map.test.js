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
});