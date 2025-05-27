---
Title: 'DATEADD()'
Description: 'Adds a specified time interval to a date and returns the modified date.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Database'
  - 'Data Types'
  - 'Date'
  - 'Queries'
  - 'SQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`DATEADD()`** function is a powerful date manipulation function in SQL Server that adds or subtracts a specified time interval to a date. This function enables precise date arithmetic by allowing users to modify date and time values in various increments such as years, months, days, hours, minutes, seconds, and even milliseconds.

`DATEADD()` is commonly used in a wide range of database applications that require date calculations, such as determining future dates for appointments, calculating age-based metrics, setting expiration dates, scheduling recurring events, or performing time-series analysis. Its flexibility makes it essential for any application that needs to perform date-time arithmetic operations in SQL Server.

## Syntax

```pseudo
DATEADD(interval, number, date)
```

**Parameters:**

- `interval`: The date part to which the number will be added. Acceptable values include:
  - `year`, `yyyy`, `yy` - Year
  - `quarter`, `qq`, `q` - Quarter
  - `month`, `mm`, `m` - Month
  - `dayofyear`, `dy`, `y` - Day of the year
  - `day`, `dd`, `d` - Day
  - `week`, `wk`, `ww` - Week
  - `weekday`, `dw`, `w` - Weekday
  - `hour`, `hh` - Hour
  - `minute`, `mi`, `n` - Minute
  - `second`, `ss`, `s` - Second
  - `millisecond`, `ms` - Millisecond
  - `microsecond`, `mcs` - Microsecond
  - `nanosecond`, `ns` - Nanosecond
- `number`: The value to add to the specified interval. This can be positive to add time or negative to subtract time.
- `date`: The date value to which the interval will be added. This can be a date literal, a column containing date values, or a date returned by another function.

**Return value:**

The `DATEADD()` function returns a value of the same data type as the input `date` expression.

## Example 1: Basic Usage of the `DATEADD()` function

This example demonstrates how to add different time intervals to a date using the `DATEADD()` function:

```sql
-- Add 1 year to a date
SELECT DATEADD(year, 1, '2023-05-21') AS OneYearLater;

-- Add 3 months to a date
SELECT DATEADD(month, 3, '2023-05-21') AS ThreeMonthsLater;

-- Add 14 days to a date
SELECT DATEADD(day, 14, '2023-05-21') AS TwoWeeksLater;

-- Subtract 6 hours from a datetime
SELECT DATEADD(hour, -6, '2023-05-21 12:00:00') AS SixHoursEarlier;
```

The output of this code will be:

| OneYearLater | ThreeMonthsLater | TwoWeeksLater | SixHoursEarlier         |
| ------------ | ---------------- | ------------- | ----------------------- |
| 2024-05-21   | 2023-08-21       | 2023-06-04    | 2023-05-21 06:00:00.000 |

This example shows how `DATEADD()` can perform a variety of date calculations by simply changing the interval parameter and the number value.

> **Note:** Negative numbers decrease the date rather than increase it.

## Example 2: Calculating Due Dates

This example demonstrates how `DATEADD()` can be used to calculate payment due dates in a business scenario:

```sql
-- Create a sample invoice table
CREATE TABLE #Invoices (
  InvoiceID INT PRIMARY KEY,
  CustomerID INT,
  InvoiceDate DATE,
  Amount DECIMAL(10, 2)
);

-- Insert sample data
INSERT INTO #Invoices (InvoiceID, CustomerID, InvoiceDate, Amount)
VALUES
  (1001, 5, '2023-05-01', 1250.00),
  (1002, 8, '2023-05-10', 875.50),
  (1003, 12, '2023-05-15', 3420.75);

-- Calculate 30-day payment due dates for each invoice
SELECT
  InvoiceID,
  CustomerID,
  InvoiceDate,
  DATEADD(day, 30, InvoiceDate) AS DueDate,
  Amount
FROM
  #Invoices;

-- Clean up
DROP TABLE #Invoices;
```

The output of this code will be:

| InvoiceID | CustomerID | InvoiceDate | DueDate    | Amount  |
| --------- | ---------- | ----------- | ---------- | ------- |
| 1001      | 5          | 2023-05-01  | 2023-05-31 | 1250.00 |
| 1002      | 8          | 2023-05-10  | 2023-06-09 | 875.50  |
| 1003      | 12         | 2023-05-15  | 2023-06-14 | 3420.75 |

This example showcases a practical application of `DATEADD()` in a business context where invoices typically have a payment period of 30 days. The function makes it easy to consistently calculate these due dates.

## Example 3: Working with Variable Intervals

This example demonstrates how to use `DATEADD()` with variables to create flexible date calculations:

```sql
-- Declare variables for different parts of the calculation
DECLARE @StartDate DATETIME = '2023-01-15 08:30:00';
DECLARE @MonthsToAdd INT = 6;
DECLARE @DaysToAdd INT = 10;
DECLARE @HoursToAdd INT = 3;

-- Calculate the result date by applying multiple DATEADD() operations
SELECT
  @StartDate AS StartDate,
  DATEADD(month, @MonthsToAdd, @StartDate) AS AfterAddingMonths,
  DATEADD(day, @DaysToAdd,
    DATEADD(month, @MonthsToAdd, @StartDate)) AS AfterAddingMonthsAndDays,
  DATEADD(hour, @HoursToAdd,
    DATEADD(day, @DaysToAdd,
      DATEADD(month, @MonthsToAdd, @StartDate))) AS FinalDateTime;
```

The output generated by this code will be:

| StartDate               | AfterAddingMonths       | AfterAddingMonthsAndDays | FinalDateTime           |
| ----------------------- | ----------------------- | ------------------------ | ----------------------- |
| 2023-01-15 08:30:00.000 | 2023-07-15 08:30:00.000 | 2023-07-25 08:30:00.000  | 2023-07-25 11:30:00.000 |

This example shows how `DATEADD()` can be nested and used with variables to create complex date calculations. This approach is particularly useful in stored procedures or dynamic SQL where the amount to add may vary based on different parameters or business rules.

## Frequently Asked Questions

### 1. What happens when `DATEADD()` adds months or years that would create an invalid date?

When `DATEADD()` would create an invalid date (like February 30), SQL Server automatically adjusts to the last valid date of the month. For example, adding one month to January 31 results in February 28 (or 29 in leap years).

```sql
-- Example of month-end adjustment
SELECT DATEADD(month, 1, '2023-01-31') AS OneMonthLater; -- Returns 2023-02-28
```

### 2. How does `DATEADD()` handle different date formats?

`DATEADD()` works with SQL Server's standard date formats. For string literals, it's best practice to use formats that are unambiguous, such as 'YYYY-MM-DD' (ISO format), to ensure consistent results regardless of server settings.

### 3. What is the maximum range that `DATEADD()` can handle?

`DATEADD()` can handle dates within SQL Server's datetime range, from January 1, 1753, to December 31, 9999. For datetime2, the range is January 1, 0001 to December 31, 9999.
