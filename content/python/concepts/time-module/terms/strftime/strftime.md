---
Title: '.strftime()'
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

The `strftime()` function returns a time string based on one or more formatting codes and a time represented as a tuple or `stuct_time` format.

## Syntax

```pseudo
strftime(format_codes, time_value)
```

A combination of `format_codes` are used to format the returned string. The `time_value` is the time that will be formatted and can be represented as a [tuple](https://www.codecademy.com/resources/docs/python/tuples) or `struct_time` value. If no `time_value` is provided the function will return the current local time as formatted by the given expression.

A few common codes are:

| Code | Description                                          | Example/Range         |
| :--: | ---------------------------------------------------- | --------------------- |
| `%a` | The abbreviated day of the week.                     | Mon, Tues, etc.       |
| `%A` | The day of the week (full name).                     | Monday, Tuesday, etc. |
| `%d` | The day of of the month in two decimals.             | 01 - 31               |
| `%Y` | The calendar year represented as four decimals.      | 2020                  |
| `%H` | The hour of a 24-hour clock in two decimals.         | 00 - 23               |
| `%I` | The hour of a 12-hour clock in two decimals.         | 00 - 12               |
| `%j` | The day of the year represented as three decimals.   | 000 - 366             |
| `%p` | The locale’s equivalent for before and after midday. | AM/PM                 |
| `%x` | The locale’s equivalent of a date.                   | 01/01/01              |

## Example

The `strftime()` function can be used to translate a time to display the associated date:

```py
import time

print(time.strftime('%x',time.localtime()))
```

## Codebyte Example

The `strftime()` function can be used to return the current local time with the day and time formatted for a 12-hour clock.

```codebyte/python
import time

print(time.strftime('%A %-I %p',))
```
