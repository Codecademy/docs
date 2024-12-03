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

The **`CONCAT()`** function in SQL is used to join two or more strings into a single string.

It is widely used for combining columns, literals, or expressions into meaningful data, such as full names or formatted outputs.

## Syntax

```pseudo
CONCAT(string1, string2, ..., stringN)
```

- `string1, string2, ..., stringN`: The strings or expressions to concatenate. These can be columns, string literals, or other expressions. A minimum of two strings must be provided.

> **Note**: If any argument is `NULL`, the result will also be `NULL`.

## Example

Suppose there is a table `employees` with the following data:

| first_name | last_name |
| ---------- | --------- |
| John       | Doe       |
| Alice      | Smith     |
| Mark       | Johnson   |

To create a column with full names, the following query including `CONCAT()` can be used:

```sql
SELECT CONCAT(first_name, ' ', last_name) AS full_name
FROM employees;
```

The output of the above example will be as follows:

```shell
| full_name       |
|------------------|
| John Doe         |
| Alice Smith      |
| Mark Johnson     |
```

Let's say that there's a need to create email addresses from the `first_name` and `last_name`. In this case, the `CONCAT()` function can combine these columns with a domain name as follows:

```sql
SELECT CONCAT(LOWER(first_name), '.', LOWER(last_name), '@company.com') AS email
FROM employees;
```

The output of the above example will be as follows:

```shell
| email                 |
|-----------------------|
| john.doe@company.com  |
| alice.smith@company.com|
| mark.johnson@company.com|
```
