---
Title: '.strptime()'
Description: 'Parses a string representing a date and time according to a specified format and returns a `datetime` object'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Date'
  - 'Methods'
  - 'Strings'
  - 'Time'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.strptime()`** method is a class method in Python's `datetime` module that parses a string representing a date and time according to a specified format and returns a corresponding `datetime` object. It serves as the inverse operation to [`.strftime()`](https://www.codecademy.com/resources/docs/python/time-module/strftime) by converting formatted string representations back into datetime objects that can be manipulated programmatically.

The `strptime()` method is essential for applications that need to process date and time data from external sources such as log files, user input, APIs, CSV files, or databases where dates are stored as strings. It enables developers to convert these string representations into Python datetime objects for calculations, comparisons, formatting, and other datetime operations. Common use cases include parsing timestamps from log files, processing user-entered dates in web forms, importing date data from spreadsheets, and converting API responses containing date strings.

## Syntax

```pseudo
datetime.strptime(date_string, format)
```

**Parameters:**

- `date_string`: The string containing the date and time information to be parsed
- `format`: A string specifying the format of the input string using format directives

**Return value:**

Returns a `datetime` object representing the parsed date and time.

## Example 1: Basic String Parsing

This example demonstrates the fundamental usage of `.strptime()` to convert a simple date string into a datetime object:

```py
from datetime import datetime

# Parse a date string in YYYY-MM-DD format
date_string = "2024-03-15"
date_object = datetime.strptime(date_string, "%Y-%m-%d")

print("Original string:", date_string)
print("Parsed datetime object:", date_object)
print("Type:", type(date_object))

# Access individual components
print("Year:", date_object.year)
print("Month:", date_object.month)
print("Day:", date_object.day)
```

This example results in the following output:

```shell
Original string: 2024-03-15
Parsed datetime object: 2024-03-15 00:00:00
Type: <class 'datetime.datetime'>
Year: 2024
Month: 3
Day: 15
```

The example shows how `.strptime()` converts a string into a full datetime object. Notice that when only a date is provided, the time components default to 00:00:00.

## Example 2: Log File Processing

This example demonstrates parsing timestamps from a log file format, which is a common real-world scenario for system administrators and developers:

```py
from datetime import datetime

# Sample log entries with timestamps
log_entries = [
  "2024-06-09 14:30:25 INFO: User login successful",
  "2024-06-09 14:32:18 ERROR: Database connection failed",
  "2024-06-09 14:33:45 WARNING: High memory usage detected"
]

# Extract and parse timestamps from log entries
parsed_timestamps = []

for entry in log_entries:
  # Extract timestamp part (first 19 characters)
  timestamp_str = entry[:19]

  # Parse the timestamp
  timestamp_obj = datetime.strptime(timestamp_str, "%Y-%m-%d %H:%M:%S")
  parsed_timestamps.append(timestamp_obj)

  print(f"Log time: {timestamp_obj}")
  print(f"Day of week: {timestamp_obj.strftime('%A')}")

# Calculate time difference between first and last log entry
if len(parsed_timestamps) > 1:
  time_diff = parsed_timestamps[-1] - parsed_timestamps[0]
  print(f"\nTime span of logs: {time_diff}")
```

This example results in the following output:

```shell
Log time: 2024-06-09 14:30:25
Day of week: Sunday
Log time: 2024-06-09 14:32:18
Day of week: Sunday
Log time: 2024-06-09 14:33:45
Day of week: Sunday

Time span of logs: 0:03:20
```

This example shows practical usage for parsing server logs or application logs where timestamps need to be extracted and analyzed for monitoring, debugging, or reporting purposes.

## Codebyte Example: International Date Format Processing

This example demonstrates handling various international date formats, which is crucial for applications dealing with global data sources:

```codebyte/python
from datetime import datetime

# Different international date formats
international_dates = [
  ("15/03/2024", "%d/%m/%Y", "European DD/MM/YYYY"),
  ("March 15, 2024", "%B %d, %Y", "US Long Format"),
  ("15-Mar-24", "%d-%b-%y", "Short Month Name"),
  ("2024.03.15 18:30", "%Y.%m.%d %H:%M", "Dot Separated with Time")
]

print("Converting international date formats:")
print("-" * 50)

for date_str, fmt, description in international_dates:
  try:
    # Parse the date string according to its format
    parsed_date = datetime.strptime(date_str, fmt)

    # Convert to standardized format for comparison
    standard_format = parsed_date.strftime("%Y-%m-%d %H:%M:%S")

    print(f"{description}:")
    print(f"  Input: {date_str}")
    print(f"  Parsed: {standard_format}")
    print(f"  Weekday: {parsed_date.strftime('%A')}")
    print()

  except ValueError as e:
    print(f"Error parsing {date_str}: {e}")

# Demonstrate timezone handling with UTC indicator
utc_string = "2024-03-15T14:30:00Z"
# Remove 'Z' and parse (strptime doesn't handle 'Z' directly)
clean_utc = utc_string.replace('Z', '')
utc_datetime = datetime.strptime(clean_utc, "%Y-%m-%dT%H:%M:%S")
print(f"UTC timestamp: {utc_string}")
print(f"Parsed as: {utc_datetime}")
```

This example illustrates how `.strptime()` can handle various date formats commonly encountered when processing data from different countries and systems.

## Frequently Asked Questions

### 1. What's the difference between `.strptime()` and `.strftime()`?

`strptime()` converts strings TO datetime objects (string parse time), while `.strftime()` converts datetime objects TO formatted strings (string format time). They are inverse operations.

### 2. How do I handle invalid date strings using `.strptime()` in Python?

If the input string does not match the expected format, `.strptime()` will raise a ValueError. To handle such cases safely, you can use a try-except block.

### 3. Can `.strptime()` parse time-only or date-only strings in Python?

Yes, strptime can parse time-only or date-only strings, as long as the format string matches exactly.
