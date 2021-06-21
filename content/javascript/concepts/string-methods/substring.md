---
Title: ".substring()"
Subjects:
  - "Web Development"
  - "Computer Science"
Tags:
  - "Strings"
  - "Methods"
Catalog Content:
  - "https://www.codecademy.com/learn/paths/web-development"
---

## Definition

Return a part of a string from a given starting index or between start and end index. Index starts at zero (`0`).

## Syntax

```js
string.substring(startIndex);
```

```js
string.substring(startIndex, endIndex);
```

## Example 1

Returning a part of a string from a given starting index:

```js
console.log("Do you love JavaScript or Python?".substring(2));
// Output: you love JavaScript or Python?
```

## Example 2

Returning a part of a string between start and end index:

```js
console.log("Do you love JavaScript or Python?".substring(3, 6));
// Output: you
```
