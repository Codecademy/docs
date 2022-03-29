---
Title: 'time.strftime()'
Description: 'Returns a time as a string based on one or more formatting codes.'

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

Returns a time as a string based on one or more formatting codes.

## Syntax

```pseudo
strftime(formatting_exp, time_value)
```

The argument `formatting_exp` is the combination of formatting codes to be applied to the time input. The `time_value` is the time to be formatted. If no argument is provided the function will return the current local time as formatted by the given expression.

## Example

The `strftime()` function can be used to translate a time to display the associated date:

```py
import time

print(time.strftime('%x,time.ctime(1648501804)))
# Output: 03/28/22
```

## Codebyte Example

The `strftime()` function can be used to return the current local time as the day and time formatted using a 12 hour clock format.

```codebyte/python
import time

print(time.strftime('%A %-I %p',))
```
