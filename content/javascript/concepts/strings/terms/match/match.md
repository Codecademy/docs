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

In the following example, a string [variable](https://www.codecademy.com/resources/docs/javascript/variables) called `paragraph` contains a sentence. `regex` defines a regular expression (regex) to match all uppercase letters in the string
Then, the `.match()` method applies the regular expression to the string and returns an array of all the matches.

```js
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
console.log(paragraph.match(regex));
```

The above code finds all uppercase letters in the `paragraph` string and produces the following output:

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
