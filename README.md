# FHIR Mapping Language for JavaScript

see: https://www.hl7.org/fhir/mapping-language.html

## Usage

```javascript
const Engine = require('./lib/engine');

const map = `map "http://test.com" = test

group example(source src, target tgt) {
  src.name as vn -> tgt.name as tn then {
    vn.firstName as g -> tn.firstName = g;
    vn.lastName as ln -> tn.familyName = ln;
  };
}`;

const inputs = [
  { name: { firstName: 'bob', lastName: 'smith' } }
];

const engine = new Engine({ inputs, map });

const targets = engine.execute(); // [ { name: { firstName: 'bob', familyName: 'smith' } }]
```

## Features

Very early library, currently supporting:

* copy (concrete syntax)
* literal assignment
* dependent rule invocation

See `test/engine` for examples of current functionality.
