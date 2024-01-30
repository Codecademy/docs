---
Title: '.toLocaleString()'
Description: 'Returns a string of a given date in the local timezone in the local format and language.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **.toLocaleString()** date method returns a string of a given [`Date` object](https://www.codecademy.com/resources/docs/javascript/dates) in the local timezone using the local formatting and language. This translation is provided according to the parameters `locale` and `options`, otherwise the default is set to the browser's location.

## Syntax

```js
date.toLocaleString(locale, options)
```
The parameters `locale` and `options` can be used. `Locale` is represented by a language subtag and a region subtag (i.e. `en-US`). `Options` is an object defining the format for `weekday`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second` and `fractionalSecondDigits`. If undefined, the default setting is "numeric".

## Example

```js
const date = new Date(Date.UTC(1963, 10, 22, 17, 30, 0));

// Using Locales
console.log(date.toLocaleString("en-US"));
// "11/22/1963, 12:30:00 PM"

console.log(date.toLocaleString("ko-KR"));
// 1963. 12. 22. 오전 12:30:00

// Using Options
const options = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
};

console.log(date.toLocaleString(options))
// 11/22/1963, 12:30:00 PM
```

## Codebyte Example

In the following example, the variables `locale` and `options` can be modified to print the `Date` in a custom format:

```codebyte/javascript
const today = new Date();

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
};

console.log(today.toLocaleString("en-CA", options));
```
