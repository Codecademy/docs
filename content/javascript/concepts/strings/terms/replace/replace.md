---
Title: '.replace()'
Description: 'Searches a string for a string value, or a regular expression, and returns a new string where some or all matches are replaced.'
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

Searches a string for a string value, or a regular expression, and returns a new string where some or all matches are replaced.

## Syntax

```js
string.replace(searchValue, replacementValue);
```

If the `searchValue` is a string then only the first instance of the value will be replaced. To replace all instances, use the global (g) modifier on a regular expression.

## Example

Replace `'cats'` with `'rats'`:

```js
const weather = `It's raining cats and dogs!`;

const replaceCatsWithRats = weather.replace('cats', 'rats');

console.log(replaceCatsWithRats);
// Output: It's raining rats and dogs!
```

## Codebyte Example

The following is runnable and demonstrates the `.replace()` method using [regular expressions (RegExp)](https://www.codecademy.com/resources/docs/javascript/regexp):

```codebyte/javascript
const exampleStr = 'apples are round, and apples are juicy.';

const regexp = /apples/g

// Replacing multiple values
console.log(exampleStr.replace(regexp, 'oranges'));
```
