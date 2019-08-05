# FHIR Mapping Language for JavaScript


```
 .----------.   .-----------.   .--------.   .-----.   .------------.
 |          |   |           |   |        |   |     |   |            |
 |  FHIR ML |-->| Tokenizer |-->| Parser |-->| AST |-->| JavaScript |
 |          |   |           |   |        |   |     |   |            |
 '----------'   '-----------'   '--------'   '-----'   '------------'
```

## Usage
```
// This will return the JS code as a string.
code = MappingLanguage.compile(source);

// This will return the JS code as an object
evaluator = MappingLanguage.evaluator(source);

// Calling the generated code on a sourceResource
convertedResource = evaluator(sourceResouce);

// All in one step
convertedResource = MappingLauguage.apply(source, sourceResouce);
```
