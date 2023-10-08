---
Title: '.replaceAll()'
Description: 'Returns a new string by replacing all the matches of searchValue by replacementValue'
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

Returns a new string by replacing all the matches of searchValue by replacementValue.

## Syntax

```js
string.replaceAll(searchValue, replacementValue);
```

The `searchValue` can be either a [string](https://www.codecademy.com/resources/docs/javascript/strings) or [RegExp](https://www.codecademy.com/resources/docs/javascript/regexp).

## Example

Replace all the word `'scream'` with `'laugh'`:

```js
const sentence = `I scream, you scream, we all scream for ice cream.`;

console.log(sentence.replaceAll('scream', 'laugh'));
// Output: I laugh, you laugh, we all laugh for ice cream.
```
