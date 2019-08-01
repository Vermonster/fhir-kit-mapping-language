// Generated from grammars/js_mapping.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by js_mappingParser.

function js_mappingVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

js_mappingVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
js_mappingVisitor.prototype.constructor = js_mappingVisitor;

// Visit a parse tree produced by js_mappingParser#structureMap.
js_mappingVisitor.prototype.visitStructureMap = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#mapId.
js_mappingVisitor.prototype.visitMapId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#url.
js_mappingVisitor.prototype.visitUrl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#identifier.
js_mappingVisitor.prototype.visitIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#structure.
js_mappingVisitor.prototype.visitStructure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#structureAlias.
js_mappingVisitor.prototype.visitStructureAlias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#imports.
js_mappingVisitor.prototype.visitImports = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#group.
js_mappingVisitor.prototype.visitGroup = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#rules.
js_mappingVisitor.prototype.visitRules = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#typeMode.
js_mappingVisitor.prototype.visitTypeMode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#js_extends.
js_mappingVisitor.prototype.visitJs_extends = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#parameters.
js_mappingVisitor.prototype.visitParameters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#parameter.
js_mappingVisitor.prototype.visitParameter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#type.
js_mappingVisitor.prototype.visitType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#js_rule.
js_mappingVisitor.prototype.visitJs_rule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#ruleName.
js_mappingVisitor.prototype.visitRuleName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#ruleSources.
js_mappingVisitor.prototype.visitRuleSources = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#ruleSource.
js_mappingVisitor.prototype.visitRuleSource = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#ruleTargets.
js_mappingVisitor.prototype.visitRuleTargets = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#sourceType.
js_mappingVisitor.prototype.visitSourceType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#upperBound.
js_mappingVisitor.prototype.visitUpperBound = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#ruleContext.
js_mappingVisitor.prototype.visitRuleContext = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#sourceDefault.
js_mappingVisitor.prototype.visitSourceDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#alias.
js_mappingVisitor.prototype.visitAlias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#whereClause.
js_mappingVisitor.prototype.visitWhereClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#checkClause.
js_mappingVisitor.prototype.visitCheckClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#log.
js_mappingVisitor.prototype.visitLog = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#dependent.
js_mappingVisitor.prototype.visitDependent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#ruleTarget.
js_mappingVisitor.prototype.visitRuleTarget = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#transform.
js_mappingVisitor.prototype.visitTransform = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#invocation.
js_mappingVisitor.prototype.visitInvocation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#paramList.
js_mappingVisitor.prototype.visitParamList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#param.
js_mappingVisitor.prototype.visitParam = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#fhirPath.
js_mappingVisitor.prototype.visitFhirPath = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#literal.
js_mappingVisitor.prototype.visitLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#groupTypeMode.
js_mappingVisitor.prototype.visitGroupTypeMode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#sourceListMode.
js_mappingVisitor.prototype.visitSourceListMode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#targetListMode.
js_mappingVisitor.prototype.visitTargetListMode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#inputMode.
js_mappingVisitor.prototype.visitInputMode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by js_mappingParser#modelMode.
js_mappingVisitor.prototype.visitModelMode = function(ctx) {
  return this.visitChildren(ctx);
};



exports.js_mappingVisitor = js_mappingVisitor;