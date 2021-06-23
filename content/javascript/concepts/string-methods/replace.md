---
Title: ".replace()"
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

Searches a string for a string value, or a regular expression, and returns a new string where some or all matches are replaced.

## Syntax

```js
string.replace(searchValue, replacementValue);
```

If the searchValue is a string then only the first instance of the value will be replaced. To replace all instances, use the global (g) modifier on a regular expression.

## Examples

Replace `'cats'` with `'rats'`:

```js
const weather = `It's raining cats and dogs!`;

const replaceCatsWithRats = weather.replace('cats', 'rats');

console.log(replaceCatsWithRats);
// Output: It's raining rats and dogs!
```

Find and replace multiple matches:

```js
const kidsBook = 'Brown bear, brown bear, what do you see?';

const birdsNotBears = kidsBook.replace(/bear/g, 'bird');

console.log(birdsNotBears);
// Output: Brown bird, brown bird, what do you see?
```

