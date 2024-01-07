---
Title: '.getUTCMonth()'
Description: 'This method returns the month of the specified date according to the UTC time zone (0 for January through 11 for December).'
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

Example above assigns the month portion of the current `Date` to the variable `month`.

## Example

```codebyte/js

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


## Example with a specific date and formatting
This function help you to get the month for the specific date provided.

```codebyte/js

const specificDate = new Date('2023-06-15T18:45:00Z');
const specificMonth = specificDate.getUTCMonth();

console.log(`Month for June 15, 2023: ${specificMonth}`); 

```
 Output:
 
```shell
Month for June 15, 2023: 5
``` 


## Example with an array of dates
This example shows how to apply getUTCMonth() function inside loop.
You can get months on iterating the array of date data.

```codebyte/js

const datesArray = [
  new Date('2022-01-15T12:30:00Z'),
  new Date('2022-04-20T03:45:00Z'),
  new Date('2022-08-05T21:10:00Z')
];

for (const date of datesArray) {
  console.log(`Month: ${date.getUTCMonth()}`);
}
```

Output:

```shell
Month: 0
Month: 3
Month: 7
```

## Example using getUTCMonth() in a function
This example helps to understand how to get month number and month name from a date provided.
Try running the code and analyse the output.

```codebyte/js

function displayMonthInfo(date) {
  const month = date.getUTCMonth();
  const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
  console.log(`Month: ${month} (${monthName})`);
}

const sampleDate = new Date('2022-11-10T08:00:00Z');
displayMonthInfo(sampleDate);

```
Output:

```shell
Month: 10 (November)
```