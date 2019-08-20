const _ = require('lodash');

class VariableMap {
  constructor () {
    this.items = [];
  }

  resolvePath (identifier) {
    const identifiers = _.castArray(identifier);
    const primaryIdentifier = identifiers.shift();

    const path = [...identifiers];
    const item = this.items.find(item => item.identifier === primaryIdentifier);

    if (!(item)) { return path; }

    if (item.root) { return [identifier]; }
    const nextIdentifier = item.path[0];
    path.unshift(...item.path.slice(1));

    if (nextIdentifier) {
      path.unshift(...this.resolvePath(nextIdentifier));
    } else {
      path.unshift(identifier);
    }

    return path;
  }

  getValue (identifier) {
    const [rootIdentifier, ...path] = this.resolvePath(identifier);
    const root = this.find(rootIdentifier);
    const { value: obj } = root;

    if (path.length) {
      return _.get(obj, path);
    } else {
      // a root object
      return obj;
    }
  }

  setValue (identifier, value) {
    const [rootIdentifier, ...path] = this.resolvePath(identifier);
    const root = this.find(rootIdentifier);
    const { value: obj } = root;

    if (path.length) {
      return _.set(obj, path, value);
    } else {
      // a root object
      root.value = value;
      return value;
    }
  }

  addItem (itemParams = {}) {
    const variableMapItem = new VariableMapItem(itemParams);
    this.items.push(variableMapItem);
  }

  find (identifier) {
    return this.items.find(i => i.identifier === identifier);
  }
}

class VariableMapItem {
  constructor ({ identifier, path = [], value, root = false, options = {} }) {
    this.identifier = identifier;
    this.path = path;
    this.root = root;
    if (root) { this.value = value; }
    this.options = options;
  }
}

module.exports = { VariableMap, VariableMapItem };
