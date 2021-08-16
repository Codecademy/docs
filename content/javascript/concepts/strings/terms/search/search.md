---
Title: ".search()"
Description: "Takes a regular expression argument and returns either the character position of the start of the first matching substring or -1 if there is no match."
Subjects:
  - "Web Development"
  - "Computer Science"
Tags:
  - "Strings"
  - "Methods"
CatalogContent:
  - "introduction-to-javascript"
  - "paths/front-end-engineer-career-path"
---



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
