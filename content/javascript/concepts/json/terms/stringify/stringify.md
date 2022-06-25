---
Title: '.stringify()'
Description: 'Returns the string representation of a JSON object.'
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

The `.stringify()` method returns a [string](https://www.codecademy.com/resources/docs/javascript/strings) representation of a given JSON object. It is one of two methods that belong to the reserved `JSON` object, the other being the [`.parse()`](https://www.codecademy.com/resources/docs/javascript/json/parse) method.

## Syntax

```pseudo
JSON.stringify(jsonObject);
```

The `jsonObject` must be valid. Otherwise, a `SyntaxError` is thrown.

## Example

In the example below, a valid JSON object is stored in a variable, `myJSONObject`, and then passed into the `.stringify()` method as an argument:

```js
let myJSONObject = {
  Hello: 'World',
};

console.log(JSON.stringify(myJSONObject));
```

The output will look like this:

```shell
{"Hello":"World"}
```

## Codebyte Example

The following example further demonstrates how the `.stringify()` method works:

```codebyte/javascript
let json = {
  "propA": "valueA",
  "propB": {
    "propC": "valueB"
  },
  "propD": "valueC"
};

console.log(JSON.stringify(json));
```
