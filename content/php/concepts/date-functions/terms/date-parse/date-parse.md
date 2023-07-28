---
Title: 'date_parse()'
Description: 'Accepts a date as a parameter, parses it, and returns information about the given date in the form of an array.'
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

The `date_parse()` is an built-in function in PHP which is used to find the detailed information about a specified date.

## Syntax

```pseudo
date_parse($date);
```

The `$date` parameter is mandatory. The `date_parse()` function returns an associative array of detailed information for a specified date on success, and returns `false` on failure.

## Example

The example below gets an array from the `date_parse()` function, and prints out various elements from it:

```php
<?php
  print_r(date_parse("2023-06-27 11:27:40"));
?>
```

The output will be as follows:

```shell
Array
(
    [year] => 2023
    [month] => 6
    [day] => 27
    [hour] => 11
    [minute] => 27
    [second] => 40
    [fraction] => 0
    [warning_count] => 0
    [warnings] => Array
        (
        )
    [error_count] => 0
    [errors] => Array
        (
        )
    [is_localtime] =>
)
```
