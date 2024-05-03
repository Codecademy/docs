---
Title: '.toLocaleTimeString()'
Description: 'Returns a string representing the time portion of a Date object.'
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

The **`.toLocaleTimeString()`** date method returns a string representation of a given [`Date`](https://www.codecademy.com/resources/docs/javascript/dates) object according to an event's `locale` and other options.

## Syntax

```pseudo
dateObject.toLocaleTimeString([locales [, options]])
```
- `locales`: A string representing a BCP 47 language tag, such as 'en-US' for US English or an array of BCP 47 language tags.
- `options`: An object containing properties that control how the time string is formatted.

## Example 1

In the following example, a Date object representing August 3, 2003, is created, and then formatted it using the `.toLocaleTimeString()` method:

```js
const date = new Date('2003-08-03T00:00:00');
const timeString = date.toLocaleTimeString();
console.log(timeString);
```

The output of the above code is:

```shell
12:00:00 AM
```

## Example 2

In the following example, a `Date` object representing a specific date and time is created and then formatted into time strings using both English and Chinese locales:

```js
const randomDate = new Date(1995, 11, 17, 3, 24, 0); 

const options = {
  hour12: true,
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

const timeStringEnglish = randomDate.toLocaleTimeString('en-US', options);
const timeStringChinese = randomDate.toLocaleTimeString('zh-CN', options);

console.log("English (en-US):", timeStringEnglish); 
console.log("Chinese (zh-CN):", timeStringChinese);
```

The output of the following code is as follows:

```shell
English (en-US): 3:24:00 AM
Chinese (zh-CN): 上午3:24:00
```