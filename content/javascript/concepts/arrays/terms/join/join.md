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

The **`.join()`** method returns a [string](https://www.codecademy.com/resources/docs/javascript/strings) representation of array elements concatenated together.

## Syntax

```pseudo
array.join(separator);
```

An optional `separator` parameter specifies a string or character that goes between each array element in the returned string. Passing an empty string (`''`) will join all the elements without any characters between them. If a `separator` is not provided, the array elements will be separated with a comma.

## Examples

Joining an array into a string without a separator argument:

```js
const gameObjects = ['rock', 'paper', 'scissors'];
const joinNoSeparator = gameObjects.join();
const joinWithSeparator = gameObjects.join(' + ');

console.log('No separator: ', joinNoSeparator);
console.log('With separator: ', joinWithSeparator);
```

This produces the following output:

```shell
No separator:  rock,paper,scissors
With separator:  rock + paper + scissors
```

## Codebyte Example

The following example joins an array into a string with an empty string separator argument:

```codebyte/javascript
const gameObjects = ['rock', 'paper', 'scissors'];
const joinWithEmptyString = gameObjects.join('');

console.log(joinWithEmptyString);
```
