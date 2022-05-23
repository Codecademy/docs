---
Title: 'date()'
Description: 'Creates a formatted date-time string from a local date-time.'
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

The `date()` function creates a formatted date-time string from a local date-time.

## Syntax

```pseudo
$datestring = date($format, $timestamp);
```

The `$format` string is a string specifying how the date/time is to be formatted. It uses the same syntax as the [`date_format()`](https://www.codecademy.com/resources/docs/php/date-functions/date-format) function.

The `$timestamp` parameter is a Unix timestamp, the date-time expressed as seconds elapsed from the Unix Epoch (Midnight GMT, January 1st, 1970). It is optional, and if omitted or `NULL` it defaults to the current local date and time.

## Codebyte Example

The example below prints the current date and time using the `date()` function.

```codebyte/php
<?php
  echo(date("G:i l, F jS, Y"));
?>
```
