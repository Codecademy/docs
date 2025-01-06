---
Title: '.strftime()'
Description: 'Format time and date objects into readable strings based on specified patterns.'
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

The **`datetime.strftime()`** method formats time and `datetime` objects into readable strings on specified format codes.

## Syntax

```pseudo
datetime.strftime(format)
```

Here are some commonly used format codes:

| Directive | Meaning                                | Example                                  |
| --------- | -------------------------------------- | ---------------------------------------- |
| `%a`      | Abbreviated name of days               | Sun, Mon, …, Sat                         |
| `%d`      | Day of the month                       | 01, 02, …, 31                            |
| `%b`      | Abbreviated name of months             | Jan, Feb, …, Dec                         |
| `%Y`      | Year                                   | 0001, 0002, …, 2013, 2014, …, 9998, 9999 |
| `%m`      | Month                                  | 01, 02, …, 12                            |
| `%I`      | Hour (12-hour clock)                   | 01, 02, …, 12                            |
| `%M`      | Minute                                 | 00, 01, …, 59                            |
| `%p`      | Locale’s equivalent of either AM or PM | AM, PM                                   |

For a complete list, refer to the [Python documentation](https://docs.python.org/3/library/datetime.html#strftime-strptime-behavior).

## Example

The formatted time can be retrieved and stored in a variable as shown in this example:

```py
import datetime

#Assign current time
now = datetime.datetime.now()

#Format the current date and time
formatted_date = now.strftime('%a %d %b %Y, %I:%M%p')

print(formatted_date)
```

This example results in the following output which displays the current date and time in specific format:

```shell
Mon 06 Jan 2025, 09:01PM
```

> **Note:** The actual output will vary depending on the current date and time when the script is executed.
