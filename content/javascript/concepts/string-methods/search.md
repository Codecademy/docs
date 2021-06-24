---
Title: ".search()"
Subjects:
  - "Web Development"
  - "Computer Science"
Tags:
  - "Strings"
  - "Methods"
Catalog Content:
  - "https://www.codecademy.com/learn/introduction-to-javascript"
  - "https://www.codecademy.com/learn/paths/web-development"
---

## Definition

Takes a regular expression argument and returns either the character position of the start of the first matching substring or `-1` if there is no match.

## Syntax

```js
string.search(regularExpression);
```

## Examples

Find the index of the substring match for our regular expression:

```js
const programmingLanguage = 'JavaScript';

console.log(programmingLanguage.search(/java/i));
// Output: 0
```

Return a `-1` if no match is found:

```js
const programmingLanguage = 'JavaScript';

console.log(programmingLanguage.search(/java/));
// Output: -1
```