---
Title: '.substring()'
Description: 'Returns a part of a string from a given starting index or between the start and end index. The index starts at zero.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'paths/front-end-engineer-career-path'
---

The **`.substring()`** method returns a part of a string from a given starting index or between the start and end index. The index starts at zero.

## Syntax

```pseudo
myString.substring(startIndex, endIndex);
```

- `startIndex` is the starting index from which the returned substring will cover.
- `endIndex` is optional. It defaults to cover the rest of the string.

## Example

Returning a part of a string from a given starting index:

```js
console.log('Do you love JavaScript or Python?'.substring(2));
// Output: you love JavaScript or Python?
```

## Codebyte Example

Returning a part of a string between start and end index:

```codebyte/javascript
console.log('Do you love JavaScript or Python?'.substring(12, 22));
```
