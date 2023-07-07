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

The `date_diff()` function takes two `DateTime` objects as parameters and determines the difference in time between them.
An optional boolean parameter can be set to `true` to return the absolute value, ensuring that the result is positive. 
The function returns a `DateInterval` object that can be formatted as needed.

## Syntax

```pseudo
date_diff(
    DateTimeInterface $dateOne, 
    DateTimeInterface $dateTwo 
    bool $absolute=false
): DateInterval
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
  $dateOfBirth = date_create("3/27/2001 4:30pm");
  $dateNow = date_create("7/7/2023 2:27pm");
  $diffSinceBirth = date_diff($dateOfBirth, $dateNow);
  echo $diffSinceBirth->format("%y years, %m months, %d days, %h hours, and %i minutes since birth.\n");
  echo $diffSinceBirth->format("%a days since birth.");
?>
```
