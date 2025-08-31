---
Title: '.localtime()'
Description: 'Converts a time, expressed in seconds since the epoch, and coverts it to the local time.' 
Subjects:
  - 'Code Foundations'
Tags:
  - 'Time'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The `.localtime()` methord converts a time, represented in seconds, to local time. If no time is passed, the current local time will be returned instead.

## Syntax

```pseudo
time.localtime(seconds)
```

**Parameters:**

- `seconds`: (Optional) A floating-point number representing the number of seconds elapsed.

**Return value:**

Returns the time elapsed since the epoch in a system as an object. 

## Example 1: `.localtime()` With No Argument 
This example demonstrates when running `.localtime()` without the optional seconds argument 

```py
import time

lt = time.localtime()
print('Current Local Time:', lt)
```

The output of the code is:

```
Current local time: time.struct_time(tm_year=2025, tm_mon=8, tm_mday=31, tm_hour=19, tm_min=53, tm_sec=36, tm_wday=6, tm_yday=243, tm_isdst=0)
```

## Example 2: `.localtime()` With a Passed Argument 
In the example below, we are trying to find the date after 5000 seconds from the epoch.

```
import time

# Passing the seconds elapsed as an argument to this method
lt = time.localtime(5000)
Print('Python Local Time:', lt)
```

The output of the code is:

```
Python local time: time.struct_time(tm_year=1970, tm_mon=1, tm_mday=1, tm_hour=1, tm_min=23, tm_sec=20, tm_wday=3, tm_yday=1, tm_isdst=0)
```

[Text, code, images, etc. about example 1]

## Codebyte Example (if applicable)

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
```
