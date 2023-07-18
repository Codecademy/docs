---
Title: '.setUTCMonth()'
Description: 'Sets the month value of a date object according to Coordinated Universal Time (UTC).'
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

The **setUTCMonth()** method sets the month of a date object according to universal time (UTC). The month is specified as an integer from 0 to 11, where 0 represents January and 11 represents December.

## Syntax

```pseudo
dateObject.setUTCMonth(month)
dateObject.setUTCMonth(month, day)
```
The `setUTCMonth()` method is called on the `dateObject` object with the integer input argument `month` and optionally `day` in addition.

- `month` (required): Expected values are in the range between 0-11, but other values are accepted:
    - -1 will set `dateObject` to the last month of the previous year
    - 12 will set `dateObject` to the first month of the following year

- `day` (optional): Expected values are in the range between 1-31, but other values are accepted:
    - Any value smaller than 1 will roll over to the previous month (0 will set `dateObject` to the last day of the previous month)
    - Any value greater than the number of days in a month will roll over to the following month

## Examples

This example sets the month and day. It prints differently formatted dates uses methods to get the month and day individually.
```javascript
const dateObject = new Date('2020-05-10T00:00:00');
dateObject.setUTCMonth(2, 20); // Month, Day (optional)

console.log(dateObject);
console.log(dateObject.toUTCString());
console.log("Month: " + dateObject.getUTCMonth(), "\nDay: " + dateObject.getUTCDay());
```
The code above results in the following output:
```shell
2020-03-20T00:00:00.000Z
Fri, 20 Mar 2020 00:00:00 GMT
Month: 2 
Day: 5
```
> Note: The first month of the year is 0, the first day of the month is 1.

This example showcases the rollover of dates with values outside of the expected range:
```javascript
const dateObject = new Date(Date.UTC(2000, 1, 2, 3, 4, 5)); // Year, Month, Day, Hour, Minute, Second, Millisecond

dateObject.setUTCMonth(0, 1); // 1st month of year, 1st day of month
console.log(dateObject);

dateObject.setUTCMonth(-1); // month out of range, rolls over to previous year
console.log(dateObject);

dateObject.setUTCMonth(12, 32); // month and day out of range, rolls over to following year and month
console.log(dateObject);
```
The code above results in the following output:
```shell
2000-01-01T03:04:05.006Z
1999-12-01T03:04:05.006Z
2000-02-01T03:04:05.006Z
```