---
Title: 'getFullYear()' 
Description: 'Returns the four digit year for the given date' 
Subjects: 
  - 'Web Development'
Tags: 
  - 'Date'
  - 'Method'
CatalogContent: 
  - 'paths/web-development'
---

The **getFullYear** method returns a four digit year for the date according to local time.

## Syntax

```js
myDate.getFullYear()
```

The returned value of `.getFullYear()` method is an integer representing the year for the provided date `myDate`

## Example

In the example below the `year` variable stores the year returned from a new Date object and then logs it to the console.

```js
const year = new Date().getFullYear()
console.log(year)
```

