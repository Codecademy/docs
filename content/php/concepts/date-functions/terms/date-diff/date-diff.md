---
Title: 'date_diff()'
Description: 'Takes two DateTime objects, calculates the difference, and returns a DateInterval object.'
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

The `date_diff()` function takes two `DateTime` objects and determines the difference in time between the two. It returns
a `DateInterval` object that can be formatted as needed.

## Syntax

```pseudo
$timeInterval = date_diff($dateOne, $dateTwo);
$diffInHours = $timeInterval->format("%H hours difference");
```

The `$dateOne` and `$dateTwo` parameters are `DateTime` objects as returned by 
[date_create()](https://www.codecademy.com/resources/docs/php/date-functions/date-create). Because the returned value 
is a `DateInterval` object, [date_format()](https://www.codecademy.com/resources/docs/php/date-functions/date-format) 
cannot be used to format the result. The `DateInterval::format()` function can be used for formatting using the characters
below. The formatting characters must be prefixed with a percent sign (%). 

| Character | Description                                                                    |
| :-------: |--------------------------------------------------------------------------------|
|    `Y`    | Number of years, at least two digits with leading zero                         |
|    `y`    | Number of years                                                                |
|    `M`    | Number of months, at least two digits with leading zero                        |
|    `m`    | Number of months                                                               |
|    `D`    | Number of days, at least two digits with leading zero                          |
|    `d`    | Number of days                                                                 |
|    `a`    | Total number of days                                                           |
|    `H`    | Number of hours, at least two digits with leading zero                         |
|    `h`    | Number of hours                                                                |
|    `I`    | Number of minutes, at least two digits with leading zero                       |
|    `i`    | Number of minutes                                                              |
|    `S`    | Number of seconds, at least two digits with leading zero                       |
|    `s`    | Number of seconds                                                              |
|    `F`    | Number of microseconds, at least six digits with leading zero, always positive |
|    `f`    | Number of microseconds, always positive                                        |
|    `R`    | Sign (+, -)                                                                    |
|    `r`    | Sign, empty when positive                                        |

## Codebyte Example

The example below creates two `DateTime` objects, then prints the difference with format strings.

```codebyte/php
<?php
  $dateOfBirth = date_create("1/1/1997 1:30pm");
  $dateNow = date_create("7/3/2023 2:27pm");
  $diffSinceBirth = date_diff($dateOfBirth, $dateNow);
  echo $diffSinceBirth->format("%y years, %m months and %d days \n");
  echo $diffSinceBirth->format("%a days");
?>
```
