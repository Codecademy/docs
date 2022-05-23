---
Title: 'date_create()'
Description: 'Creates a new DateTime object from a formatted date-time string.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Date'
  - 'Time'
  - 'Objects'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The `date_create()` function creates a new `DateTime` object based on a formatted date-time string passed to it, along with an optional timezone.

## Syntax

```pseudo
date_create($datetime, $timezone)
```

Where `$datetime` is a string with a formatted date-time value. And `$timezone` is an optional `DateTimeZone` object. If omitted, the current timezone will be used.

Valid date-time formats for `$datetime` include the following:

### Time Formats

| Description                         | Examples                     |
| ----------------------------------- | ---------------------------- |
| 12 Hour AM/PM                       | "1 am", "12P.M."             |
| 12 Hour, Minutes, AM/PM             | "1:27 am", "12:35P.M."       |
| 12 Hour, Minutes, Seconds, AM/PM    | "1:27:16 am", "12:35:08P.M." |
| 24 Hour, Minutes                    | "01:27", "12.35", "T19:43"   |
| 24 Hour, Minutes w/o colon          | "0127", "t1235", "T1943"     |
| 24 Hour, Minutes, Seconds           | "01.27.15", "T19:43:12"      |
| 24 Hour, Minutes, Seconds w/o colon | "012715", "T194512"          |

### Date Formats

| Description                   | Examples                   |
| ----------------------------- | -------------------------- |
| Month, Day                    | "6/13", "12/31"            |
| Month, Day, Year              | "7/4/76", "01/01/2001"     |
| Four Digit Year, Month, Day   | "1976/7/4", "2001/01/01"   |
| Four Digit Year, Month, Day   | "1976-7-4", "2001-01-01"   |
| Four Digit Year, Month        | "1976-7","2001-01"         |
| Day, Month, Four Digit Year   | "31-12-2011", "04.07.1976" |
| Day, Text Month, Year         | "4 Jul 1976","31DEC11"     |
| Text Month, Four Digit Year   | "July 1976", "DEC 2011"    |
| Four Digit Year, Text Month   | "1976 July", "2011 DEC"    |
| Text Month, Day               | "July 4", "DEC 31"         |
| Day, Text Month               | "4 July", "31 DEC"         |
| Month Abbreviation, Day, Year | "Jul-4-76", "Dec-31-2011"  |
| Year, Month Abbreviation, Day | "76-Jul-04", "2001-DEC-31" |

### Compound Formats

| Description | Example                  |
| ----------- | ------------------------ |
| EXIF        | "2011:12:31 15:25:27"    |
| MySQL       | "2011-12-31 15:25:27"    |
| SOAP        | "2011-12-31T15:25:27.05" |
| XMLRPC      | "20111231T15:25:27"      |
| WDDX        | "2011-12-31T15:25:27"    |

## Codebyte Example

The example below creates `DateTime` objects using two different string formats.

```codebyte/php
<?php
  $date1 = date_create("7/4/76");
  $date2 = date_create("2011-12-31 15:25:27");

  var_dump(date_format($date1, 'Y-M-d'));
  echo "\n";
  var_dump(date_format($date2, 'Y-M-d'));
?>
```
