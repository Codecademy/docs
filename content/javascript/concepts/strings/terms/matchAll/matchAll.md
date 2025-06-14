---
Title: 'matchAll'
Description: 'Retrieves all matches of a regular expression within a string as an iterator of match result objects.'
Subjects:
  - 'JavaScript'
  - 'Strings'
Tags:
  - 'regex'
  - 'string-methods'
  - 'es2020'
CatalogContent:
  - 'learn-javascript'
  - 'paths/full-stack-engineer'
---

The **`matchAll()`** method is a built-in JavaScript function that retrieves all matches of a regular expression within a string as an iterator. It provides detailed match results, including capturing groups and match indices.

## Syntax

```javascript
str.matchAll(regexp)
```

- `str`: The string to search in.
- `regexp`: A regular expression object with the global (`g`) flag.

**Returns:**  
An iterator of match result objects, each containing the matched substring, capturing groups, the index where the match was found, and the original input string.

> **Note:** If the regular expression does not have the global (`g`) flag, a `TypeError` is thrown.

## Example

```javascript
const text = 'test1 test2';
const regex = /t(e)(st(\d?))/g;

const matches = Array.from(text.matchAll(regex));
console.log(matches[0]);
// [
//   'test1',  // Full match
//   'e',      // 1st capturing group
//   'st1',    // 2nd capturing group
//   '1',      // 3rd capturing group
//   index: 0, // Index in text
//   input: 'test1 test2',
//   groups: undefined
// ]
console.log(matches[1][0]); // 'test2'
```

## Codebyte Example

```codebyte/js
const string = "cat bat rat";
const regex = /(\w+)at/g;

for (const match of string.matchAll(regex)) {
  console.log(`Found '${match[0]}' at index ${match.index}.`);
  // Output:
  // Found 'cat' at index 0.
  // Found 'bat' at index 4.
  // Found 'rat' at index 8.
}
```
