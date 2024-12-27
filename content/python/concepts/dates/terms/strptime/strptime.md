---
Title: '.strptime()' 
Description: 'Return a datetime corresponding to date_string, parsed according to format.'
Subjects:
- 'Python'
- 'Computer Science'
Tags:
- 'Date'
- 'Time'
- 'Strings'
CatalogContent:
- 'learn-python-3'
- 'paths/computer-science'
---

The **`.strptime()`** is a method included in the `datetime` module. It is used to parse a string representing a date and/or time and convert it into a `datetime` object using a specified format.

## Syntax

```python
from datetime import datetime

datetime.strptime(date_string, format)
```

### Parameters:

- `date_string` (str): The string representing the date and/or time.
- `format` (str): The format that defines the structure of `date_string`. This uses the directives from the `datetime` module (e.g., `%Y` for a four-digit year, `%m` for a two-digit month).

### Returns:

- A `datetime` object corresponding to the parsed date and time.

## Codebyte Example

```codebyte/python
from datetime import datetime

# Define the date-time string and format
datetime_string = "27/12/2024 15:30:00"
datetime_format = "%d/%m/%Y %H:%M:%S"

# Parse the string into a datetime object
dt_object = datetime.strptime(datetime_string, datetime_format)

print(dt_object)  # Output: 2024-12-27 15:30:00
```