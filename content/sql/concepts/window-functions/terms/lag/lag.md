---
Title: 'LAG()'
Description: 'Accesses data from previous rows without the need for a self join.'
Subjects:
  - 'Data Science'
Tags:
  - 'SQL Server'
  - 'Database'
  - 'Queries'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`LAG()`** window function facilitates access to previous rows based on the offset argument. It can be particularly useful when a comparison of a previous value is necessary without the use of a self join. There is a similarity to the `LEAD()` function with the difference being the accessible rows. `LEAD()` accesses subsequent rows while `LAG()` accesses previous rows.

## Syntax

```pseudo
LAG (expression [, offset] [, default])
OVER ( [ partition_by ] order_by )
```

`LAG()` accepts the following paramteres:

- `expression` - The column value which will be referenced.
- `offset` - A positive numeric indicator of the previous row to access that is relative to the current row. If not specified the default is 1.
- `default` - The value that will be returned if the `offset` is out of range. This is an optional argument, if not specified NULL will be returned.
- `partition_by` - Allows the result set to be grouped based on a column. This is an optional argument, if not specified the result set will be treated as a single group.
- `order_by` - Determines the order of the result set. If `partition_by` is specified, it will order the grouped data instead.

## Example

The example below uses the `LAG()` function to create the new column `previous_age` based on values in the previous row of the `Users` table.

Users Table

| first_name | last_name | age |
| ---------- | --------- | --- |
| chris      | smith     | 30  |
| dave       | james     | 19  |
| jenna      | black     | 35  |
| kyle       | xy        | 60  |

```sql
SELECT *,
    LAG(age, 1) OVER (
  ORDER BY age ASC) AS previous_age
FROM Users;
```

The output is a table that features a new column `previous_age`, which holds the values from the previous records. The first record is null because a default was not specified and the previous row would be out of range.

Output

| first_name | last_name | age | previous_age |
| ---------- | --------- | --- | ------------ |
| kyle       | xy        | 60  | null         |
| jenna      | black     | 35  | 60           |
| chris      | smith     | 30  | 35           |
| dave       | james     | 19  | 30           |
