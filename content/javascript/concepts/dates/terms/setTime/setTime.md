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

The **`.setTime()`** method is a built-in JavaScript Date method that sets the time value of a `date` object using milliseconds since the Unix epoch (January 1, 1970, 00:00:00 UTC). This method allows developers to programmatically modify the date and time represented by a Date object by specifying the exact number of milliseconds from the reference point.

The `.setTime()` method is particularly useful when working with timestamps, converting between different time representations, or when there is a need to set a specific date and time based on millisecond values. It's commonly used in applications that handle time calculations, data processing, event scheduling, and any scenario where precise time manipulation is required.

## Syntax

```pseudo
date.setTime(milliseconds)
```

**Parameters:**

- `milliseconds`: A number representing the time value in milliseconds since January 1, 1970, 00:00:00 UTC. This can be a positive or negative integer.

**Return value:**

The `.setTime()` method returns the new timestamp value (in milliseconds) after setting the time. The method modifies the original Date object in place and returns the same millisecond value that was passed as the parameter.

## Example 1: Basic Usage of `.setTime()`

This example demonstrates the fundamental usage of `.setTime()` by setting a Date object to a specific timestamp:

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

## Example 2: Converting Between Time Formats

This example shows how `.setTime()` can be used to convert between different time representations and create standardized Date objects:

```js
// Create multiple Date objects for different time zones
const utcDate = new Date();
const localDate = new Date();

// Get current time in milliseconds
const currentTime = Date.now();

// Set both dates to the same timestamp
utcDate.setTime(currentTime);
localDate.setTime(currentTime);

// Add 24 hours (86400000 milliseconds) to create tomorrow's date
const tomorrowTime = currentTime + 86400000;
const tomorrowDate = new Date();
tomorrowDate.setTime(tomorrowTime);

console.log('Current time:', utcDate.toISOString());
console.log('Tomorrow time:', tomorrowDate.toISOString());
console.log(
  'Time difference (hours):',
  (tomorrowTime - currentTime) / (1000 * 60 * 60)
);
```

This example results in the following output:

```shell
Current time: 2025-07-07T12:01:46.940Z
Tomorrow time: 2025-07-08T12:01:46.940Z
Time difference (hours): 24
```

This demonstrates how `.setTime()` enables precise time calculations and conversions between different time representations.

## Codebyte Example: Database Timestamp Processing

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

Yes, `.setTime()` modifies the Date object in place. If you need to preserve the original date, create a copy first using `new Date(originalDate)`.

### 3. What's the difference between `.setTime()` and setting individual date components?

`.setTime()` sets the entire date and time in one operation using milliseconds, while methods like `.setFullYear()` or `.setMonth()` modify specific components. `.setTime()` is more efficient for setting complete timestamps.
