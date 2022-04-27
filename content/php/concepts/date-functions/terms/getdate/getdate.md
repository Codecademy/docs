---
Title: 'getdate()'
Description: 'Returns an array representing the current date or a Unix timestamp.'
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

The `getdate()` function returns an array representing information about the current date or a Unix timestamp.

## Syntax

```pseudo
$t = getdate($timestamp);
```

The `$timestamp` parameter is optional. It is an int representing a Unix timestamp, i.e. the number of seconds from the Unix Epoch, midnight GMT on January 1st, 1970. If omitted, `getdate()` returns information on the current date and time.

The `getdate()` function returns an associative array, `$t`, providing information on the current date or `$timestamp` with the following members:

- `$t["seconds"]` int representing seconds. (0-59)
- `$t["minutes"]` int representing minutes. (0-59)
- `$t["hours"]` int representing hours. (0 to 23)
- `$t["mday"]` int representing day of the month. (0 to 31)
- `$t["wday"]` int representing day of the week, starting on Sunday. (0 to 6)
- `$t["mon"]` int representing the month. (1 to 12)
- `$t["year"]` int representing the four digit year.
- `$t["yday"]` int representing the day of the year. (0 to 365)
- `$t["weekday"]` string with the full name of the weekday. ("Sunday" to "Saturday")
- `$t["month"]` string with full name of the month. ("January" to "December")
- `$t[0]` int representing the Unix timestamp.

## Codebyte Example

```codebyte/php
<?php
  $today = getdate();
  echo ($today['weekday'] . "," . $today['month'] . " " . $today['mday'] . " " . $today['year']);
?>
```
