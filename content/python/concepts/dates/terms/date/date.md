---
Title: 'datetime.date()'
Description: 'Returns a date object in the year-month-day format.'
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

The `datetime.date()` method returns a date object in the year-month-day format.

## Syntax

```pseudo
datetime.date(YYYY, MM, DD)
```

All parameters passed to the `datetime.date()` method in the snippet above are required and must be passed in order. Otherwise, a `TypeError` is thrown.

| Parameter | Description                                          |                    Range                     |
| :-------: | ---------------------------------------------------- | :------------------------------------------: |
|  `YYYY`   | The year expressed in four digits.                   |                   1 - 9999                   |
|   `MM`    | The month expressed in one or two digits.            |                    1 - 12                    |
|   `DD`    | The day of the month expressed in one or two digits. | 1 - number of days in a given month and year |

## Codebyte Example

A date can be retrieved and stored in a variable as shown below:

```codebyte/python
import datetime

meeting_date = datetime.date(2021, 10, 5)

print(meeting_date)
```
