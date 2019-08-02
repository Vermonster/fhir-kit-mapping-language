// Generated from grammars/js_mapping.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by js_mappingParser.
function js_mappingListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

js_mappingListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
js_mappingListener.prototype.constructor = js_mappingListener;

// Enter a parse tree produced by js_mappingParser#structureMap.
js_mappingListener.prototype.enterStructureMap = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#structureMap.
js_mappingListener.prototype.exitStructureMap = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#mapId.
js_mappingListener.prototype.enterMapId = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#mapId.
js_mappingListener.prototype.exitMapId = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#url.
js_mappingListener.prototype.enterUrl = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#url.
js_mappingListener.prototype.exitUrl = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#identifier.
js_mappingListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#identifier.
js_mappingListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#structure.
js_mappingListener.prototype.enterStructure = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#structure.
js_mappingListener.prototype.exitStructure = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#structureAlias.
js_mappingListener.prototype.enterStructureAlias = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#structureAlias.
js_mappingListener.prototype.exitStructureAlias = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#imports.
js_mappingListener.prototype.enterImports = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#imports.
js_mappingListener.prototype.exitImports = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#group.
js_mappingListener.prototype.enterGroup = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#group.
js_mappingListener.prototype.exitGroup = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#rules.
js_mappingListener.prototype.enterRules = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#rules.
js_mappingListener.prototype.exitRules = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#typeMode.
js_mappingListener.prototype.enterTypeMode = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#typeMode.
js_mappingListener.prototype.exitTypeMode = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#js_extends.
js_mappingListener.prototype.enterJs_extends = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#js_extends.
js_mappingListener.prototype.exitJs_extends = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#parameters.
js_mappingListener.prototype.enterParameters = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#parameters.
js_mappingListener.prototype.exitParameters = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#parameter.
js_mappingListener.prototype.enterParameter = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#parameter.
js_mappingListener.prototype.exitParameter = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#type.
js_mappingListener.prototype.enterType = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#type.
js_mappingListener.prototype.exitType = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#js_rule.
js_mappingListener.prototype.enterJs_rule = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#js_rule.
js_mappingListener.prototype.exitJs_rule = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#ruleName.
js_mappingListener.prototype.enterRuleName = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#ruleName.
js_mappingListener.prototype.exitRuleName = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#ruleSources.
js_mappingListener.prototype.enterRuleSources = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#ruleSources.
js_mappingListener.prototype.exitRuleSources = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#ruleSource.
js_mappingListener.prototype.enterRuleSource = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#ruleSource.
js_mappingListener.prototype.exitRuleSource = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#ruleTargets.
js_mappingListener.prototype.enterRuleTargets = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#ruleTargets.
js_mappingListener.prototype.exitRuleTargets = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#sourceType.
js_mappingListener.prototype.enterSourceType = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#sourceType.
js_mappingListener.prototype.exitSourceType = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#upperBound.
js_mappingListener.prototype.enterUpperBound = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#upperBound.
js_mappingListener.prototype.exitUpperBound = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#ruleContext.
js_mappingListener.prototype.enterRuleContext = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#ruleContext.
js_mappingListener.prototype.exitRuleContext = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#sourceDefault.
js_mappingListener.prototype.enterSourceDefault = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#sourceDefault.
js_mappingListener.prototype.exitSourceDefault = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#alias.
js_mappingListener.prototype.enterAlias = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#alias.
js_mappingListener.prototype.exitAlias = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#whereClause.
js_mappingListener.prototype.enterWhereClause = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#whereClause.
js_mappingListener.prototype.exitWhereClause = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#checkClause.
js_mappingListener.prototype.enterCheckClause = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#checkClause.
js_mappingListener.prototype.exitCheckClause = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#log.
js_mappingListener.prototype.enterLog = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#log.
js_mappingListener.prototype.exitLog = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#dependent.
js_mappingListener.prototype.enterDependent = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#dependent.
js_mappingListener.prototype.exitDependent = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#ruleTarget.
js_mappingListener.prototype.enterRuleTarget = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#ruleTarget.
js_mappingListener.prototype.exitRuleTarget = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#transform.
js_mappingListener.prototype.enterTransform = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#transform.
js_mappingListener.prototype.exitTransform = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#invocation.
js_mappingListener.prototype.enterInvocation = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#invocation.
js_mappingListener.prototype.exitInvocation = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#paramList.
js_mappingListener.prototype.enterParamList = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#paramList.
js_mappingListener.prototype.exitParamList = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#param.
js_mappingListener.prototype.enterParam = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#param.
js_mappingListener.prototype.exitParam = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#fhirPath.
js_mappingListener.prototype.enterFhirPath = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#fhirPath.
js_mappingListener.prototype.exitFhirPath = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#literal.
js_mappingListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#literal.
js_mappingListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#groupTypeMode.
js_mappingListener.prototype.enterGroupTypeMode = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#groupTypeMode.
js_mappingListener.prototype.exitGroupTypeMode = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#sourceListMode.
js_mappingListener.prototype.enterSourceListMode = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#sourceListMode.
js_mappingListener.prototype.exitSourceListMode = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#targetListMode.
js_mappingListener.prototype.enterTargetListMode = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#targetListMode.
js_mappingListener.prototype.exitTargetListMode = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#inputMode.
js_mappingListener.prototype.enterInputMode = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#inputMode.
js_mappingListener.prototype.exitInputMode = function(ctx) {
};


// Enter a parse tree produced by js_mappingParser#modelMode.
js_mappingListener.prototype.enterModelMode = function(ctx) {
};

// Exit a parse tree produced by js_mappingParser#modelMode.
js_mappingListener.prototype.exitModelMode = function(ctx) {
};



exports.js_mappingListener = js_mappingListener;