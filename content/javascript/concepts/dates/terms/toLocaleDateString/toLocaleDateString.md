---
Title: '.toLocaleDateString()'
Description: 'The `.toLocaleDateString()` method returns a modified string of a given `Date` object, usually for events. It is translated to a specific language according to an event's `locale` and other `options`'
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

This method converts the date object into string by using some locale conventions and returns it, which can be easily read by the users and understandable. It only retruns the date and if you want time too then you may use `toLocaleTimeString()`.

## Syntax

```
date.toLocaleDateString()
```

## Example

In basic use without specifying a locale, a formatted string in the default locale and with default options is returned ie. en-US.

```
var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

console.log(date.toLocaleDateString());

// "12/11/2012"  en-US locale

```

## More Examples

You can also get the dates based on different countries by passing their short-codes(string) as a parameter as shown on the below examples.

```
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// US English uses month-day-year order
console.log(date.toLocaleDateString('en-US'));


// British English uses day-month-year order
console.log(date.toLocaleDateString('en-GB'));
```
