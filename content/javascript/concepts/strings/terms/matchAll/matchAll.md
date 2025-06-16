---
Title: 'matchAll()'
Description: 'Returns an iterator of all results matching a regular expression in a string, including capturing groups.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Iterators'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-javascript'
  - 'paths/full-stack-engineer'
---

The **`matchAll()`** method is a built-in JavaScript function that returns an [iterator](https://www.codecademy.com/resources/docs/javascript/iterators) of all matches of a [regular expression](https://www.codecademy.com/resources/docs/general/regular-expressions) within a string. It provides detailed match results, including capturing groups and match indices.

## Syntax

```pseudo
str.matchAll(regexp)
```

**Parameters:**

- `regexp`: A regular expression object with the global (`g`) flag. If the `g` flag is not present, a `TypeError` is thrown.

**Return value:**

An iterator of match result objects, each containing:

- the full matched substring
- any capturing groups
- the index of the match
- the input string

## Example

In this example, `matchAll()` retrieves all regex matches from the string `'test1 test2'`, providing access to full matches and captured groups as part of a match array:

```js
const text = 'test1 test2';
const regex = /t(e)(st(\d?))/g;

const matches = Array.from(text.matchAll(regex));
console.log(matches[0]);

console.log(matches[1][0]);
```

The output of this code will be:

```shell
[
  'test1',
  'e',
  'st1',
  '1',
  index: 0,
  input: 'test1 test2',
  groups: undefined
]
test2
```

## Codebyte Example

In this example, `matchAll()` is used in a loop to find all words ending in `'at'` and log their values along with their starting indices:

```codebyte/javascript
const string = "cat bat rat";
const regex = /(\w+)at/g;

for (const match of string.matchAll(regex)) {
  console.log(`Found '${match[0]}' at index ${match.index}.`);
}
```
