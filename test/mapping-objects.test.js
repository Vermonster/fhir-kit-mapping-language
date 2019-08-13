const { Rule, fnCopy } = require('../lib/mapping-objects');

describe('Rule', () => {
  test('fnCopy', () => {
    const ruleSource = {
      indentifer() {
        getText() {
          return 'src.name';
        }
      }
    };

    const ruleTarget = {
      identifier() {
        getText() {
          return 'tgt.name';
        }
      }
    };

    const target = {};
    const source = { name: 'Bob' };

    const rule = new Rule(ruleSource, ruleTarget);
    rule.transforms.push(fnCopy);
    rule.transform({ src: source, tgt: target });

    expect(target).toEqual(source);
  });
});
