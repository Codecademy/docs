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

The **`.valueOf()`** method returns the [primitive](https://www.codecademy.com/resources/docs/javascript/data-types) value of a `String` object, similar to the `.toString()` method. Usually, this method is called internally by JavaScript.

> **Note:** Objects that are descendants of the `Object` class, including `String`s, inherit the `.valueOf()` method.

## Syntax

```js
stringObject.valueOf();
```

The `.valueOf()` method takes no parameters.

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

Although the `.valueOf()` method is typically invoked internally by JavaScript, it can be used by calling it on a `String` object:

```codebyte/javascript
const animal = 'cat';
console.log(animal === animal.valueOf());

console.log('apple'.valueOf() === 'apple');
```
