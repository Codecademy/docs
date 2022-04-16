---
Title: '.date()'
Description: 'Returns a date in the year-month-day format.'
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

The `.date()` method returns a date in the year-month-day format.

## Syntax

```pseudo
datetime.date(YYYY, MM, DD)
```

All parameters passed to the `.date()` method in the snippet above are required and must be passed in order. Otherwise, a `TypeError` is thrown.

## Codebyte Example

A date can be retrieved and stored in a variable as shown below:

```codebyte/python
import datetime

meeting_date = datetime.date(2021, 10, 5)

print(meeting_date)
```
