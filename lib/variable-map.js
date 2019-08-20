const _ = require('lodash');

class VariableMap {
  constructor () {
    this.items = [];
  }

  resolvePath (identifier) {
    const identifiers = _.castArray(identifier);
    const primaryIdentifier = identifiers[0];

    const item = this.items.find(item => item.identifier === primaryIdentifier);
    if (!(item)) { return []; }
    if (item && item.root) { return identifiers; }

    const { path: itemPath } = item;

    const path = [...identifiers.slice(1)];
    path.unshift(...itemPath.slice(1));
    path.unshift(...this.resolvePath(itemPath[0]));
    return path;
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

  addItem (itemParams = {}) {
    const variableMapItem = new VariableMapItem(itemParams);
    this.items.push(variableMapItem);
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
