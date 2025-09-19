---
Title: '.gmtime()'
Description: 'Converts a time expressed in seconds since the epoch to a struct_time in UTC.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Constants'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/front-end-engineer-career-path'
---

The `gmtime()` function is used to convert a time value into a structured representation in Coordinated Universal Time (UTC).

## Syntax

```pseudo
gmtime([seconds])
```

The optional argument `seconds` is the number of seconds since the epoch (January 1, 1970, 00:00:00 UTC). If no argument is provided, the function will use the current time.

## Example

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

## Codebyte Example

```codebyte/python
import time

# Passing the seconds elapsed as an argument to this method
gt = time.gmtime(0)
print("The epoch of the system:", gt)
```
