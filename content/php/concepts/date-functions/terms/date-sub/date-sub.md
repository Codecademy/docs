---
Title: 'date_sub()'
Description: 'Subtracts a specified interval from a given date.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Date'
  - 'Time'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`date_sub()`** function subtracts a number of days, months, years, hours, minutes and seconds from a given date.

## Syntax

```pseudo
date_sub($object, $interval)
```

The `date_sub()` function has two required parameters:

- `$object`: This parameter specifies the `DateTime` object returned by `date_create()`.
- `$interval`: This parameter specifies the `DateInterval` object to be subtracted.

The `date_sub()` function returns a `DateTime` object after subtracting the interval.

## Example

The following example uses the `date_sub()` function to subtract 30 days from the passed date:

```php
<?php
    $date = date_create("2023-03-03");
    date_sub($date, date_interval_create_from_date_string("30 days"));
    echo date_format($date, "Y-m-d");
?>
```

The example will result in the following output:

```shell
2023-02-01
```

## Codebyte Example

This example is runnable and uses the `date_sub()` function:

```codebyte/php
<?php
   $date = date_create("22-02-2022");
   $res = date_sub($date, new DateInterval('PT10H30S'));
   echo date_format( $res, "d-m-Y H:i:s");
?>
```
