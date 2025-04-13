---
Title: '.search()'
Description: 'Takes a regular expression argument and returns either the character position of the start of the first matching substring or -1 if there is no match.'
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

Takes a regular expression argument and returns either the character position of the start of the first matching substring or `-1` if there is no match.

## Syntax

```js
string.search(regularExpression);
```

## Example

Find the starting index of the substring match for our [regular expression](https://www.codecademy.com/resources/docs/javascript/regexp):

```js
const programmingLanguage = 'JavaScript';

console.log(programmingLanguage.search(/java/i));
// Output: 0
```

## Codebyte Example

The following is runnable, and demonstrates the use of the `.search()' method:

```codebyte/javascript
// Search successful
const sunnyWeather = 'Today is a sunny day.';
console.log(sunnyWeather.search(/Day/i));

// Search failure
const rainyWeather = 'Today is rainy day.';
console.log(rainyWeather.search(/Day/));
```
