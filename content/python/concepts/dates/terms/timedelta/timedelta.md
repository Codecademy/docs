---
Title: 'datetime.timedelta()'
Description: 'Returns a duration, resolved to microseconds, that occurs between dates, times, and datetimes.'
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

The `datetime.timedelta()` method returns an object representing a duration, resolved to microseconds, that occurs between [`date`](https://www.codecademy.com/resources/docs/python/dates/date), [`time`](https://www.codecademy.com/resources/docs/python/dates/time), and [`datetime`](https://www.codecademy.com/resources/docs/python/dates/datetime) objects.

## Syntax

```pseudo
datetime.timedelta(days=0, seconds=0, microseconds=0, milliseconds=0, minutes=0, hours=0, weeks=0)
```

All of the parameters are optional and default to zero.

## Codebyte Example

We can perform different operations on a `datetime` object.
For example, if we want to add 2 months to the current date, it can be done as below:

```codebyte/python
import datetime

# Assign current datetime
current_date = datetime.datetime.now()

date_after_two_months = current_date + datetime.timedelta(days = 30*2)

print(date_after_two_months)
# Displays date 2 months after the current date
```
