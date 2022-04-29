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

|     Member      | Data Type | Description                          | Range                   |
| :-------------: | :-------: | ------------------------------------ | ----------------------- |
| `$t["seconds"]` |    int    | Number of the second.                | 0-59                    |
| `$t["minutes"]` |    int    | Number of the minute.                | 0-59                    |
|  `$t["hours"]`  |    int    | Number of the hour.                  | 0-23                    |
|  `$t["mday"]`   |    int    | Day of the month.                    | 0-31                    |
|  `$t["wday"]`   |    int    | Day of the week, starting on Sunday. | 0-6                     |
|   `$t["mon"]`   |    int    | Number of the month.                 | 1-12                    |
|  `$t["year"]`   |    int    | Four digit year.                     |
|  `$t["yday"]`   |    int    | Day of the year.                     | 0-365                   |
| `$t["weekday"]` |  string   | Full name of the weekday.            | "Sunday" to "Saturday"  |
|  `$t["month"]`  |  string   | Full name of the month.              | "January" to "December" |
|     `$t[0]`     |    int    | The Unix timestamp.                  |

## Codebyte Example

The example below gets an array from the `getdate()` function, and prints out various elements from it.

```codebyte/php
<?php
  $today = getdate();
  echo ($today['weekday'] . "," . $today['month'] . " " . $today['mday'] . " " . $today['year']);
?>
```
