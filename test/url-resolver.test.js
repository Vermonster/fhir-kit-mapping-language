const { URL } = require('url');
const fs = require('fs');
const UrlResolver = require('../lib/url-resolver.js');

const filePathBuilder = (fixtureFile) => {
  return `file://${__dirname}/fixtures/${fixtureFile}.json`;
};

const urlResolver = new UrlResolver();

beforeEach(() => {
  urlResolver.add('http://test.com/item/0import1', filePathBuilder('import1'));
  urlResolver.add('http://test.com/item/0import2', filePathBuilder('import2'));
});

it('should match exact', () => {
  const url = new URL(filePathBuilder('import1'));
  const import1 = fs.readFileSync(url).toString();
  expect(urlResolver.resolve('http://test.com/item/0import1')).toEqual([import1]);
});

it('should match partial', () => {
  const url = new URL(filePathBuilder('import1'));
  const import1 = fs.readFileSync(url).toString();
  expect(urlResolver.resolve('http://test.com/item/0import*')).toEqual([import1]);
});

it.todo('should return empty when no match');
