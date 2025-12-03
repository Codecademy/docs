---
Title: '.strptime()'
Description: 'Parses a string representing a date/time into a struct_time object according to a specified format.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Date'
  - 'Methods'
  - 'Time'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**`.strptime()`** is a method from Python's [time](https://www.codecademy.com/resources/docs/python/time-module) module. It converts a date and/or time string into a corresponding `struct_time` object, based on the format directives provided.

> > **Note:** `strptime()` with the 'p' for 'parse' is for reading a string, not writing one.

## Syntax

```pseudo
time.strptime(string, format)
```

**Parameters:**

- `string` (str): The date and/or time string to be parsed and converted.
- `format` (str): The format string specifying the expected format of the first parameter `string`.

**Return value:**

Returns a `struct_time` object with the parsed date and time.

The `format` parameter uses specific directives to represent the expected format of `string`. These directives are the same ones as those used by [`strftime()`](https://www.codecademy.com/resources/docs/python/time-module/strftime), and some common examples include:

| Directive | Description                 | Example/Range   |
| --------- | --------------------------- | --------------- |
| `%Y`      | Four-digit year             | 2025, 2026, ... |
| `%y`      | Two-digit year (25 -> 2025) | 00 - 99         |
| `%m`      | Month number                | 01 - 12         |
| `%d`      | Day of the month            | 01 - 31         |
| `%H`      | Hour (24-hour format)       | 00 - 23         |
| `%M`      | Minute                      | 00 - 59         |
| `%S`      | Second                      | 00 - 61\*       |
| `%w`      | Weekday                     | 0(Sun) - 6(Sat) |
| `%j`      | Day of the year             | 001 - 366       |
| `%b`      | Abbreviated month name      | Jan, Feb, ...   |

> > **Note:** Value `61` is only supported for historical reasons (leap seconds).

## Example

The following example shows how to convert a date string into a `struct_time` object using `time.strptime()`:

```py
import time

# Define the date string and its corresponding format
date_string = "16 Dec 97"
format_string = "%d %b %y"

# Parse the date string into a struct_time object
converted_time = time.strptime(date_string, format_string)
print(converted_time)
```

An example output of this code is:

```shell
time.struct_time(tm_year=1997, tm_mon=12, tm_mday=16, tm_hour=0, tm_min=0, tm_sec=0, tm_wday=1, tm_yday=350, tm_isdst=-1)
```

## Codebyte Example

This example shows how to parse a date string and access information from the `struct_time` object:

```codebyte/python
import time

date_string = "21 June 2025"
format_string = "%d %B %Y"

converted_time = time.strptime(date_string, format_string)

# Access individual elements
year = converted_time.tm_year
month = converted_time.tm_mon
day = converted_time.tm_mday

print(f"Year: {year}, Month: {month}, Day: {day}")
```
