const _ = require('lodash');

function hasSubArray (parent, sub) {
  return _.intersection(parent, sub).length === sub.length;
}

class VariableMap {
  constructor () {
    this.items = [];
  }

  resolvePath (identifier) {
    const identifiers = _.castArray(identifier);
    const primaryIdentifier = identifiers[0];

    const { items } = this;

    const item = items.find(item => item.identifier === primaryIdentifier);
    if (!(item)) { return []; }
    if (item && item.root) { return identifiers; }

    const { path: itemPath } = item;

    const path = [...identifiers.slice(1)];
    path.unshift(...itemPath.slice(1));
    path.unshift(...this.resolvePath(itemPath[0]));
    return path;
  }

  // filter all items that depend on identifier
  dependents (identifier) {
    const identifiers = _.castArray(identifier);

    const { items } = this;

    const directDependents = items
      .filter(item => hasSubArray(item.path, identifiers));

    const childDependents = directDependents
      .map(item => this.dependents(item.identifier))
      .reduce((acc, val) => acc.concat(val), []);

    return [...directDependents, ...childDependents];
  }

  // delete item with identifier, and any dependents
  delItem (identifier) {
    const dependents = this.dependents(identifier);

    dependents.forEach((dependent, index) => {
      this.items.splice(index, 1);
    });

    const index = this.items.findIndex(i => i.identifier === identifier);
    this.items.splice(index, 1);
  }

  getValue (identifier) {
    const [rootIdentifier, ...path] = this.resolvePath(identifier);
    const rootItem = this.find(rootIdentifier);
    if (!(rootItem)) {
      throw (new Error(`Can't find root item for ${identifier}`));
    }

    const { value: obj } = rootItem;
    return path.length ? _.get(obj, path) : obj;
  }

  setValue (identifier, value) {
    const [rootIdentifier, ...path] = this.resolvePath(identifier);
    const rootItem = this.find(rootIdentifier);
    if (!(rootItem)) {
      throw (new Error(`Can't find root item for ${identifier}`));
    }

    const { value: obj } = rootItem;

    if (path.length) {
      return _.set(obj, path, value);
    } else {
      rootItem.value = value;
      return rootItem.value;
    }
  }

  // add or replace an item (no duplicate identifiers)
  addItem (itemParams = {}) {
    const { identifier } = itemParams;
    const { items } = this;

    const newItem = new VariableMapItem(itemParams);
    const existingIndex = this.items.findIndex(item => item.identifier === identifier);

    if (~existingIndex) {
      items[existingIndex] = newItem;
    } else {
      items.push(newItem);
    }
    return this.items;
  }

  find (identifier) {
    return this.items.find(item => item.identifier === identifier);
  }
}

class VariableMapItem {
  constructor ({ identifier, path = [], value = {}, root = false, options = {} }) {
    this.identifier = identifier;
    this.path = path;
    this.root = root;
    this.options = options;

    if (root) { this.value = value; }

    if (root && path.length) {
      throw (new Error('A root item cannot have a path length.'));
    }
  }
}

module.exports = {
  VariableMap,
  VariableMapItem
};
