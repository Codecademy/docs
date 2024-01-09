---
Title: '.getUTCDate()'
Description: 'Extracting the day of the month from a Date object in UTC format.'
Subjects:
  - 'Web Development'
  - 'JavaScript'
Tags:
  - 'Date'
  - 'UTC'
  - 'Methods'
CatalogContent:
  - 'learn-javascript'
  - 'paths/web-development'
---

The **`.getUTCDate()`** method retrieves the day of the month from a `Date` object, adjusted to Coordinated Universal Time (UTC).

## Syntax

The syntax for `.getUTCDate()` is straightforward:

```javascript
const dateInstance = new Date();
const dayOfMonth = dateInstance.getUTCDate();
```

This method returns a number between 1 and 31, which is the day of the month in UTC.

## Example

In the example below, consider a `Date` object representing a specific point in time:

```javascript
const eventDate = new Date('2024-01-08T14:00:00Z');
console.log(eventDate.getUTCDate()); 
```
This results in the following Output:

```
8
```

The `.getUTCDate()` method extracts the UTC day of the month from `eventDate`, which is `8`.

## Codebyte Example

Here's how `.getUTCDate()` can be used to find the current day of the month in UTC:

```codebyte/javascript
const currentDate = new Date();
console.log(`The current UTC date is: ${currentDate.getUTCDate()}`);
```

> **Note:** The above code logs the current day of the month based on UTC to the console.