---
Title: '.valueOf()'
Description: 'Returns the value of a String object as a string.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Objects'
  - 'Strings'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.valueOf()`** method returns the primitive value of a `String` object, similar to the `toString()` method of JavaScript Strings. Usually this method isn't used in code but is called internally by JavaScript.

> **Note:** This method is for `String` objects and not to be confused with the `.valueOf()` method of the `Object` class.

## Syntax

```js
stringObject.valueOf();
```

The `.valueOf` method takes no parameters.

## Example

All primitive string values are wrapped in a `String` object (`new String(value)`). In the following example, this primitive value is returned by the `.valueOf()` method:

```js
const name = new String('Bill');
console.log(name);
console.log(name.valueOf());
```

This will print the following:

```shell
[String: 'Bill']
Bill
```

## Codebyte Example

A less common use case for the `.valueOf()` method is calling on variables with string literals or on the string literal directly:

```codebyte/javascript
const animal = 'cat';
console.log(animal === animal.valueOf());

console.log('apple'.valueOf() === 'apple');
```
