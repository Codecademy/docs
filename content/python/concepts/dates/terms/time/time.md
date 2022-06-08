---
Title: '.time()'
Description: 'Returns the seconds elapsed since the epoch.'
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

The `datetime.time()` method returns a time in seconds that has passed since the epoch set on the computer.

## Syntax

```pseudo
datetime.time(hour=0, minute=0, second=0, microsecond=0, tzinfo=None)
```

The epoch is usually set as `January 1, 1970, 00:00:00 (UTC)` on most operating systems, excluding any leap seconds.

## Codebyte Example

The time can be retrieved and stored in a variable as shown below:

```codebyte/python
import datetime

meeting_time = datetime.time(10, 5, 31)

print(meeting_time)
```
