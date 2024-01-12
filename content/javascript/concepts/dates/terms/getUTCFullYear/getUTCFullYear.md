---
Title: '.getUTCFullYear()'
Description: 'Returns the year of the specified date according to universal time.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
---

The **`.getUTCFullYear()`** method is a built-in function in JavaScript that returns the year of the specified date according to universal time. It extracts the four-digit year (e.g. 2023) from a given Date object, based on the Coordinated Universal Time (UTC) time zone.

This method is particularly useful when it's necessary to retrieve the year component of a date regardless of the time zone or local system settings. It ensures consistent results regardless of the user's geographical location.

## Syntax

```pseudo
const date = new Date();
result = date.getUTCFullYear();
```

A `Date` object is used for working with dates and times. The object provides a way to create, manipulate, and format dates in various formats.

A `Date` object can be created by declaring a new variable with the `new Date()` constructor.

## Example

Consider the following example that demonstrates the usage of the `.getUTCFullYear()` method:

```js
const date = new Date('2023-06-06T10:30:00Z');
const year = date.getUTCFullYear();

console.log(year);
```

This example results in the following output:

```shell
2023
```

## Codebyte Example

The example below is a runnable code example that defines `jsOfficialRelease` as a new Date object with the official release date of Javascript. Then, a console log using the `.getUTCFullYear()` method displays the release year:

```codebyte/javascript
const jsOfficialRelease = new Date(818035200000)

console.log(jsOfficialRelease.getUTCFullYear())
```
