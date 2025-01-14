---
Title: 'Date Formats'
Description: 'SQL supports various date formats for manipulating and displaying date and time data efficiently.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Date'
  - 'Formatting'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

Dates are a fundamental data type in SQL, and it supports various formats for representing and manipulating date values. Understanding and using the correct date format is crucial for accurate data storage, querying, and reporting.

## Common Date Formats

Here are some common date formats:

| Format                | Description                       | Example               |
| --------------------- | --------------------------------- | --------------------- |
| `YYYY-MM-DD`          | ISO Standard Date Format          | `2024-12-05`          |
| `YYYY/MM/DD`          | Common alternative format         | `2024/12/05`          |
| `MM-DD-YYYY`          | US standard format                | `12-05-2024`          |
| `DD-MM-YYYY`          | European standard format          | `05-12-2024`          |
| `YYYY-MM-DD HH:MI:SS` | Full Date-Time with 24-hour clock | `2024-12-05 14:30:00` |

> **Note:** The default date format may vary depending on the SQL dialect (e.g., MySQL, PostgreSQL, SQL Server).

## Syntax

The syntax for formatting dates in SQL is as follows:

```pseudo
SELECT FORMAT(date_column, 'format_string') AS alias_name
FROM table_name;
```

- `date_column`: The column containing the date or datetime value to format.
- `format_string`: A string defining the desired output format, such as `dd/MM/yyyy` or `MM-dd-yyyy`.
- `alias_name`: An optional alias to name the resulting column in the output.

## Example

SQL Server stores dates in `YYYY-MM-DD` format by default but allow to use `FORMAT()` to display custom formats:

```sql
SELECT FORMAT('2024-12-05', 'dd/MM/yyyy') AS formatted_date;
```

The output of the above code will be as follows:

```shell
| formatted_date |
| -------------- |
| 05/12/2024     |
```
