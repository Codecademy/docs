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

The **`.match()`** method, searches a string for a match against a regular expression, and returns the matches, as an Array object.

## Syntax

```pseudo
string.match(regex)
```

- `string`: The string to be matched.
- `regex`: A regular expression object, or any object that has a Symbol.match method.

If no parameter is passed, it will return an Array with an empty string: [""], because the parameter is then equivalent to match(/(?:)/).
If the regular expression does not include the “g” flag, it returns the Array object with the result at index 0. If the “g” flag is used, the resulting Array object contains only the matches and nothing else.

## Example

In the following example, a string variable called `paragraph` contains a sentence. `regex` defines a regular expression (regex) to match all uppercase letters in the string
Then, the `.match()` method applies the regular expression to the string and returns an array of all the matches.

Find all the uppercase letters in the `paragraph` string:

```js
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
console.log(paragraph.match(regex));
// Output: ["T", "I"]
```

If the "g" flag is not used, it returns the Array object with the result at index 0:
```js
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/;
console.log(paragraph.match(regex));
// Output: ['T', index: 0, input: 'The quick brown fox jumps over the lazy dog. It barked.', groups: undefined]
```

## Codebyte Example

Here is a codebyte example that demonstrates the usage of the `.match()` method:

```codebyte/javascript
const myStr = 'Hello Alligators, Hello Devs, how are you?';
const regex = /Hello/g;
console.log(myStr.match(regex))
```
