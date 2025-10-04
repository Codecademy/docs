---
Title: 'datetime.timedelta()'
Description: 'Returns a timedelta object that represents the total difference between two dates, times, or datetime objects.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Date'
  - 'Methods'
  - 'Objects'
  - 'Time'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`datetime.timedelta()`** method returns a `timedelta` object that represents the total difference between two [dates](https://www.codecademy.com/resources/docs/python/dates/date), [times](https://www.codecademy.com/resources/docs/python/dates/time), or [`datetime`](https://www.codecademy.com/resources/docs/python/dates/datetime) objects. It allows for straightforward time calculations that are essential in scheduling, logging, and time series analysis.

## Syntax

```pseudo
import datetime

datetime.timedelta(days=0, seconds=0, microseconds=0, milliseconds=0, minutes=0, hours=0, weeks=0)
```

**Parameters:**

- `days` (Optional): Number of days.
- `seconds` (Optional): Number of seconds.
- `microseconds` (Optional): Number of microseconds.
- `milliseconds` (Optional): Number of milliseconds.
- `minutes` (Optional): Number of minutes.
- `hours` (Optional): Number of hours.
- `weeks` (Optional): Number of weeks.

**Return value:**

Returns a `timedelta` object that represents the difference between two dates, times, or `datetime` objects.

## Example 1: Adding Days to a Date

This example uses the `datetime.timedelta()` method to add days to a date:

```py
import datetime

# Assign the current datetime
today = datetime.datetime.now()

print("Today's Date:", today)

# Add 5 days
future_date = today + datetime.timedelta(days=5)

print("Future Date (after 5 days):", future_date)
```

Here is the output:

```shell
Today's Date: 2025-06-09 05:43:08.228494
Future Date (after 5 days): 2025-06-14 05:43:08.228494
```

> **Note:** Since the current `datetime` is fetched, the output may vary each time the code is run.

## Example 2: Working with Hours and Minutes

This example uses the `datetime.timedelta()` method to add 3 hours and 30 minutes to a date:

```py
import datetime

start_time = datetime.datetime(2025, 6, 8, 14, 0)

print("Start Time:", start_time)

# Add 3 hours and 30 minutes
new_time = start_time + datetime.timedelta(hours=3, minutes=30)

print("New Time:", new_time)
```

Here is the output:

```shell
Start Time: 2025-06-08 14:00:00
New Time: 2025-06-08 17:30:00
```

## Codebyte Example: Using Expressions in `.timedelta()`

This codebyte example uses an expression in the `datetime.timedelta()` method to add 60 days to a date:

```codebyte/python
import datetime

# Assign the current datetime
current_date = datetime.datetime.now()

# Add 60 days
date_after_two_months = current_date + datetime.timedelta(days = 30 * 2)

print(date_after_two_months)
```

## Frequently Asked Questions

### 1. Can you subtract `timedelta` from a `datetime`?

Yes. You can subtract `timedelta` objects from `datetime` objects:

```py
import datetime

yesterday = datetime.datetime.now() - datetime.timedelta(days=1)

print(yesterday)
```

Here is the output:

```shell
2025-06-08 05:46:41.110871
```

### 2. How can I convert `timedelta` to total seconds?

Use the `.total_seconds()` method to convert `timedelta` to total seconds:

```py
import datetime

delta = datetime.timedelta(days=1, hours=2)

print(delta.total_seconds())
```

Here is the output:

```shell
93600.0
```

### 3. Can timedelta handle negative durations?

Yes. You can subtract a future date from an earlier date, resulting in a negative `timedelta`.
