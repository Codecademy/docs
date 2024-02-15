---
Title: '.datetime()'
Description: 'Returns a new object with date and time properties.'
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

The `.datetime()` method returns a new object with date and time properties.

## Syntax

```pseudo
datetime.datetime(YYYY, MM, DD, hh, mm, ss)
```

The following parameters must be valid when passed into the `.datetime()` method:

| Parameter | Required? | Description                                                                     | Range                                            |
| :-------: | :-------: | ------------------------------------------------------------------------------- | ------------------------------------------------ |
|  `YYYY`   |  &check;  | The year expressed in one to four digits.                                       | 1 - 9999                                         |
|   `MM`    |  &check;  | The month expressed in one or two digits.                                       | 1 - 12                                           |
|   `DD`    |  &check;  | The day of the month expressed in one or two digits.                            | 1 - the number of days in a given month and year |
|   `hh`    | &#10005;  | The hour in a given 1-day period that can be expressed as one or two digits.    | 0 - 24                                           |
|   `mm`    | &#10005;  | The minute in a given 1-hour period that can be expressed as one or two digits. | 0 - 60                                           |
|   `ss`    | &#10005;  | The second in a given 1-hour period that can be expressed as one or two digits. | 0 - 60                                           |

## Codebyte Example

A date and time can be retrieved and stored in a variable as shown below:

```codebyte/python
import datetime

meeting = datetime.datetime(2021, 10, 5, 10, 5, 31)

print(meeting)
```
