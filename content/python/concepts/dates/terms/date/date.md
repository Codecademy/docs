---
Title: 'datetime.date()'
Description: 'Returns a date object in the year-month-day format.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Date'
  - 'Time'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`datetime.date()`** method returns a date object in the year-month-day format. It's useful when there is a need of only the calendar date without time information.

## Syntax

```pseudo
datetime.date(YYYY, MM, DD)
```

All parameters passed to the `datetime.date()` method in the snippet above are required and must be passed in order. Otherwise, a `TypeError` is thrown.

**Parameters:**

- `year`: A four-digit integer representing the year (e.g., 2025).
- `month`: An integer representing the month (1 for January, 12 for December).
- `day`: An integer representing the day of the month (must be valid for the given month and year).

**Return value:**

This method returns a `date` object representing the specified calendar date in the format YYYY-MM-DD.

## Example 1: Create and Access Date Components

Here's a detailed example of using `.date()` to create a date object and access its components:

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

## Example 2: Get the Date of User Login

In this example, the `date()` method is used to record a project deadline without including time details:

```py
import datetime

login_time = datetime.datetime(2024, 4, 9, 18, 30)
login_date = login_time.date()

print("User login date:", login_date)
```

The code produces the following output:

```shell
User login date: 2024-04-09
```

## Codebyte Example 1: Check Expiry Date of a Product

This code compares the current date with a product's expiry date, ignoring the time:

```codebyte/python
import datetime

expiry_timestamp = datetime.datetime(2025, 5, 1, 23, 59)
today = datetime.datetime.now().date()

if today == expiry_timestamp.date():
  print("Product expires today!")
else:
  print("Product still valid.")
```

It's perfect for real-world scenarios like food, coupons, or subscription expiration.

> **Note:** The outputs produced for all these example codes will vary depending on the input dates and the current date when the code is run.

## Frequenty Asked Questions

<details>
<summary>1. Can I use `.date()` on a `date` object?</summary>
<p>No, the `.date()` method is only available on `datetime` objects. A date object already holds only `date` information.</p>
</details>
  
<details>
<summary>2. What is the return type of `.date()`?</summary>
<p>It returns a `datetime.date` object that contains the year, month, and day—but no time information.</p>
</details>

<details>
<summary>3. Does `.date()` affect the original datetime?</summary>
<p>No, `.date()` is non-destructive. It returns a new `date` object and does not modify the original `datetime` object.</p>
</details>
