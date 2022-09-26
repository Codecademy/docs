---
Title: '.ctime()'
Description: 'Takes a time, expressed in seconds elapsed since the epoch, and returns a formatted string.'
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

The `ctime()` function takes a time, expressed in seconds since the epoch, and returns a formatted string.

## Syntax

```pseudo
ctime(s)
```

The argument `s` is the number of seconds since the epoch. The epoch is defined as January 1, 1970, 00:00:00 UTC. If no argument is provided the function will use the current local time.

## Example

The `ctime()` function can be used to translate a time in seconds (from the epoch) into a human-readable format:

```py
import time

print(time.ctime(10000))
# Output: Thu Jan 1 02:46:40 1970
```

## Codebyte Example

The `ctime()` function can be used to return the current local time.

```codebyte/python
import time

print(time.ctime())
```
