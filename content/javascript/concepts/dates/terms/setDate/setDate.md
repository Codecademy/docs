---
Title: '.setDate()'
Description: 'Changes the day of the month according to local time.'
Subjects: 
  - 'Web Development'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent: 
  - 'intro-to-javascript'
  - 'path/front-end-engineer'
---

The **`.setDate()`** method changes the day of the month according to local time.

## Syntax

```js
myDate.setDate()
```

## Example

In the example below, the `myDate` takes the provided date and then uses the `setDate()` method to change this to 24. This will print Tuesday 24th January to the console.

```pseudo
const myDate = new Date('2023-01-01')
console.log(myDate.setDate(24)) // prints 24 January 2023
```