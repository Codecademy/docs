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

The `.toLocalDateString()` method returns a modified string of a given `Date` object, usually for events. It is translated to a specific language according to an event's `locale` and other `options`.

## Syntax

```
const myEventDate = new Date("December 31st, 2021");

const locale = "en-US";

const options = { 
  weekday: 'long', 
  month: 'long', 
  day: 'numeric', 
  year: 'numeric' 
};

myEventDate.toLocaleDateString(locale  options)
```

## Example Without Parameters

When used without any parameters, `.toLocaleDateString()` returns a string with the `month`, `day`, and `year` options defaulted to `numeric`. How they're arranged and formatted depends on the default `locale` in which the method was used.

In the example below, `.toLocaleDateString()` is being used in the `en-US` locale (more specifically, in the `America/Los_Angeles` timezone).

```
const date = new Date(Date.UTC(2021, 12, 31, 3, 0, 0));

console.log(date.toLocaleDateString()); // Output: "12/31/2021"

```

## More Examples

Dates with a specific language-translation can be returned by passing a country or region's short-code (string) as the `locale` parameter, as shown in the examaples below:

```
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// US English uses month-day-year order
console.log(date.toLocaleDateString('en-US'));


// British English uses day-month-year order
console.log(date.toLocaleDateString('en-GB'));
```
