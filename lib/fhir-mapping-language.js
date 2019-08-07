const antlr4 = require('antlr4');
const js_mappingLexer = require('./parser/generated/js_mappingLexer.js');
const js_mappingParser = require('./parser/generated/js_mappingParser.js');

const ast = (structureMap) => {
  // Lexing and Parsing
  const chars = new antlr4.InputStream(structureMap);
  const lexer = new js_mappingLexer.js_mappingLexer(chars);

  lexer.strictMode = false; // do not use js strictMode

  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new js_mappingParser.js_mappingParser(tokens);
  const tree = parser.structureMap();

  console.log(tree.toStringTree(parser.ruleNames));
  return tree;
}

if (!Array.prototype.last){
  Array.prototype.last = function() {
    return this[this.length - 1];
  };
};


const _ = require('lodash');

const typesByDefinitionAndPath = (structureDefinition, path) => {
  const elementsPath = 'resource.snapshot.element';

  const name = _.get(structureDefinition, 'resource.name');
  const fullPath = `${name}.${path}`;

  const elements = _.get(structureDefinition, elementsPath);

  const matchingElement = elements.find((e) => {
    return (
      (_.get(e, 'path') === fullPath) ||
      (_.get(e, 'path') === `${fullPath}[x]`)
    );
  });

  const types = _.get(matchingElement, 'type');
  return types.map(type => type.code);
}

// Object to represent each individual transformation
class Transform {
  constructor(source, target, operation, sourcePath, targetPath) {
    this.source = source;
    this.target = target;
    this.operation = operation;
    this.sourcePath = sourcePath;
    this.targetPath = targetPath;
  }

  evaluate() {
    const value = _.get(this.source, this.sourcePath);
    if (this.operation === '->') {
      return _.set(this.target, this.targetPath, this.value());
    }
  }
}

// Listener pattern...
const js_mappingListener = require('./parser/generated/js_mappingListener.js').js_mappingListener;

class FhirMappingListener extends js_mappingListener {
  constructor(source, target) {
    super();
    this.source = source;
    this.target = target;
  }

  // TODO: Actual implementation
  assignTarget() {
    Object.assign(this.target,
      { name: 'bob' });
  }

  enterGroup(ctx) {
  }

  enterParameter(ctx) {
  }

  exitStructureMap(ctx) {
    this.assignTarget();
  }
};


const fhirMap = (source, structureMap) => {
  const tree = ast(structureMap);
  if (!tree) { throw("Parsing Error"); }

  const target = {};
  const map = new FhirMappingListener(source, target);
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(map, tree);
  return target;
};

module.exports = { fhirMap,
  Transform,
  typesByDefinitionAndPath
};
