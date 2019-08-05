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
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};

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

  enterGroup(ctx) {
    const groupName = ctx.identifier().getText();
    this.addGroup(groupName);
  }

  exitGroup(ctx) {
    this.currentGroup.pop();
  }

  enterParameter(ctx) {
    const inputMode = ctx.inputMode().getText();
    const identifier = ctx.identifier().getText();
    this.currentGroup[identifier] = this[inputMode];
  }

  enterRules(ctx) {
    console.log("in rules");
    console.log(this.currentGroup);
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

module.exports = { fhirMap };
