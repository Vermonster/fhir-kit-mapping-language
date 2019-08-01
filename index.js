const antlr4 = require('antlr4');
const js_mappingLexer = require('./generated/js_mappingLexer.js');
const js_mappingParser = require('./generated/js_mappingParser.js');

const input = `map "http://test.com/test" = test
group test(source src, target tgt) {
  src
  log 'foo';
}`;

const chars = new antlr4.InputStream(input);
const lexer = new js_mappingLexer.js_mappingLexer(chars);

lexer.strictMode = false; // do not use js strictMode

const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new js_mappingParser.js_mappingParser(tokens);
const tree = parser.structureMap();

console.log(tree.toStringTree(parser.ruleNames));
