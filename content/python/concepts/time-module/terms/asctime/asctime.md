---
Title: 'asctime()'
Description: 'Converts a time tuple or struct_time to a 24‑character human‑readable string.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Time'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`time.asctime()`** Python function converts a time value (a 9‑element tuple or `time.struct_time`) into a readable, 24‑character string like `'Wed Sep 17 19:40:37 2025'`.

## Syntax of `time.asctime()`

```py
import time

time.asctime(t)
time.asctime()  # it uses current local time
```

**Parameters:**

- `t` (optional): A 9‑tuple or `time.struct_time` representing a UTC or local time, with fields `(year, month, mday, hour, min, sec, wday, yday, isdst)` as produced by `time.localtime()` or `time.gmtime()`.

**Return value:**

- `str`: A 24‑character string of the form `'Sun Jun 20 23:21:05 1993'`. The day of month is two characters wide and space‑padded if needed (e.g., `'Wed Sep 17 19:40:37 2025'`).

Notes:

- If `t` is omitted, `time.asctime()` uses `time.localtime()`.
- `wday` (weekday) and `yday` (day of year) are ignored; `isdst` may be `-1`, `0`, or `1`.

## Example

Convert the current local time (from `localtime()`) and show the default call with no arguments:

```py
import time

# Using localtime() with asctime()
t = time.localtime()
lc = time.asctime(t)
print("Current local time represented in string:", lc)

# Default call (formats current local time)
print(time.asctime())
```

Example output:

```shell
Current local time represented in string: Wed Sep 17 19:40:37 2025
Wed Sep 17 19:40:37 2025
```

## Codebyte

Run this to see `time.asctime()` in action with local time, a UTC `struct_time`, and a custom tuple:

```codebyte/python
import time

# No argument → formats the current local time
print("Current local time:", time.asctime())

# Using an explicit 9-tuple
# Format: (year, month, day, hour, minute, second, weekday, yearday, isdst)
custom_time = (2025, 9, 17, 10, 30, 0, 0, 0, -1)
print("Custom tuple:       ", time.asctime(custom_time))
```
