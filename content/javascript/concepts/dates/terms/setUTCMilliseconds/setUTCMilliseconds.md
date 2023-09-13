---
Title: '.setUTCMilliseconds()'
Description: 'Sets the milliseconds value of a date object based on Coordinated Universal Time (UTC).'
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

The **`.setUTCMilliseconds()`** method sets the milliseconds value of a `Date` object according to Coordinated Universal Time(UTC) and returns the updated `Date` object.

## Syntax

```pseudo
myDate.setUTCMilliseconds(millisecondsValue);
```

The `.setUTCMilliseconds()` method takes a single parameter, representing the numeric value of the milliseconds.

> **Note**: It's important to note that the setUTCMilliseconds() method modifies the Date object in place. It returns the number of milliseconds since January 1, 1970, but it's typically not necessary to use the return value unless it's specifically needed for calculations.

## Example

The JavaScript `Date` object has the `setUTCMilliseconds()` method to set the milliseconds component of a date object in UTC. Here's an example that shows how to use the `setUTCMilliseconds()` method to set the milliseconds of a date:

```javascript
// Function to display date in a human-readable format including milliseconds
function formatDateTime(dateTime) {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'UTC',
  };
  const formattedDate = dateTime.toLocaleString('en-US', options);
  const milliseconds = dateTime.getUTCMilliseconds();
  return `${formattedDate}.${milliseconds.toString().padStart(3, '0')}`;
}

// Create a new Date object with specific data: July 24, 2023, 12:34:56.789 UTC
const date = new Date(Date.UTC(2023, 6, 24, 12, 34, 56, 789));

// Get the current milliseconds in UTC
const currentUTCMilliseconds = date.getUTCMilliseconds();

// Set a new value for milliseconds (e.g., 500 milliseconds)
const newUTCMilliseconds = 500;

// Create a new Date object with the same date but modified milliseconds
const newDateWithModifiedMilliseconds = new Date(date);
newDateWithModifiedMilliseconds.setUTCMilliseconds(newUTCMilliseconds);

console.log('Original Date:', formatDateTime(date));
console.log('Current UTC Milliseconds:', currentUTCMilliseconds);
console.log(
  'Modified Date with UTC Milliseconds:',
  formatDateTime(newDateWithModifiedMilliseconds)
);
```

This example results in the following output:

```
Original Date: 7/24/2023, 12:34:56.789
Current UTC Milliseconds: 789
Modified Date with UTC Milliseconds: 7/24/2023, 12:34:56.500
```

> **Note**: In this example `formatDateTime()` function manually appends the milliseconds component to the formatted date. We use `getUTCMilliseconds()` to retrieve the milliseconds value from the `Date` object and then pad it with leading zeros to ensure it is displayed with three digits.
