---
Title: '.valueOf()'
Description: 'Returns the value of a String object as a string.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

Returns the primitive value of a String object, similar to the `toString()` method of JavaScript Strings. Typically the String `valueOf()` method (not to be confused with the Object `valueOf()` method) is not used explicitly in code, but rather behind the scenes within JavaScript.

## Syntax

```js
string.valueOf();
```

## Example

Using the `new` constructor with `String()` creates a String '_wrapper_' object. The `valueOf()` method returns the primitive value of such a String object.

```js
const name = new String('Bill');
console.log(name); // [String: 'Bill']
console.log(name.valueOf()); // 'Bill'
```

## Codebyte Example

`valueOf()` can also be called on variables that contain strings and string literals, although in these cases, its use is redundant.

```codebyte/js
const animal = 'cat';
console.log(animal === animal.valueOf()); // true

console.log('apple'.valueOf() === 'apple'); // true
```
