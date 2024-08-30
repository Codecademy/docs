---
Title: 'COS()'
Description: 'Returns the cosine of a given angle.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'SQL'
  - 'MySQL'
  - 'PostgreSQL'
  - 'SQLite'
  - 'Functions'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The SQL function **`COS()`** calculates the cosine of a given angle, expressed in radians.

## Syntax

```sql
SELECT COS(angle);
```

`angle` is the value, for which the cosine is calculated. The cosine value returned will be between -1 and 1.

> **Note:** The `COS()` function uses radians as its input, not degrees. To convert degrees to radians, the degree value can be multiplied by π/180.

## Example

In the following example this data is given in the table `angles`:

| id  | angle_in_degrees |
| --- | ---------------- |
| 1   | 10               |
| 2   | 45               |
| 3   | 180              |

The `COS()` function is used to calculate the cosine as the `cos_value`:

```sql
SELECT id, angle_in_degrees, COS(angle_in_degrees * (PI()/180)) AS cos_value
FROM angles;
```

The output will be:

| id  | angle_in_degrees | cos_value          |
| --- | ---------------- | ------------------ |
| 1   | 10               | 0.984807753012208  |
| 2   | 45               | 0.7071067811865476 |
| 3   | 180              | -1                 |

> **Note:** For the use of this method with SQL databases like MySQL, PostgreSQL, SQLite, or SQL Server, refer to their respective documentation for more details on the `COS()` function implementation and compatibility.
