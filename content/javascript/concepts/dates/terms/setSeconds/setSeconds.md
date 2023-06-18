---
Title: '.setSeconds()'
Description: 'Set the seconds component of a date object to a specified value'
Subjects:
  - 'Web Development'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'paths/web-development'
  - 'introduction-to-javascript'
---

The **`.setSeconds()`** method takes an integer value as its parameter, representing the new value for the seconds.

## Syntax

```pseudo
myDate.setSeconds(secondsValue)
```

The returned value from `.setSeconds()` modifies the original date object by setting the seconds to the specified value.

## Example

In the example below, the `myDate` variable takes the provided Time and then the `.setSeconds()` method is applied to return a modified time.

```js
const myDate = new Date();
myDate.setSeconds(30);

console.log(myDate);
```

This results in the following output:

```shell
Thu Jun 17 2023 12:34:30 GMT+0000
```
