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

# toLocaleString() Method :

-The `.toLocaleString()` method in JavaScript formats a [Date](https://www.codecademy.com/resources/docs/javascript/dates) object as a string according to the specified locale, considering cultural settings such as `language` and `date/time` formatting preferences specific to the chosen region or country.

## Syntax  
```javascript {copy} 
+dateObj.toLocaleString(locales, options)
```
- `dateObj`: The `Date` object used to format as a string based on the locale.
- `locales`: A `string` or an `array of strings` that specifies one or more `locales` or language tags for formatting the date. 
- `options`: An object that allows customizing the formatting behavior, such as specifying the format for `date`, `time`, `numeric values`, and more.

**Note:** Both the `locales` and `options` parameters in the `.toLocaleString()` method are optional. If the parameters are not provided, the method will use `default` values based on the runtime environment.


## Example  

```javascript {copy}
const currentDate = new Date(); 
const locale = 'en-US';
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(currentDate.toLocaleDateString(locale, options));
```
In this example, `toLocaleString()` formats the current `date` and `time` according to the long date format with the full `weekday`, `month`, `day`, and `year` in English (United States) `locale`.
The output could be something like: 
```shell {copy}
// Output : "Monday, May 6, 2024"
```
Depending on the current `date` and `time` when the code is executed.


## Codebyte Example

In the following example the variables `locale` and `options` can be modified, to print the `Date` in a custom format:

```codebyte/javascript {copy}
const date = new Date(Date.now());

const locale = 'fr-MA';
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
};

console.log(date.toLocaleString(locale, options));
```


