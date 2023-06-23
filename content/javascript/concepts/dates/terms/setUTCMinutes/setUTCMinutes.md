---
Title: '.setUTCMinutes()'
Desciption: 'brief, description of the setUTCMinutes function, examples'
Subjects: 
    - 'Computer Science' 
    - 'Web Development'
Tags: 
    - 'Methods'
    - 'Date'
CatalogContent:
    - 'paths/web-development'
    - 'Collaborating-with-the-github-community'
---

The **.setUTCMinutes()** method of [Date](https://www.codecademy.com/resources/docs/javascript/dates) instances changes the minutes for this instance according to **universal time (UTC)**.

## **Syntax(JS)**
```js
    setUTCMinutes(minutes)
    setUTCMinutes(minutes, seconds)
    setUTCMinutes(minutes, seconds, ms)
```
## Parameters
`minutes`
<br/>
An integer value between 0 and 59 representing the minutes.
<br/>

`seconds`
<br/>
An integer value between 0 and 59 representing the seconds. If `seconds` is specified, you must also specify `minutes`.
<br/>

`ms`
<br/>
An integer value between 0 and 999 representing the milliseconds. If `ms` is specified, you must also specify `minutes` and `seconds`.
<br/>
<br/>
<br/>
If `seconds`and `ms` are not specified, the values returned from [getUTCSeconds()](https://www.codecademy.com/resources/docs/javascript/dates/getUTCSeconds) and [getUTCMilliseconds()](https://www.codecademy.com/resources/docs/javascript/dates/getUTCMilliseconds) methods are used.

## Return Value
Changes the [Date](https://www.codecademy.com/resources/docs/javascript/dates) instance and return its new timestamp. If a parameter is `NaN`, the date is set to Invalid Date and `NaN` is returned.

## **Example**
```js
const date = new Date();
console.log("Before:", date.toUTCString()); // Before: Wed, 23 Jun 2023 12:34:56 GMT

date.setUTCMinutes(45);

console.log("After:", date.toUTCString()); // After: Wed, 23 Jun 2023 12:45:56 GMT
```
**.toUTCString()** method converts a [Date](https://www.codecademy.com/resources/docs/javascript/dates) object to a string representation using the UTC(Coordinated Universal Time) timezone.
### Output
```js
Before: Wed, 23 Jun 2023 12:34:56 GMT
After: Wed, 23 Jun 2023 12:45:56 GMT
```

