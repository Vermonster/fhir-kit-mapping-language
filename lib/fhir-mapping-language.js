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


// Visitor Pattern...
const js_mappingVisitor = require('./parser/generated/js_mappingVisitor').js_mappingVisitor;

let sourceContext = [];
let sourceMap = {};
let targetMap = {};
const target = {};

class Visitor extends js_mappingVisitor {
  /**
   * Entry point of tree visiting
   *
   * @param {object} ctx
   * @returns {string}
   */
  start(ctx) {
    return this.visitStructureMap(ctx);
  }

  set source(source) {
    this._source = source;
  }

  get source() {
    return this._source;
  }

  visitChildren(ctx) {
    let code = "";

    for (let i = 0; i < ctx.getChildCount(); i++) {
      code += this.visit(ctx.getChild(i)) + ' ';
    }

    return code.trim();
  }

  visitGroup(ctx) {
    sourceMap = {};
    targetMap = {};
    return this.visitChildren(ctx);
  }

  visitParameter(ctx) {
    const inputMode = ctx.getChild(0).getText();
    const identifier = ctx.getChild(1).getText();

    if (inputMode === 'source') {
      sourceMap[identifier] = this.source;
    }
    if (inputMode === 'target') {
      targetMap[identifier] = target;
    }

    return this.visitChildren(ctx);
  }

  visitTerminal(ctx) {
    return ctx.getText();
  }

  visitJs_rule(ctx) {
    sourceContext = [];
    return this.visitChildren(ctx);
  }

  visitRuleContext(ctx) {
    const identifier = ctx.getChild(0).getText();
    const attribute = ctx.getChild(2) && ctx.getChild(2).getText();
    return { identifier, attribute };
  }

  visitRuleSource(ctx) {
    const { identifier, attribute } = this.visit(ctx.getChild(0));
    const value = sourceMap[identifier][attribute];
    sourceContext.push(value);
    return this.visitChildren(ctx);
  }

  visitRuleTarget(ctx) {
    const { identifier, attribute } = this.visit(ctx.getChild(0));
    targetMap[identifier][attribute] = sourceContext.pop();
    return this.visitChildren(ctx);
  }
}


const fhirMap = (source, structureMap) => {
  const tree = ast(structureMap);
  const visitor = new Visitor();
  visitor.source = source;
  visitor.start(tree);
  return target;
};

module.exports = { fhirMap };
