---
Title: '.mktime()'
Description: 'Converts a local time tuple or struct_time to seconds since the epoch.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Time'
  - 'Epoch'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In the `time` module, the **`.mktime()`** function takes a `struct_time` object or a 9-element [tuple](https://www.codecademy.com/resources/docs/python/tuples) representing local time and returns a floating-point number of seconds since the [epoch](https://www.codecademy.com/resources/docs/general/machine-learning/epochs) (i.e., “Unix timestamp” in local time). It is effectively the inverse of `time.localtime()`.

## Syntax

```pseudo
time.mktime(t)
```

**Parameters:**

- `t`: A `time.struct_time` object or a full 9-element tuple (`(year, month, day, hour, minute, second, weekday, day_of_year, isdst)`) representing local time.

**Return value:**

A `float` representing seconds since the epoch in local time. Raises OverflowError or ValueError if the input cannot be represented.

## Example 1: Basic conversion from tuple to timestamp

This example converts a local time tuple directly into seconds since epoch:

```py
import time

time_tuple = (2025, 4, 11, 14, 30, 0, 4, 101, -1)  # year, month, day, hour, minute, second, weekday, yearday, isdst
timestamp = time.mktime(time_tuple)
print("Timestamp:", timestamp)
```

The output of this code can be:

```shell
Timestamp: 1744381800.0
```

> Note: The exact timestamp value depends on system's local timezone. The value shown represents the result in UTC. In other timezones, the output will differ by the timezone offset.

## Example 2: Convert current local time (via struct_time) to timestamp

This example gets the current local time in `struct_time` form and then uses `.mktime()` to convert it to an epoch seconds value:

```py
import time

local_struct = time.localtime()
timestamp = time.mktime(local_struct)
print("Current local seconds since epoch:", timestamp)
```

A possible output of this code is:

```shell
Current local seconds since epoch: 1762169287.0
```

## Codebyte Example

This interactive example shows conversion and round-trip (timestamp ↔ `struct_time`) behaviour:

```codebyte/python
import time

# Define a specific local time
tup = (2023, 12, 31, 23, 59, 59, 0, 365, 0)
ts = time.mktime(tup)
print("Timestamp from tuple:", ts)

# Convert timestamp back to struct_time (local time)
struct_back = time.localtime(ts)
print("Converted back to local time:", struct_back)

# Show that mktime(localtime(ts)) returns ~ts
print("Round-trip check:", time.mktime(struct_back))
```
