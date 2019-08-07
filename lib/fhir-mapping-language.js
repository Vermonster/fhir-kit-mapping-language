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
  constructor(source, target = {}) {
    super();
    this.source = source;
    this.target = target;
    this.variables = {};
    this.pathMap = {};
  }

  // Called whenever we enter a group.
  // This creates a new nested space in variables
  // and adds the current group to the stack
  addGroup(groupName) {
    this.variables[groupName] = {};
    this.pathMap[groupName] = {};
    this.currentGroup = groupName;
  }

  setVar(name, value) {
    this.variables[this.currentGroup][name] = value;
    console.log(this.target);
    console.log(this.variables);
  }

  lookupPath(to) {
    console.log(to);
    // vtt => tgt.name
    // tgt => target
    // vtt => target.name
    return 'name';
  }

  getVar(name) {
    return this.variables[this.currentGroup][name];
  }

  getChildren(ctx) {
    const children = [];
    for (let i = 0; i < ctx.getChildCount(); i++) {
      children.push(ctx.getChild(i));
    }
    return children;
  }

  // --- Tree methods
  enterGroup(ctx) {
    const groupName = ctx.identifier().getText();

    // create a new group, a namespace for all children...
    this.addGroup(groupName);
  }

  enterParameter(ctx) {
    const inputMode = ctx.inputMode().getText();
    const identifier = ctx.identifier().getText();

    // Use setVar to setup our initial variables.
    this.setVar(identifier, this[inputMode]);

    // Setup our inital path chain as well.
  }

  exitJs_rule(ctx) {
    if (ctx.dependent()) {
      const invocation = ctx.dependent().invocation();
      if (invocation) {
        const invocationIdentifier = invocation.identifier().getText();
        if (invocationIdentifier === 'defaultMappingGroup') {
          const [ from, to ] = invocation
            .paramList()
            .param()
            .map(i => i.getText());

          const value = this.getVar(from);
          this.setVar(to, value);

          const path = this.lookupPath(to);
          // update the target
          _.set(this.target, path, value);
          console.log(this.target);
        }
      }
    }

    if (ctx.ruleTargets()) {
    }
  }

  enterRuleSource(ctx) {
    if (ctx.alias()) {
      const [ sourceIdentifier, sourceAttribute ] = ctx.ruleContext().identifier().map(item => item.getText());
      const value = this.getVar(sourceIdentifier)[sourceAttribute];
      const identifier = ctx.alias().identifier().getText();

      this.setVar(identifier, value);
    }
  }

  enterRuleTarget(ctx) {
    const [ targetIdentifier, targetAttribute ] = ctx.ruleContext().identifier().map(item => item.getText());

    if (ctx.transform()) {
      const transformOperation = ctx.transform()
        .invocation()
        .identifier()
        .getText();

      if (transformOperation === 'create') {
        const target = this.getVar(targetIdentifier);
        target[targetAttribute] = undefined;
      }
    }

    if (ctx.alias()) {
      const value = this.getVar(targetIdentifier)[targetAttribute];
      const identifier = ctx.alias().identifier().getText();

      this.setVar(identifier, value);
    }
  }

  enterDependent(ctx) {
  }

  enterAlias(ctx) {
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
