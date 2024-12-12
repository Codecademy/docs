# The strftime() Method: Date and Time Formatting in Python

The **`strftime()`** module consists of str(string), f(format) and time. This means that it can format time and date objects into readable strings. It is part of the `datetime` module and allows developers to create custom string representations of date and time using format codes.

#### Syntax

```python
datetime.strftime(format)
```

- **`format`**: A string that defines the desired format using specific format codes.


#### Importing `datetime`

To use the `strftime()` method, we need first import the `datetime` module:

```python
from datetime import datetime
```


## Using `strftime()` to Format Dates and Times

The **format codes**, determine how date and time are displayed. Below are examples demonstrating common usage.

### Formatting Current Date and Time

```python
from datetime import datetime

# Get current date and time
now = datetime.now()

# Format the current date and time
formatted_date = now.strftime("%Y-%m-%d %H:%M:%S")
print("Formatted Date:", formatted_date)
```

**Output:**

```
Formatted Date: 2024-12-12 14:23:45
```


### Custom Formatting

We can combine different format codes to create our own date and time formats.

```python
from datetime import datetime

now = datetime.now()

# Custom format: weekday, month, day, year
custom_format = now.strftime("%A, %B %d, %Y")
print("Custom Format:", custom_format)
```

**Output:**

```
Custom Format: Thursday, December 12, 2024
```

Also we can use the following code to format the time only

```python
from datetime import datetime

# We only took the time part
now = datetime.now().time() 

# Custom format: time formatting only
time_only = now.strftime("%I:%M:%S %p")
print("Formatted Time:", time_only)
```

**Output:**

```
Formatted Time: 02:23:45 PM
```

---

### Common Format Codes

Here are some commonly used format codes:

| Code | Description                 | Example  |
| ---- | --------------------------- | -------- |
| `%Y` | Year (4 digits)             | 2024     |
| `%y` | Year (last 2 digits)        | 24       |
| `%m` | Month                       | 12       |
| `%B` | Full month name             | December |
| `%A` | Full weekday name           | Thursday |
| `%d` | Day of the month            | 12       |
| `%H` | Hour (24-hour clock)        | 14       |
| `%I` | Hour (12-hour clock)        | 02       |
| `%p` | AM/PM                       | PM       |
| `%M` | Minute                      | 23       |
| `%S` | Second                      | 45       |

For a complete list, refer to the [Python documentation](https://docs.python.org/3/library/datetime.html#strftime-strptime-behavior).

---

### Summary

The `strftime()` method is a powerful tool for formatting date and time in Python. Its versatility allows for custom formats, making it a valuable resource in applications ranging from logging systems to user-facing interfaces.

**Key Takeaways:**

- Import the `datetime` module to access `strftime()`.
- Use format codes to create custom date and time representations.
