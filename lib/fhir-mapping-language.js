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

  return tree;
}

if (!Array.prototype.last){
  Array.prototype.last = function() {
    return this[this.length - 1];
  };
};


const _ = require('lodash');

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
    this.dataCtx = { groups: [] };
  }

  addGroup(groupName, options = {}) {
    this.dataCtx.groups.push({ name: groupName, ...options });
  }

  get currentGroup() {
    return this.dataCtx.groups &&
      this.dataCtx.groups.last();
  }

  get currentTransformation() {
    return this.currentGroup.transformations.last();
  }

  popTransformations() {
    return this.currentGroup.transformations.pop();
  }

  popGroups() {
    return this.dataCtx.groups.pop();
  }

  addTransformation() {
    if (!(this.currentGroup.transformations)) {
      this.currentGroup.transformations = [];
    }
    this.currentGroup.transformations.push({});
  }

  evaluateCurrentTransform() {
    return this.currentTransform.evaluate();
  }

  // Tree methods

  /**
   *
   *  {
   *    name: 'example',
   *    transformations: [
   *      {
   *        source: { name: { first: 'Bob', last: 'Smith' }},
   *        target: {},
   *        sourcePath: 'name',
   *        targetPath: 'name',
   *        operations: '->'
   *      },
   *      {
   *        source: { name: { first: 'Bob', last: 'Smith' }},
   *        target: { name: { first: 'Bob', last: 'Smith' }},
   *        sourcePath: 'name.first',
   *        targetPath: 'name.surname',
   *        operations: '->'
   *      },
   *
   *    ]
   *  }
   *
   */

  /**
   *
   * src.element as vvs -> tgt.element = create('type') as vvt then defaultMappingGroup(vvs, vvt)
   *
   * {
   *    source: { src: { name: { first: 'Bob', last: 'Smith' } },
   *    target: { tgt: {}},
   *    variables: [
   *      { vss: 'src.name' },
   *      { vtt: 'tgt.name' }
   *    ],
   *    transforms: [
   *      { }
   *    ]
   *
   */
  exitStructureMap(ctx) {
  }

  enterGroup(ctx) {
    const groupName = ctx.identifier().getText();
    this.addGroup(groupName);
  }

  exitGroup(ctx) {
    this.popGroups();
  }

  enterParameter(ctx) {
    const inputMode = ctx.inputMode().getText();
    const identifier = ctx.identifier().getText();
    this.currentGroup[identifier] = this[inputMode];
  }

  enterRules(ctx) {
  }

  enterJs_rule(ctx) {
    console.log(ctx.ruleTargets().length);
    this.addTransformation();
  }

  exitJs_rule(ctx) {
    console.log(this.currentTransformation);

    // { value: 'Bob', targetPath: [ 'a', 'b' ] }
    // { a: { b: 'Bob' } }
    //
    //

    this.popTransformations();
  }

  enterRuleSource(ctx) {
    const sourceIdentifier = ctx.ruleContext().identifier()[0].getText();
    const sourceAttribute = ctx.ruleContext().identifier()[1].getText();
    this.currentTransformation.sourceIdentifier = sourceIdentifier;
    this.currentTransformation.sourceAttribute = sourceAttribute;

  }

  enterRuleTarget(ctx) {
    const targetIdentifier = ctx.ruleContext().identifier()[0].getText();
    const targetAttribute = ctx.ruleContext().identifier()[1].getText();

    this.currentTransformation.targetIdentifier = targetIdentifier;
    this.currentTransformation.targetAttribute = targetAttribute;
  }

  enterDependent(ctx) {
    this.addTransformation();
  }

  enterAlias(ctx) {
  }

};




const fhirMap = (source, structureMap) => {
  const tree = ast(structureMap);

  if (!tree) {
    throw("Parsing Error");
  }
  const map = new FhirMappingListener(source);
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(map, tree);
  return target;
};

module.exports = { fhirMap, Transform };
