const antlr4 = require('antlr4');
const js_mappingLexer = require('./generated/js_mappingLexer.js');
const js_mappingParser = require('./generated/js_mappingParser.js');

const structureMap = `map "http://test.com/test" = test

group example(source src, target tgt) {
  src.name -> tgt.realName;
}`;

const source = {
  name: 'Bob'
};

const target = {};

// Lexing and Parsing
const chars = new antlr4.InputStream(structureMap);
const lexer = new js_mappingLexer.js_mappingLexer(chars);

lexer.strictMode = false; // do not use js strictMode

const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new js_mappingParser.js_mappingParser(tokens);
const tree = parser.structureMap();

// console.log(tree.toStringTree(parser.ruleNames));

// Visitor Pattern...
const js_mappingVisitor = require('./generated/js_mappingVisitor').js_mappingVisitor;

let sourceContext = [];
let sourceMap = {};
let targetMap = {};

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
      sourceMap[identifier] = source;
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

const output = new Visitor().start(tree);

console.log(target);
