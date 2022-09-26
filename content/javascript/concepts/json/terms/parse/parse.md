---
Title: '.parse()'
Description: 'Returns a new value taken from a provided JSON string.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'JSON'
  - 'Objects'
  - 'Strings'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

The `.parse()` method returns a new value taken from a provided JSON string.

## Syntax

```pseudo
JSON.parse(jsonString, transformer);
```

The `jsonString` must contain valid JSON. Otherwise, a `SyntaxError` is thrown. Common JSON includes single [objects](https://www.codecademy.com/resources/docs/javascript/objects) or [arrays](https://www.codecademy.com/resources/docs/javascript/arrays) of them. However, [data types](https://www.codecademy.com/resources/docs/javascript/data-types) like booleans and numbers are also valid.

The `transformer` function is an optional parameter that operates directly on the parsed `jsonString` before the resulting transformation is returned.

## Example

In the example below, a valid JSON object is stored in a variable, `myJSONString`, and then passed into the `.parse()` method as an argument:

```js
let myJSONString = '{"Hello": "World"}';

console.log(JSON.parse(myJSONString));
```

The output will look like this:

```shell
{ Hello: 'World' }
```

## Codebyte Example

The following example further demonstrates how the `.parse()` method works:

```codebyte/javascript
let classicJSON = `{
  "propA": "valueOne",
  "propB": {
    "propC": "valueTwo"
  },
  "propD": "valueThree"
}`;

let stringJSON = '"Strings should be wrapped in double-, then in single-quotes."';

let booleanJSON = 'true';

let numberJSON = 42;

let arrayJSON = '[1, 2, 3]';

console.log(JSON.parse(classicJSON));
console.log(JSON.parse(stringJSON));
console.log(JSON.parse(booleanJSON));
console.log(JSON.parse(numberJSON));
console.log(JSON.parse(arrayJSON));
```
