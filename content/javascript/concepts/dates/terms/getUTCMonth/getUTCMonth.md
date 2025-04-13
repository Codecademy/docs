---
Title: '.getUTCMonth()'
Description: 'Returns the month of the specified date according to the UTC zone (0 for January through 11 for December).'
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

Get methods are used to retrieve date components based on the user’s local timezone settings. The **`.getUTCMonth()`** method returns the month of the date passed, similar to `.getMonth()`. However, `.getUTCMonth()` calculates the time based on the UTC (Coordinated Universal Time) standard.

## Syntax

```pseudo
const today = new Date();
const month = today.getUTCMonth();
```

The above example assigns the month portion of the current date `Date` to the variable `month`.

## Examples

The following example demonstrates how time zones affect date calculations. It creates two `Date` objects with the same local time but different time zones. Using `.getUTCMonth()`, it logs the UTC month for each date:

```js
const date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
const date2 = new Date('December 31, 1975, 23:15:30 GMT-11:00');

console.log(date1.getUTCMonth());

console.log(date2.getUTCMonth());
```

This results in the following output:

```shell
11
0
```

### Using a Specific Date and Formatting

This function also helps get the month for a specific date:

```js
const specificDate = new Date('2023-06-15T18:45:00Z');
const specificMonth = specificDate.getUTCMonth();

console.log(`Month for June 15, 2023: ${specificMonth}`);
```

The above code gives the following output:

```shell
Month for June 15, 2023: 5
```

### Using an Array of Dates

This example shows how to apply the `.getUTCMonth()` function inside a loop:

```js
const datesArray = [
  new Date('2022-01-15T12:30:00Z'),
  new Date('2022-04-20T03:45:00Z'),
  new Date('2022-08-05T21:10:00Z'),
];

for (const date of datesArray) {
  console.log(`Month: ${date.getUTCMonth()}`);
}
```

The above code gives the following output:

```shell
Month: 0
Month: 3
Month: 7
```

### Using the Function in Another Function

The following example helps understand how to get the month number and month name from a specified date:

```js
function displayMonthInfo(date) {
  const month = date.getUTCMonth();
  const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
    date
  );
  console.log(`Month: ${month} (${monthName})`);
}

const sampleDate = new Date('2022-11-10T08:00:00Z');
displayMonthInfo(sampleDate);
```

The above code gives the following output:

```shell
Month: 10 (November)
```
