---
Title: 'date_format()'
Description: 'Takes a DateTime object and returns a string based on its formatted value.'
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

The `date_format()` function takes a `DateTime` object and a format string and returns a string based on the formatted value.

## Syntax

```pseudo
$datestring = date_format($object, $format);
```

The `$object` parameter is a `DateTime` object as returned by [`date_create()`](https://www.codecademy.com/resources/docs/php/date-functions/date-create). And the `$format` parameter is a format string that can use the following characters:

| Character | Description                                                                        |
| :-------: | ---------------------------------------------------------------------------------- |
|    `d`    | Two digit day of the month with leading zero                                       |
|    `D`    | Three character abbreviation of day of the week                                    |
|    `j`    | Day of the month without leading zeros                                             |
|    `l`    | Full name of day of the week                                                       |
|    `N`    | ISO 8601 number of day of the week (1 - 7 starting on Monday)                      |
|    `S`    | Numeric suffix for day of the month ("st", "nd", "rd", "th")                       |
|    `w`    | Number of day of the week (0 - 6 starting on Sunday)                               |
|    `z`    | Zero-based day of the year                                                         |
|    `W`    | ISO 8601 week of the year, weeks starting on Monday                                |
|    `F`    | Full name of month                                                                 |
|    `m`    | Two digit number of month with leading zeros                                       |
|    `M`    | Three character abbreviation of month name                                         |
|    `n`    | Number of month without leading zeros                                              |
|    `t`    | Number of days in the given month                                                  |
|    `L`    | 1 for a leap year, 0 otherwise                                                     |
|    `o`    | ISO 8601 week-numbering year. Four digit year containing the current ISO 8601 week |
|    `Y`    | Four digit year                                                                    |
|    `y`    | Two digit year                                                                     |
|    `a`    | AM/PM lower case                                                                   |
|    `A`    | AM/PM upper case                                                                   |
|    `g`    | Hour on 12 hour clock without leading zeros                                        |
|    `G`    | Hour on 24 hour clock without leading zeros                                        |
|    `h`    | Hour on 12 hour clock with leading zeros                                           |
|    `H`    | Hour on 24 hour clock with leading zeros                                           |
|    `i`    | Minutes with leading zeros                                                         |
|    `s`    | Seconds with leading zeros                                                         |
|    `e`    | Timezone identifier                                                                |
|    `I`    | 1 if date is in Daylight Savings Time, 0 otherwise                                 |
|    `O`    | Difference to GMT without colon                                                    |
|    `P`    | Difference to GMT with colon                                                       |
|    `c`    | Full ISO 8601 date                                                                 |
|    `r`    | RFC 2822 formatted date                                                            |
|    `U`    | Seconds since the Unix Epoch (Midnight GMT January 1, 1970)                        |

## Codebyte Example

The example below creates a `DateTime` object, then prints the date with a format string.

```codebyte/php
<?php
  $date = date_create("12/1/2020 1:30pm");
  echo(date_format($date, "G:i l, F jS, Y"));
?>
```
