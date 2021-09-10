---
Title: '.join()'
Description: 'Elements of an array are converted to strings and concatenated together, returning the resulting string.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

Elements of an array are converted to strings and concatenated together, returning the resulting string.

## Syntax

```js
array.join(seperator);
```

An optional separator parameter specifies a string to separate each pair of adjacent element of the array.

```js
array.join(' + ');
```

If a _separator_ is not provided, the array element will be separated with a comma.

```js
array.join();
```

If the _separator_ is an empty string, the result will be the joining of all the elements without any characters in between them.

```js
array.join('');
```

## Examples

Joining an array into a string without a separator argument:

```js
const gameObjects = ['rock', 'paper', 'scissors'];
const joinNoSeparator = gameObjects.join();

console.log(joinNoSeparator);
// Output: rock,paper,scissors
```

Joining an array into a string with a separator argument:

```js
const gameObjects = ['rock', 'paper', 'scissors'];
const joinWithSeparator = gameObjects.join(' + ');

console.log(joinWithSeparator);
// Output: rock + paper + scissors
```

Joining an array into a string with an empty string separator argument:

```js
const gameObjects = ['rock', 'paper', 'scissors'];
const joinWithEmptyString = gameObjects.join('');

console.log(joinWithEmptyString);
// Output: rockpaperscissors
```
