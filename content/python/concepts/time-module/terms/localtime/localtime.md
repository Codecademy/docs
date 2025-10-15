---
Title: '.localtime()'
Description: 'Converts a time expressed in seconds since the epoch to the local time.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Python'
  - 'Time'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`.localtime()`** method converts a time value, given in seconds since the epoch (January 1, 1970, 00:00:00 UTC), into local time. If no value is provided, it returns the current local time instead.

## Syntax

```pseudo
time.localtime(seconds)
```

**Parameters:**

- `seconds` (Optional): A number (`float` or `int`) representing seconds since the epoch. Defaults to the current time if omitted.

**Return value:**

Returns a `time.struct_time` object representing the local time.

## Example 1: `.localtime()` With No Argument

This example demonstrates when running `.localtime()` without the optional `seconds` argument:

```py
import time

lt = time.localtime()
print('Current Local Time:', lt)
```

The output of the code is:

```shell
Current local time: time.struct_time(tm_year=2025, tm_mon=8, tm_mday=31, tm_hour=19, tm_min=53, tm_sec=36, tm_wday=6, tm_yday=243, tm_isdst=0)
```

## Example 2: `.localtime()` With a Passed Argument

This example converts 5000 seconds since the epoch into local time:

```py
import time

# Passing the seconds elapsed as an argument to this method
lt = time.localtime(5000)
print('Python Local Time:', lt)
```

The output of the code is:

```shell
Python local time: time.struct_time(tm_year=1970, tm_mon=1, tm_mday=1, tm_hour=1, tm_min=23, tm_sec=20, tm_wday=3, tm_yday=1, tm_isdst=0)
```

## Codebyte Example: Using `.localtime()` to Log a File Download Time

This codebyte example demonstrates how to record the local time when a file download is completed:

```codebyte/python
import time

# Simulate logging the time of a file download
download_time = time.localtime()
print("File downloaded at:", time.strftime("%Y-%m-%d %H:%M:%S", download_time))
```

> **Note:** The output of `.localtime()` may differ depending on the system clock, time zone settings, and daylight saving adjustments.
