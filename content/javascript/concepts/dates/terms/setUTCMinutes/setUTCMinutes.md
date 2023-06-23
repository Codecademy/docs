---
Title: '.setUTCMinutes()'
Desciption: 'brief, description of the setUTCMinutes function, examples'
Subjects: 
    - 'Computer Science' 
    - 'JavaScript'
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
<style>
    .par{
        display: inline-block; 
        background-color: rgba(63, 66, 71, 255); 
        border: 1px solid rgba(63, 66, 71, 255); 
        border-radius: 5px; 
        padding: 1px 4px;
    }
</style>
## Parameters
<span class='par'>minutes</span>
<br/>
An integer value between 0 and 59 representing the minutes.
<br/>
<br/>
<span class='par'>seconds</span>
<br/>
An integer value between 0 and 59 representing the seconds. If <span class='par'>seconds</span> is specified, you must also specify <span class='par'>minutes</span>.
<br/>
<br/>
<span class='par'>ms</span>
<br/>
An integer value between 0 and 999 representing the milliseconds. If <span class='par'>ms</span> is specified, you must also specify <span class='par'>minutes</span> and <span class='par'>seconds</span>.
<br/>
<br/>
<br/>
If <span class='par'>seconds</span> and <span class='par'>ms</span> are not specified, the values returned from [getUTCSeconds()](https://www.codecademy.com/resources/docs/javascript/dates/getUTCSeconds) and [getUTCMilliseconds()](https://www.codecademy.com/resources/docs/javascript/dates/getUTCMilliseconds) methods are used.

## Return Value
Changes the [Date](https://www.codecademy.com/resources/docs/javascript/dates) instance and return its new timestamp. If a parameter is <span class = 'par'>NaN</span>, the date is set to Invalid Date and <span class = 'par'>NaN</span> is returned.

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

