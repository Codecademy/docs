---
Title: '.setTime()'
Description: 'Sets the time value of a Date object using milliseconds since January 1, 1970 UTC'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Date'
  - 'JavaScript'
  - 'Methods'
  - 'Time'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.setTime()`** method is a built-in JavaScript method that sets the time value of a `Date` object using milliseconds since the Unix epoch (January 1, 1970, 00:00:00 UTC). This method allows developers to programmatically modify the date and time represented by a `Date` object by specifying the exact number of milliseconds from the reference point.

## Syntax of JavaScript `.setTime()`

```pseudo
date.setTime(milliseconds)
```

**Parameters:**

- `milliseconds`: A number representing the time value in milliseconds since January 1, 1970, 00:00:00 UTC. This can be a positive or negative integer.

**Return value:**

The `.setTime()` method returns the new timestamp value (in milliseconds) after setting the time. The method modifies the original `Date` object in place and returns the same millisecond value that was passed as the parameter.

## Example 1: Basic Usage of `.setTime()` method

This example demonstrates the fundamental usage of `.setTime()` by setting a `Date` object to a specific timestamp:

```js
// Create a new Date object
const myDate = new Date();

// Set the time to January 1, 2023, 12:00:00 UTC (1672574400000 milliseconds)
const timestamp = myDate.setTime(1672574400000);

// Display the results
console.log('Updated date:', myDate);
console.log('Returned timestamp:', timestamp);
```

This example results in the following output:

```shell
Updated date: 2023-01-01T12:00:00.000Z
Returned timestamp: 1672574400000
```

The Date object `myDate` is updated to represent January 1, 2023, at 12:00:00 UTC, and the method returns the timestamp value that was set.

## Example 2: Time Calculations `.setTime()`

This example shows how `.setTime()` can be used for time arithmetic and creating dates based on timestamp calculations:

```js
// Get current time in milliseconds
const currentTime = Date.now();

// Create base date object
const baseDate = new Date();
baseDate.setTime(currentTime);

// Add 24 hours (86400000 milliseconds) to create tomorrow's date
const tomorrowTime = currentTime + 86400000;
const tomorrowDate = new Date();
tomorrowDate.setTime(tomorrowTime);

// Add 7 days (604800000 milliseconds) for next week
const nextWeekTime = currentTime + 604800000;
const nextWeekDate = new Date();
nextWeekDate.setTime(nextWeekTime);

console.log('Current time:', baseDate.toISOString());
console.log('Tomorrow time:', tomorrowDate.toISOString());
console.log('Next week time:', nextWeekDate.toISOString());
console.log(
  'Time difference (hours):',
  (tomorrowTime - currentTime) / (1000 * 60 * 60)
);
```

This example results in the following output:

```shell
Current time: 2025-07-26T11:09:18.928Z
Tomorrow time: 2025-07-27T11:09:18.928Z
Next week time: 2025-08-02T11:09:18.928Z
Time difference (hours): 24
```

> **Note:** Since this example uses Date.now() to get the current time, the output will vary depending on when the code is executed. The dates shown above are examples based on a specific runtime.

This demonstrates how `.setTime()` enables precise time calculations by working with millisecond timestamps to create dates at specific intervals.

## Codebyte Example: Database Timestamp Processing With the Help of `.setTime()`

This example illustrates a real-world scenario where `.setTime()` is used to process timestamps from a database and convert them to JavaScript Date objects:

```codebyte/javascript
// Simulated database records with Unix timestamps
const databaseRecords = [
  { id: 1, event: 'User Registration', timestamp: 1672574400000 },
  { id: 2, event: 'Purchase Made', timestamp: 1672660800000 },
  { id: 3, event: 'Account Updated', timestamp: 1672747200000 }
];

// Process records and convert timestamps to Date objects
const processedRecords = databaseRecords.map(record => {
  const eventDate = new Date();
  eventDate.setTime(record.timestamp);

  return {
    id: record.id,
    event: record.event,
    date: eventDate.toLocaleDateString(),
    time: eventDate.toLocaleTimeString(),
    fullDate: eventDate
  };
});

// Display processed records
processedRecords.forEach(record => {
  console.log(`Event ${record.id}: ${record.event} on ${record.date} at ${record.time}`);
});
```

This pattern is commonly used in web applications when processing timestamp data from databases, APIs, or log files, where the `.setTime()` method provides a reliable way to create Date objects from millisecond values.

## Frequently Asked Questions

### 1. What happens if I pass a negative number to `.setTime()`?

The method accepts negative numbers, which represent dates before January 1, 1970. For example, `-86400000` represents December 31, 1969.

### 2. Does `.setTime()` modify the original Date object?

Yes, `.setTime()` modifies the `Date` object in place. If you need to preserve the original date, create a copy first using `new Date(originalDate)`.

### 3. What's the difference between `.setTime()` and setting individual date components?

`.setTime()` sets the entire date and time in one operation using milliseconds, while methods like `.setFullYear()` or `.setMonth()` modify specific components. `.setTime()` is more efficient for setting complete timestamps.
