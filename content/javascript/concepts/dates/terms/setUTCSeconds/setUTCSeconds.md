---
Title: '.setUTCSeconds()'
Description: 'Sets the second value of a date using UTC.'
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

The **`.setUTCSeconds()`** method sets the second value of a `Date` object according to Coordinated Universal Time(UTC) and returns the updated `Date` object.

## Syntax

```pseudo
myDate.setUTCSeconds(secondsValue)
myDate.setUTCSeconds(secondsValue, millisecondsValue)
```

The `.setUTCSeconds()` method is called on the `myDate` object with an input argument `secondsValue` that passes the new value for seconds.

Optionally, the method can also set the date's millisecond UTC values. The valid number ranges for the time units are as follows:

- `Seconds` (Required): _0_ to _59_
- `Milliseconds` (optional): _0_ to _999_

## Example

This example sets the second value of the `eventSeconds` object to `35`.

```js
const eventSeconds = new Date('2023-06-25T00:00:00');
eventSeconds.setUTCSeconds(35);
console.log(eventSeconds);
```

This example will output the following:

```shell
2023-06-25T00:00:35.000Z
```

## Codebyte Example

This code example sets the second and millisecond values of `eventSeconds` to `35` and `465` respectively. The values are then logged to the console.

```codebyte/javascript
const eventSeconds = new Date("2023-06-25T00:00:00");
eventSeconds.setUTCSeconds(35, 465);

console.log(`Seconds: ${eventSeconds.getUTCSeconds()}`);
console.log(`Milliseconds: ${eventSeconds.getUTCMilliseconds()}`);
```
