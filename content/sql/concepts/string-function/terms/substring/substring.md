---
Title: 'SUBSTRING()'
Description: 'Extracts a part of a string.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Data'
  - 'Database'
  - 'Functions'
  - 'SQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

In SQL, the **`SUBSTRING()`** function takes a slice from a string containing data in binary, character, text, or image format. Upon extraction, the [`SELECT`](https://www.codecademy.com/resources/docs/sql/commands/select) statement can be used to select and manipulate the extracted substring according to the [data type](https://www.codecademy.com/resources/docs/sql/data-types). The data type is the same as the original string except for the next expressions.

## SQL `SUBSTRING()` Syntax

```pseudo
SUBSTRING(string, start, length)
```

**Parameters:**

- `string`: The string to extract a substring from.
- `start`: The `string` index from which the substring starts. The minimum possible value is `1`.
- `length`: The number of characters to extract from `string`.

**Return value:**

Returns the sliced substring.

> **Note:** Not all services support this function. Oracle and SQLite use `SUBSTR()` to accomplish the same goal.

## Example 1: Using `SUBSTRING()` on a String Literal

This query uses `SUBSTRING()` on a string literal:

```sql
SELECT SUBSTRING('Codecademy', 1, 4) AS ExtractString;
```

Here is the output:

| ExtractString |
| ------------- |
| Code          |

## Example 2: Using `SUBSTRING()` on a Table Column

Suppose we have a table named `Employees`:

| EmployeeID | FullName      |
| ---------- | ------------- |
| 1          | John Carter   |
| 2          | Alice Johnson |
| 3          | Michael Brown |

This query uses `SUBSTRING()` on the `FullName` column of the `Employees` table:

```sql
SELECT FullName, SUBSTRING(FullName, 1, 4) AS FirstFourChars
FROM Employees;
```

Here is the output:

| FullName      | FirstFourChars |
| ------------- | -------------- |
| John Carter   | John           |
| Alice Johnson | Alic           |
| Michael Brown | Mich           |

## Example 3: Extracting Domain from an Email Using `SUBSTRING()`

Suppose we have a table `Users`:

| UserID | Email             |
| ------ | ----------------- |
| 1      | mark@example.com  |
| 2      | sarah@company.org |
| 3      | david@mysite.net  |

This query uses `SUBSTRING()` to extract the domains from the emails in the `Email` column of the `Users` table:

```sql
SELECT Email, SUBSTRING(Email, CHARINDEX('@', Email) + 1, LEN(Email)) AS Domain
FROM Users;
```

Here is the output:

| Email             | Domain      |
| ----------------- | ----------- |
| mark@example.com  | example.com |
| sarah@company.org | company.org |
| david@mysite.net  | mysite.net  |

## Frequently Asked Questions

### 1. What is `SUBSTRING()` in SQL?

`SUBSTRING()` is a SQL string function that extracts a part of a given string based on a specified starting position and length. It is supported by most relational database systems such as MySQL, SQL Server, and PostgreSQL.

### 2. How do `SUBSTRING()` and `SUBSTR()` differ?

- `SUBSTRING()`: Standard SQL function, supported by many databases.
- `SUBSTR()`: Common in Oracle and some versions of MySQL, with similar functionality but slightly different parameter handling.

### 3. How to get a substring in MySQL?

In MySQL, both `SUBSTRING()` and `SUBSTR()` work the same way:

```sql
SELECT SUBSTRING('Hello World', 7, 5) AS Result;
```

Or,

```sql
SELECT SUBSTR('Hello World', 7, 5) AS Result;
```

Here is the output:

| Result |
| ------ |
| World  |
