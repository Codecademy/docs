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

## Codebyte Example

The following is runnable, and demonstrates the use of the `.replace()` method:

```codebyte/javascript
// replacing a single value
const exampleStr1 = 'The quick brown fox jumps over the lazy dog.';
console.log(exampleStr1.replace('dog', 'goat'));

// replacing multiple value using regex
const exampleStr2 = 'apples are round, and apples are juicy.';
const regex = /apples/g
console.log(exampleStr2.replace(regex, 'oranges'));
```
