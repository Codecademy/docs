---
Title: 'date_add()'
Description: 'Adds a given number of days, months, years, hours, minutes or seconds to an existing date.'
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

The **`date_add()`** function takes an existing `DateTime` object and adds a specified number of days, months, years, hours, minutes or seconds.

## Syntax

```pseudo
date_add(date_object, time_frame_to_add)
```

The `date_object` parameter is an existing `DateTime` object.

The `time_frame_to_add` parameter is a `DateInterval` object.

## Example

The following example uses [`date_create()`]("https://www.codecademy.com/resources/docs/php/date-functions/date-create") to create a new `DateTime` object.

The `DateTime` object is then used as the first parameter of `date_add()`. The second parameter is a `DateInterval` object, created by the built-in function `date_interval_create_from_date_string()`. This function accepts a string containing a numeric value followed by a unit of time.

> **Note**: The unit of time can be written in singular or plural form.

The output is then printed to the console, using [`date_format()`]("https://www.codecademy.com/resources/docs/php/date-functions/date-format") to format the string.

```php
<?php
  $my_date = date_create("2023-07-10 14:16:33");
  date_add($my_date, date_interval_create_from_date_string("3 days"));
  echo date_format($my_date,"Y-m-d G:i:s");
?>
```

The code results in the following:

```shell
2023-07-13 14:16:33
```
