---
Title: '.parse()'
Description: ''
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

The `.parse()` method is one of two methods belonging to the reserved `JSON` object, the other one being the [`.stringify()`](https://www.codecademy.com/resources/docs/javascript/json/stringify) method.

## Syntax

```pseudo
JSON.parse(jsonString);
```

The `jsonString` must be a valid JSON object. Otherwise, a `SyntaxError` is thrown.

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
let json = `{
  "propA": "valueA",
  "propB": {
    "propC": "valueB"
  },
  "propD": "valueC"
}`;

console.log(JSON.parse(json));
```
