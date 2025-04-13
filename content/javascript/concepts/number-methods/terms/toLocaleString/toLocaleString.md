---
Title: '.toLocaleString()'
Description: 'Converts a date to a string of its language-sensitive form.'
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

The `.toLocaleString()` method converts a date to a string of its language-sensitive form.

## Syntax

```js
num.toLocaleString(locales, option);
```

- `locales` (optional) sets the language convention.
- `options` (optional) customized the behavior.

## Example

Converting number to a string:

```js
const x = 5;

console.log(x.toString());
// Output: 5
```

To verify if it is a string:

```js
const x = 5;

console.log(typeof x.toString());
// Output: string
```

## Codebyte Example

```codebyte/js
let date = new Date(Date.UTC(2021, 11, 20, 3, 0, 0));

console.log(date.toLocaleString('en-US'))
console.log(date.toLocaleString('zh-CN'))
```
