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

`LAG()` accepts the following parameters:

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
SELECT
    first_name,
    last_name,
    age,
    LAG(age, 1) OVER (
        ORDER BY age DESC
    ) AS previous_age
FROM Users;
```

The output of the above code is a table that features a new column `previous_age`, which holds the values from the previous records. The first record is null because a default was not specified and the previous row would be out of range.

| first_name | last_name | age | previous_age |
| ---------- | --------- | --- | ------------ |
| kyle       | xy        | 60  | NULL         |
| jenna      | black     | 35  | 60           |
| chris      | smith     | 30  | 35           |
| dave       | james     | 19  | 30           |

### Using `PARTITION BY` Clause

This example demonstrates how to use the `LAG()` function to create a new column, `previous_position`.

The `PARTITION BY employee_id` clause ensures that the `LAG()` function operates within each group of rows that share the same `employee_id`. The `ORDER BY promotion_date` ensures the rows are processed in chronological order.

`Promotions` Table

| employee_id | promotion_date | new_position |
| ----------- | -------------- | ------------ |
| 1           | 2020-01-01     | Junior Dev   |
| 1           | 2021-06-01     | Mid Dev      |
| 1           | 2024-03-01     | Senior Dev   |
| 2           | 2019-05-01     | Intern       |
| 2           | 2022-11-01     | Analyst      |
| 2           | 2024-11-20     | Data Analyst |

```sql
SELECT
    employee_id,
    promotion_date,
    new_position,
    LAG(new_position) OVER (
        PARTITION BY employee_id
        ORDER BY promotion_date
    ) AS previous_position
FROM Promotions;
```

Within each group defined by `employee_id`, the `previous_position` column holds the value from the previous row based on `promotion_date`. The first record in each group is `NULL` because there is no preceding row.

The above code generates the following output:

| employee_id | promotion_date | new_position | previous_position |
| ----------- | -------------- | ------------ | ----------------- |
| 1           | 2020-01-01     | Junior Dev   | NULL              |
| 1           | 2021-06-01     | Mid Dev      | Junior Dev        |
| 1           | 2024-03-01     | Senior Dev   | Mid Dev           |
| 2           | 2019-05-01     | Intern       | NULL              |
| 2           | 2022-11-01     | Analyst      | Intern            |
| 2           | 2024-11-20     | Data Analyst | Analyst           |
