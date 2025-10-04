---
Title: 'CONCAT()'
Description: 'Joins two or more strings into a single string.'
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

The **`CONCAT()`** function in SQL joins two or more strings into a single string. It is widely used for combining columns, literals, or expressions into meaningful data, such as full names or formatted outputs.

## Syntax

```pseudo
CONCAT(string1, string2, ..., stringN)
```

**Parameters:**

- `string1, string2, ..., stringN`: The strings or expressions to concatenate. These can be columns, string literals, or other expressions. A minimum of two strings must be provided.

**Return value:**

The `CONCAT()` function returns a single string containing the concatenation of all the input values.

> **Note:** If any argument is `NULL`, the result will be `NULL`.

## Example 1: Concatenating Strings

Suppose there is a table `employees` containing this data:

| first_name | last_name | employee_id |
| ---------- | --------- | ----------- |
| John       | Doe       | 101         |
| Alice      | Smith     | 102         |
| Mark       | Johnson   | 103         |

This query uses the `CONCAT()` function to create a column containing the concatenation of the `first_name` and `last_name` column values:

```sql
SELECT CONCAT(first_name, ' ', last_name) AS full_name
FROM employees;
```

Here is the output:

| full_name    |
| ------------ |
| John Doe     |
| Alice Smith  |
| Mark Johnson |

## Example 2: Concatenating Strings and Numbers

Considering the `employees` table, this query uses the `CONCAT()` function to create a column containing the concatenation of the `first_name`, `last_name`, and `employee_id` column values:

```sql
SELECT CONCAT(first_name, ' ', last_name, ': ', employee_id) AS employee_info
FROM employees;
```

Here is the output:

| employee_info     |
| ----------------- |
| John Doe: 101     |
| Alice Smith: 102  |
| Mark Johnson: 103 |

## Example 3: Handling `NULL` Values

Considering the `employees` table, this query uses the `CONCAT()` function to create a column containing the concatenation of the `first_name`, `middle_name`, and `last_name` column values:

```sql
SELECT CONCAT(first_name, ' ', middle_name, ' ', last_name) AS full_name
FROM employees;
```

Since no `middle_name` column exists, its value will be `NULL` for all the rows. As a result, the output will be `NULL`.

In this case, the `COALESCE()` function can be used in the query to replace `NULL` values with a custom value:

```sql
SELECT CONCAT(first_name, ' ', COALESCE(middle_name, ''), last_name) AS full_name
FROM employees;
```

In this case, the `NULL` values will be replaced with an empty string (`''`).

Here is the output:

| full_name    |
| ------------ |
| John Doe     |
| Alice Smith  |
| Mark Johnson |

## Frequently Asked Questions

### 1. Can I concatenate more than two values using `CONCAT()`?

Yes, you can concatenate as many values as you need. Just separate them with commas inside the `CONCAT()` function.

### 2. What’s the difference between `CONCAT()` and `||`?

The `||` operator is used in some SQL dialects (like PostgreSQL) for string concatenation. `CONCAT()` is a function supported in MySQL and other SQL versions.

### 3. Does `CONCAT()` add spaces between strings automatically?

No, the `CONCAT()` function doesn't add spaces between strings automatically. You must explicitly add spaces using string literals (e.g., `' '`).
