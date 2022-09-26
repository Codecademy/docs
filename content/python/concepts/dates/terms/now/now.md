---
Title: '.datetime.now()'
Description: 'Returns the current date and timestamp.'
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

The `.datetime.now()` method returns a new `datetime` object with the current local date and timestamp.

## Syntax

```pseudo
datetime.datetime.now(time_zone=None)
```

The result from the `.datetime.now()` method contains the year, month, day, hour, minute, second, and microsecond (expressed as `YYYY-MM-DD hh:mm:ss.ffffff`).

It also accepts an optional `time_zone` parameter, which is set to `None` by default.

## Codebyte Example

The current date and time can be retrieved and stored in a variable as shown below:

```codebyte/python
import datetime

today = datetime.datetime.now()

print(today)
```
