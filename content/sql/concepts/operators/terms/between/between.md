---
Title: 'BETWEEN'
Description: 'Filters records within a specified range of values.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Filter'
  - 'Operators'
  - 'Queries'
  - 'Range'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`BETWEEN`** operator in SQL filters records within a specified range of values. It simplifies the process of retrieving data that falls between two boundary values, working with numeric, text, and date columns to create inclusive range queries.

## Syntax of `BETWEEN` operator

```pseudo
SELECT column_name(s)
FROM table_name
WHERE column_name BETWEEN value1 AND value2;
```

**Parameters:**

- `column_name(s)`: The name of the column(s) to retrieve data from
- `table_name`: The name of the table containing the data
- `value1`: The starting value of the range (inclusive)
- `value2`: The ending value of the range (inclusive)

**Return value:**

The `BETWEEN` operator returns all records where the specified column value falls within the inclusive range from `value1` to `value2`.

## Sample Database

The following examples use this sample `Employees` table:

| EmployeeID | FirstName | LastName | Age | Salary | Department | HireDate   |
| ---------- | --------- | -------- | --- | ------ | ---------- | ---------- |
| 1          | John      | Adams    | 28  | 45000  | IT         | 2023-03-15 |
| 2          | Sarah     | Brown    | 34  | 65000  | Sales      | 2022-07-10 |
| 3          | Mike      | Davis    | 42  | 75000  | IT         | 2021-01-20 |
| 4          | Emma      | Johnson  | 29  | 55000  | Marketing  | 2023-08-05 |
| 5          | Robert    | Miller   | 38  | 68000  | Sales      | 2022-11-12 |
| 6          | Lisa      | Wilson   | 25  | 48000  | IT         | 2023-05-18 |

## NOT BETWEEN Example

This example demonstrates how to exclude records within a specific range using the `NOT BETWEEN` operator:

```sql
-- Find employees whose ages are NOT between 30 and 40
SELECT EmployeeID, FirstName, LastName, Age
FROM Employees
WHERE Age NOT BETWEEN 30 AND 40;
```

The output of this code is:

```shell
EmployeeID | FirstName | LastName | Age
1          | John      | Adams    | 28
3          | Mike      | Davis    | 42
4          | Emma      | Johnson  | 29
6          | Lisa      | Wilson   | 25
```

The query returns employees whose ages fall outside the 30-40 range, effectively filtering out employees within that age bracket.

## BETWEEN with IN Example

This example combines the `BETWEEN` operator with the `IN` operator to create more complex filtering conditions for real-world scenarios:

```sql
-- Find employees with salaries between 50000 and 70000 from specific departments
SELECT EmployeeID, FirstName, LastName, Salary, Department
FROM Employees
WHERE Salary BETWEEN 50000 AND 70000
  AND Department IN ('IT', 'Sales', 'Marketing');
```

The output of this code is:

```shell
EmployeeID | FirstName | LastName | Salary | Department
2          | Sarah     | Brown    | 65000  | Sales
4          | Emma      | Johnson  | 55000  | Marketing
5          | Robert    | Miller   | 68000  | Sales
```

This query filters employees that meet both conditions: salaries within the $50,000-$70,000 range and belonging to specific departments, useful for HR analysis and budget planning.

## BETWEEN Text Values Example

This example shows how to filter text data alphabetically using the `BETWEEN` operator, useful for name-based searches and alphabetical sorting:

```sql
-- Find employees whose last names fall alphabetically between 'Brown' and 'Miller'
SELECT EmployeeID, FirstName, LastName, Department
FROM Employees
WHERE LastName BETWEEN 'Brown' AND 'Miller';
```

The output of this code is:

```shell
EmployeeID | FirstName | LastName | Department
2          | Sarah     | Brown    | Sales
3          | Mike      | Davis    | IT
4          | Emma      | Johnson  | Marketing
5          | Robert    | Miller   | Sales
```

The query returns employees whose surnames fall within the alphabetical range, including both boundary values.

## BETWEEN Dates Example

This example demonstrates date range filtering, commonly used for reporting and time-based analysis in business applications:

```sql
-- Find employees hired between January 1, 2023 and December 31, 2023
SELECT EmployeeID, FirstName, LastName, HireDate, Department
FROM Employees
WHERE HireDate BETWEEN '2023-01-01' AND '2023-12-31';
```

The output of this code is:

```shell
EmployeeID | FirstName | LastName | HireDate   | Department
1          | John      | Adams    | 2023-03-15 | IT
4          | Emma      | Johnson  | 2023-08-05 | Marketing
6          | Lisa      | Wilson   | 2023-05-18 | IT
```

This query retrieves all employees hired during the year 2023, useful for analyzing hiring patterns and new employee onboarding.

## Frequently Asked Questions

### 1. Is SQL `BETWEEN` inclusive or exclusive?

The SQL `BETWEEN` operator is inclusive, meaning it includes both the starting and ending values in the result set. For example, `WHERE Age BETWEEN 25 AND 35` will return records where Age equals 25, 35, and any value in between.

### 2. What is the function of `BETWEEN`?

The `BETWEEN` operator functions as a shorthand for range comparisons, replacing the need to write `WHERE column >= value1 AND column <= value2`. It simplifies queries by providing a more readable way to filter data within specific ranges for numeric, text, and date values.

### Why is SQL `BETWEEN` operator used?

The `BETWEEN` operator is used because it improves query readability and reduces syntax complexity when filtering data within ranges. It's particularly valuable for date ranges, price filtering, age groups, and alphabetical sorting, making SQL queries more intuitive and maintainable for developers and analysts.
