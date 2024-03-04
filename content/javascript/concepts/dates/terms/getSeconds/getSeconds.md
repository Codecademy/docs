---
Title: '.getSeconds()'
Description: 'Called from an instance of the Date class, will return the seconds according to the local time.'
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

Called from an instance of the `Date` class, will return the seconds according to the local time.

## Syntax

```js
myDate.getSeconds();
```

The return value of `getSeconds()` will only be an integer number between `0` and `59`, meaning seconds.

## Example

To determine if the match has ended or still ongoing:

```js
const today = new Date('June 25, 2021 13:41:50');

if (today.getSeconds() > 50) {
  console.log('The match has ended.');
} else {
  console.log('This match is still ongoing.');
}

// Output: This match is still ongoing.
```

## Codebyte Example

The example below defines a new `Date` object `dateTimeNow`, and then saves the result of the `getSeconds()` method in a new variable `seconds`. Finally, the current date\time, the current seconds, and the seconds remaining in the current minute are logged to the console.

```codebyte/javascript
let dateTimeNow = new Date();
let seconds = dateTimeNow.getSeconds();

console.log(`Date\\Time Now: ${dateTimeNow}\n`);
console.log(`Seconds past the current minute: ${seconds}`);
console.log(`Seconds remaining in the current minute: ${60 - seconds}`);
```
