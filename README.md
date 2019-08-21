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
  src.address as sa -> tgt.address as ta then address(sa, ta);
}

group address(source src, target tgt) {
  src.street as s -> tgt.street = s;
}
`;

const inputs = [
  {
    name: { firstName: 'bob', lastName: 'smith' },
    address: { street: '123 Main St' }
  }
];

const engine = new Engine({ inputs, map });

const targets = engine.execute(); // [
                                  //   {
                                  //     name: { firstName: 'bob', familyName: 'smith' }
                                  //     address: { street: '123 Main St' }
                                  //   }
                                  // ]
```

## Features

Very early library, currently supporting:

* copy (concrete syntax)
* literal assignment
* dependent rules
* dependent invocations

See `test/engine` for examples of current functionality.
