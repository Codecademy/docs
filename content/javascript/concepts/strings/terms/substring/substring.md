---
Title: '.substring()'
Description: 'Returns a part of a string from a given starting index or between start and end index. Index starts at zero.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'paths/front-end-engineer-career-path'
---

Return a part of a string from a given starting index or between start and end index. Index starts at zero.

## Syntax

```js
string.substring(startIndex, endIndex);
```

- `endIndex` is optional.

## Example 1

Returning a part of a string from a given starting index:

```js
console.log('Do you love JavaScript or Python?'.substring(2));
// Output: you love JavaScript or Python?
```

## Example 2

Returning a part of a string between start and end index:

```js
console.log('Do you love JavaScript or Python?'.substring(3, 6));
// Output: you
```

## Codebyte Example

```codebyte/javascript
//Return the cat's name
console.log("The cat's name is Bruno".substring(17))

```