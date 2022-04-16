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
datetime.datetime(YYYY, M, D, hh, mm, ss)
```

The following parameters must be valid when passed into the `.datetime()` method:

| Parameter | Required? | Description                                                                                                   |
| :-------: | :-------: | ------------------------------------------------------------------------------------------------------------- |
|  `YYYY`   |  &check;  | The year expressed in four digits.                                                                            |
|   `MM`    |  &check;  | The month expressed in two digits, ranging from 1 to 12.                                                      |
|   `DD`    |  &check;  | The day of the month expressed in two digits, ranging from 1 to the number of days in a given month and year. |
|   `hh`    | &#10005;  | The hour in a given 1-day period that can be expressed as one or two digits and ranges from 0 to 24.          |
|   `mm`    | &#10005;  | The minute in a given 1-hour period that can be expressed as one or two digits and ranges from 0 to 60.       |
|   `ss`    | &#10005;  | The second in a given 1-hour period that can be expressed as one or two digits and ranges from 0 to 60.       |

## Codebyte Example

A date and time can be retrieved and stored in a variable as shown below:

```codebyte/python
import datetime

meeting = datetime.datetime(2021, 10, 5, 10, 5, 31)

print(meeting)
```
