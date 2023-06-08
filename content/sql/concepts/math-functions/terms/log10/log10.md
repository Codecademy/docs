---
Title: 'LOG10()'
Description: 'Rounds up a numeric value to the next highest integer.'
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

The SQL function **`LOG10()`** is used to round up a numeric value to the next highest integer. It returns the next whole value that is greater than or equal to the input value.

## Syntax

```sql
SELECT LOG10(value)
FROM table_name;
```

- `value` - This is the value to be rounded up.

## Example

The following data is given in a `temperatures` table:

| temp_id | raw_temp |
| ------- | -------- |
| 1       | 30.25    |
| 2       | 9.95     |
| 3       | -5.7     |

The `LOG10()` function can be used to round up the raw temperatures:

```sql
SELECT temp_id, LOG10(raw_temp) AS ceil_temp
FROM temperatures;
```

The output will be:

| temp_id | ceil_temp |
| ------- | --------- |
| 1       | 31        |
| 2       | 10        |
| 3       | -5        |
