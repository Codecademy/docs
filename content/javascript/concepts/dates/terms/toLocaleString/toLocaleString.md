---
Title: 'toLocaleString()'
Description: 'Returns a string formatted based on the locale for a Date object in JavaScript.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Date'
  - 'Methods'
  - 'Strings'
CatalogContent:
   - 'introduction-to-javascript'
   - 'paths/front-end-engineer-career-path'
---

In JavaScript, the `.toLocaleString()` method formats a [Date](https://www.codecademy.com/resources/docs/javascript/dates) object as a string according to the specified locale, considering cultural settings such as `language` and `date/time` formatting preferences specific to the chosen region or country.

## Syntax  

```js
dateObj.toLocaleString(locales, options)
```

- `dateObj`: A `Date` object representing the date and time to be formatted as a string based on the specified locale.
- `locales`: A `string` or an `array of strings` that specifies one or more `locales` or language tags for formatting the date. 
- `options`: An object that allows customizing the formatting behavior, such as specifying the format for `date`, `time`, `numeric values`, and more.

> **Note:** Both the `locales` and `options` parameters in the `.toLocaleString()` method are optional. If the parameters are not provided, the method will use `default` values based on the runtime environment.


## Example  

In the example below, `toLocaleString()` formats the current `date` and `time` according to the long date format with the full `weekday`, `month`, `day`, and `year` in English (United States) `locale`.

```javascript {copy}
const currentDate = new Date(); 
const locale = 'en-US';
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(currentDate.toLocaleDateString(locale, options));
```

The code above produces the following output:

```shell
Monday, May 6, 2024
```

## Codebyte Example

In the following example, `.toLocaleString()` formats the current date and time with the full `weekday`, `year`, `month`, `day`, `hour`, `minute`, and `second` in French (Morocco) locale (fr-MA).

```codebyte/javascript
const currentDate = new Date();

const locale = 'fr-MA';
const options = { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric', 
  hour: 'numeric', 
  minute: 'numeric', 
  second: 'numeric' 
  };
console.log(currentDate.toLocaleString(locale, options));
```
