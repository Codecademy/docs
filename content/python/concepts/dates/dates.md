---
Title: 'Dates'
Description: 'The built-in Python module called datetime is used to create and modify dates and times.'
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

Python doesn't have a data type for datetime but there's a built-in module called [datetime](https://docs.python.org/3/library/datetime.html) that can be used to create and modify datetime objects.

Because the module comes built-in with Python installation is not required, but we do need to import it at top of a Python file.
As an example, the code below employs the `.datetime.now()` method to return the current date and time:

```codebyte/py
import datetime

current_datetime = datetime.datetime.now()

print(current_datetime)
```

The result will be the current date and time as below:

`2021-10-05 10:20:57.944968`

It contains the year, month, day, hour, minute, second and microsecond.

## Creating new datetime object

The `datetime` module has three main types available: `date` , `time` and `datetime`.

```codebyte/py
import datetime

date_object = datetime.date(2021,10,5)
# Creates date object with year=2021, month=10 and day=5

time_object = datetime.time(10,5,31)
# Creates time object with  hour=10,minute=5 and seconds=31

datetime_object=datetime.datetime(2021,10,5,10,5,31)
# Create datetime object with year=2021, month=10, day=5,hour=10,minute=5 and second=31
```

Further more we also have a timedelta type which is used to represent time difference.
`timedelta(days, seconds, microseconds, milliseconds, minutes, hours, weeks)`
All arguments are optional and have default value of 0.

## Operations on datetime object

We can perform different operations on a datetime object.
For example, if we want to add 2 months to a current date, it can be done as below:

```codebyte/py
import datetime

current_date = datetime.datetime.now()
# Assign current datetime

date_after_two_months = current_date + datetime.timedelta(days=30*2)

print(date_after_two_months)
# Displays date 2 months from current date.
```

Date and time difference can be calculated using difference operation in `datetime` module.

```codebyte/py
import datetime

current_date = datetime.datetime.now()
#Get current datetime

date_after_interval = datetime.datetime(2023,10,5)

date_difference = date_after_interval-current_date
print(date_difference)
# Displays date interval
```
