---
Title: '.match()'
Description: 'Returns an array with the items being matches from a provided regular expression found in the string.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

In JavaScript, the **`.match()`** [method](https://www.codecademy.com/resources/docs/javascript/methods), searches a string for a match against a regular expression, and returns the matches, as an Array object.

## Syntax

```pseudo
string.match(regex)
```

- `string`: The string to be matched.
- `regex`: A regular expression object, or any object that has a Symbol.match method.

## Example

Take the following example:

```js
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
console.log(paragraph.match(regex));
```

The above code produces the following output:

```shell
["T", "I"]
```

## Codebyte Example

Here is a codebyte example that demonstrates the usage of the `.match()` method:

```codebyte/javascript
const myStr = 'Hello Alligators, Hello Devs, how are you?';
const regex = /Hello/g;
console.log(myStr.match(regex))
```
