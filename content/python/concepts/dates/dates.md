---
Title: 'Dates'
Description: 'Dates and times are created and modified in Python with the built-in datetime module.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Date'
  - 'Time'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

Python has a built-in module called [datetime](https://docs.python.org/3/library/datetime.html) that can be used to create and modify `datetime` objects.

Because the module comes built-in with Python, installation is not required, but we do need to import it at the top of a Python file.

## Syntax

```pseudo
import datetime
```

## Creating datetime Objects

The `datetime` module has three main types available:

- [`date`](https://www.codecademy.com/resources/docs/python/dates/date): Returns a date in the year-month-day format.
- [`time`](https://www.codecademy.com/resources/docs/python/dates/time): Returns a time in the hour-minute-second format with optional microsecond and timezone information.
- [`datetime`](https://www.codecademy.com/resources/docs/python/dates/datetime): Returns a date and time in the year-month-day and hour-minute-second formats.

Durations between any of these types can be returned by the [`.timedelta()`](https://www.codecademy.com/resources/docs/python/dates/timedelta) method.
