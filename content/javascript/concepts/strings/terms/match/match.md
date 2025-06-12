---
Title: '.match()'
Description: 'Returns an array of matches by matching the string against a regular expression.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.match()`** method searches a string for matches against a regular expression and returns the result as an array object. The `.match()` method is used in JavaScript to find parts of a string that match a regular expression. It is commonly applied in tasks such as extracting numbers or words, validating formats like email addresses, or parsing structured text.

## Syntax

```pseudo
string.match(regex)
```

**Parameters:**

- `regex`: A regular expression object to match against the string.

**Return value:**

- **If the regular expression has the `g` flag:** Returns an array of all matches found, or `null` if no match is found.
- **Without the `g` flag:** Returns an array with detailed information about the first match (including captured groups), or `null` if no match is found.

## Example 1: Using `.match()` to Find Uppercase Letters in a String

In the following example, a string variable `paragraph` contains a sentence, and `regex` defines a regular expression to match all uppercase letters. The `.match()` method applies this regex to the string and returns an array of all matches:

```js
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
console.log(paragraph.match(regex));
```

The output of this code will be:

```shell
[ 'T', 'I' ]
```

If the "g" flag is not used, it returns the array object with the result at index 0:

```js
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/;
console.log(paragraph.match(regex));
```

The output of this code will be:

```shell
[
  'T',
  index: 0,
  input: 'The quick brown fox jumps over the lazy dog. It barked.',
  groups: undefined
]
```

## Example 2: Finding All Occurrences of a Word Using `.match()`

This example demonstrates how to use the `.match()` method to find all occurrences of the word "Hello" in a string:

```codebyte/javascript
const myStr = 'Hello Alligators, Hello Devs, how are you?';
const regex = /Hello/g;
console.log(myStr.match(regex))
```

The output of this code is:

```shell
[ 'Hello', 'Hello' ]
```
