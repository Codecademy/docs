---
Title: 'toLocaleString Method'
Description: 'A method to format a Date object as a string, based on the locale.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
  
Tags:
  - 'JavaScript'
  - 'Methods'
  - 'Date'
  
CatalogContent:
  - 'learn-javascript'
  - 'paths/web-development'
---

# toLocaleString() Method :

The `.toLocaleString()` method in JavaScript is used to format a [`Date` object](https://www.codecademy.com/resources/docs/javascript/dates), as a string based on the specified locale. This means it takes into account cultural settings such as `language` and `date/time` formatting preferences specific to the selected region or country.

## Syntax : 

```js {copy}
toLocaleString(locales [, options])
```
- `locales` : Represents the `locale or locales` to use when formatting the `date`.
- `options` : Contains additional formatting options for the `date`, such as the format of the `weekday`, `month`, `year`, etc.


## Example : 

```js {copy}
const date = new Date(); // Current date and time
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(date.toLocaleString('en-US', options));
```
In this example, `toLocaleString()` formats the current `date` and `time` according to the long date format with the full `weekday`, `month`, `day`, and `year` in English (United States) `locale`.
The output could be something like: 
```shell {copy}
// Output : "Sunday, May 5, 2024"
```
Depending on the current `date` and `time` when the code is executed.


## Runnable Code Example : 
```js {copy}
const date = new Date(1985,7,4);  
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// Formatting for English (United States) :
console.log(date.toLocaleString('en-US', options));

// Formatting for Korean (South Korea) :
console.log(date.toLocaleString('ko-KR', options));

// Formatting for Hindi (India) : 
console.log(date.toLocaleString('hi-IN', options));
```
In this example, we use `toLocaleString()` to format the current `date` and `time` with the specified formatting options for `English` (United States), `Korean` (South Korea), and `Hindi` (India).


```shell {copy}
// Output : 
For English (United States): "Sunday, August 4, 1985" .
For Korean (South Korea):  "1985년 8월 4일 일요일" .
For Hindi (India): "रविवार, 4 अगस्त 1985" .
```


## Codebyte Example

In the following example the variables `locale` and `options` can be modified, to print the `Date` in a custom format:

```codebyte/js
const date = new Date(Date.now());

const locale = 'fr-MA';
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
};

console.log(date.toLocaleDateString(locale, options));
```


