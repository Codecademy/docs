---
Title: '.toLocaleDateString()'
Description: 'Returns a modified string from a given Date object, usually for events. It is translated to a specific language format according to an event locale and other options.'
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

The `.toLocalDateString()` date method returns a modified string of a given [`Date` object](https://www.codecademy.com/resources/docs/javascript/dates), usually for events. It is translated to a specific language according to an event's `locale` and other `options`.

## Syntax

```js
const myEventDate = new Date('December 31, 2021');

const locale = 'en-US';

const options = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
};

myEventDate.toLocaleDateString(locale, options);
```

## Example Without Parameters

When used without any parameters, `.toLocaleDateString()` returns a string with the `month`, `day`, and `year` options defaulted to `numeric`. How they're arranged and formatted depends on the default `locale` in which the method was used.

In the example below, `.toLocaleDateString()` is being used in the `en-US` locale (more specifically, in the `America/Los_Angeles` timezone).

```js
const date = new Date(2021, 12, 31);

console.log(date.toLocaleDateString());
// Output: 12/31/2021
```

## Format Based on Language/Region

Dates with a specific language format can be returned by passing a country or region's short-code (string) as the `locale` parameter, as shown in the example below:

```js
const date = new Date(2021, 11, 31);

// US English - month/day/year
console.log(date.toLocaleDateString('en-US'));

// Korean - year. month. day.
console.log(date.toLocaleDateString('ko-KR'));
```

The output will be:

```shell
12/31/2021
2021. 12. 31.
```

## Format with Options

The `options` parameter can be used to provide additional formatting to the returned date string:

```js
const birthday = new Date(2022, 3, 11);

options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
};

console.log(birthday.toLocaleDateString('en-US', options));
```

The output will be:

```shell
Monday April 11, 2022
```

## Codebyte Example

In the following example the variables `region` and `options` can be modified, to print the Date in a custom format:

```codebyte/javascript
const today = new Date(Date.now());

const region = 'de-DE';
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
};

console.log(today.toLocaleDateString(region, options));
```
