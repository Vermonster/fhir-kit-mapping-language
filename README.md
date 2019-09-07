# FHIR Mapping Language for JavaScript

see: https://www.hl7.org/fhir/mapping-language.html

## Usage

```javascript
const Engine = require('./lib/engine');


// Make 2 maps
const map1 = `map "http://test.com/1" = test1

imports "http://test.com/2"

group example(source src, target tgt) {
  src.name as vn -> tgt.name as tn then {
    vn.firstName as g -> tn.firstName = g;
    vn.lastName as ln -> tn.familyName = ln;
  };
  src.address as sa -> tgt.address as ta then address(sa, ta);
}
`;

const map2 = `map "http://test.com/2" = test2

group address(source src, target tgt) {
  src.street as s -> tgt.street = s;
}
`;


const maps = [ map1, map2 ];

// Create a new engine with two maps
const engine = new Engine(maps);

// Setup inputs and execute with the specified map
const inputs = [
  {
    name: { firstName: 'bob', lastName: 'smith' },
    address: { street: '123 Main St' }
  }
];
const targets = engine.execute('http://test.com', inputs); // [
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
* imports with wildcards

See `test/engine` for examples of current functionality.
