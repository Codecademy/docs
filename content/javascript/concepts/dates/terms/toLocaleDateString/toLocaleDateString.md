---
Title: '.toLocaleDateString()'
Description: ' method returns a string with a language sensitive representation of the date portion of this date.'
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

<<<<<<< HEAD
This method converts the date object into string by using some locale conventions and returns it, which can be easily read by the users and understandable. It only retruns the date and if you want time too then you may use `toLocaleTimeString()`.
=======
This method returns a string with a language sensitive representation of the date portion of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and allow to customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent.
>>>>>>> 29d04067be7d37534b9634ff0ebc1e5fb4520233

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
