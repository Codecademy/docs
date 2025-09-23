---
Title: '.gmtime()'
Description: 'Converts a time expressed in seconds since the epoch to a `struct_time` in UTC.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Constants'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`gmtime()`** function converts a time value (in seconds since the epoch, or the current time if not provided) into a `struct_time` representation in Coordinated Universal Time (UTC).

## Syntax

```pseudo
time.gmtime([seconds])
```

**Parameters:**

- `seconds` (optional, float or int): Number of seconds since the epoch (January 1, 1970, 00:00:00 UTC). If omitted, the current time is used.

**Return value:**

Returns a `time.struct_time` object in Coordinated Universal Time (UTC) with the attributes: `(tm_year, tm_mon, tm_mday, tm_hour, tm_min, tm_sec, tm_wday, tm_yday, tm_isdst)`

## Example

In this example, the current UTC time is retrieved using `gmtime()`, and then a specific date (January 1, 2020) is converted into its UTC `struct_time` representation:

```py
import time

# Get the current time in UTC
current_time = time.gmtime()
print("Current UTC time:", current_time)

# Convert a specific time (e.g., 1st January 2020) to UTC
specific_time = time.mktime((2020, 1, 1, 0, 0, 0, 0, 0, 0))
utc_time = time.gmtime(specific_time)
print("Specific UTC time:", utc_time)
```

The possible output of this code is:

```shell
Current UTC time: time.struct_time(tm_year=2025, tm_mon=9, tm_mday=23, tm_hour=11, tm_min=12, tm_sec=32, tm_wday=1, tm_yday=266, tm_isdst=0)
Specific UTC time: time.struct_time(tm_year=2020, tm_mon=1, tm_mday=1, tm_hour=0, tm_min=0, tm_sec=0, tm_wday=2, tm_yday=1, tm_isdst=0)
```

> **Note:** The exact output for the current time will vary depending on when the code is executed.

## Codebyte Example

In this example, 0 seconds since the epoch is passed to `gmtime()`, which returns the epoch start time in UTC:

```codebyte/python
import time

# Passing the seconds elapsed as an argument to this method
gt = time.gmtime(0)
print("The epoch of the system:", gt)
```
