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

## Example

Here's a detailed example of using `datetime.date()` to create a date object and access its components:

```py
import datetime

example_date = datetime.date(2024, 10, 15)

year = example_date.year
month = example_date.month
day = example_date.day

print("Complete Date:", example_date)
print("Year:", year)
print("Month:", month)
print("Day:", day)
```

The above code produces the following output:

```shell
Complete Date: 2024-10-15
Year: 2024
Month: 10
Day: 15
```

## Codebyte Example

The following codebyte example shows the usage of the `datetime.date()` method:

```codebyte/python
import datetime

meeting_date = datetime.date(2021, 10, 5)

print(meeting_date)
```
