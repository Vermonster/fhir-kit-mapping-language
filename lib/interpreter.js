const antlr4 = require('antlr4');
const _ = require('lodash');
require('./utils');
const { ast } = require('./parser/ast');

class Group {
  constructor(name) {
    this.name = name;
    this.parameters = [];
  }
}

class Rule {
  constructor(group) {
    this.group = group;
    this.contexts = [];
    this.fnStack = [];
  }

  execute() {
    this.fnStack.forEach(fn => fn());
  }
}


const Listener = require('./parser/generated/js_mappingListener.js')
  .js_mappingListener;

class StructureMapListener extends Listener {
  constructor(options = {}) {
    super();
    this.options = options;
    this.rules = [];
  }

  currentRule() { return this.rules.last(); }

  // set group-wide variables (sources and targets)
  enterGroup(ctx) {
    const name = ctx.identifier().getText();
    this.group = new Group(name);
  }

  enterParameter(ctx) {
    const inputMode = ctx.inputMode().getText();
    const identifier = ctx.identifier().getText();
    const type = ctx.type() && ctx.type().getText();
    this.group.parameters.push({inputMode, identifier, type});
  }

  enterJs_rule(ctx) {
    this.rules.push(new Rule(this.group));
  }

  enterRuleContext(ctx) {
    const path = ctx.identifier()
      .map(i => i.getText())
      .join(".");

    const value = _.get(this.source, path);
    this.currentRule().contexts.push({ path: path, value: value});

    const ruleContextFn = () => {
      this.currentContext = { };
    };

    this.currentRule().fnStack.push(ruleContextFn);
  }

  enterAlias(ctx) {
    const currentRuleContext = this.currentRule().contexts.last();

    const aliasFn = () => {
      const key = ctx.identifier().getText();
      console.log(currentRuleContext);
      const { value, path } = currentRuleContext;
      console.log(key, value, path);
    };

    this.currentRule().fnStack.push(aliasFn);
  }

  exitRule(ctx) {
  }

  exitStructureMap(ctx) {
    this.rules.map((rule) => rule.execute());
    //const assigns = this.rules.map((rule) => rule.execute());
    //Object.assign(this.target, ...assigns);
  }
};

const interpreter = (source, structureMap) => {
  const tree = ast(structureMap);
  if (!tree) { throw("Parsing Error"); }

  const target = {};
  const map = new StructureMapListener(source, target);
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(map, tree);
  return target;
};

module.exports = {
  interpreter
};
