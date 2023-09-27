---
Title: 'ROW_NUMBER()'
Description: 'Assigns a sequential integer to each row of a result set.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'PostgreSQL'
  - 'MySQL'
  - 'SQLite'
  - 'Database'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`ROW_NUMBER()`** window function assigns a sequential integer (1,2,3...) to each row of a result set, starting with 1 for the first row of each partition.

## Syntax

```pseudo
ROW_NUMBER() OVER (
  [PARTITION BY partition_expression,...]
  ORDER BY sort_expression [ASC | DESC], ...
)
```

- `PARTITION BY` is an optional parameter used to create partitions (groups of rows). If it is not used, `ROW_NUMBER()` will treat the result set as one partition. It is important to note that `ROW_NUMBER()` is applied to each partition separately; so the first row in a partition is assigned '1', the second row is assigned '2', and so on.
- `ORDER BY` defines the order within each partition. It is a mandatory parameter, because `ROW_NUMBER()` is order sensitive.
- `ROW_NUMBER()` can also be used for **pagination**, dividing the data set into discrete increments. For example, if a result set would have 100 rows, adding a **`WHERE`** clause would allow the user to selectively view only results 11-20.

## Example

This function is useful when creating tables. The following example is using a dataset, `customers`, with entries for `first_name`, `last_name`, and `city` (where they live).

| first_name | last_name | city       |
| ---------- | --------- | ---------- |
| Sarah      | Myer      | Houston    |
| Susan      | Davidson  | Dallas     |
| Mary       | Greene    | Raleigh    |
| Joseph     | Chang     | Raleigh    |
| Eric       | Gustav    | Louisville |
| Chris      | Blake     | Manchester |
| Tyler      | Hunter    | Houston    |
| Matthew    | Rivera    | Louisville |
| Samantha   | Daniels   | Dallas     |
| Emily      | Pugh      | Manchester |

Using the following statement, the above information is pulled from the dataset `customers`. It is ordered alphabetically by their first name, then each row is assigned an integer starting with '1'.

```sql
SELECT
  ROW_NUMBER() OVER (
  ORDER BY first_name
  ) row_num,
  first_name,
  last_name,
  city
FROM
  customers;
```

This creates the following output. Notice that the above statement does not have a `PARTITION BY` parameter. This essentially creates just one partition, the result set.

| row_num | first_name | last_name | city       |
| ------- | ---------- | --------- | ---------- |
| 1       | Chris      | Blake     | Manchester |
| 2       | Emily      | Pugh      | Manchester |
| 3       | Eric       | Gustav    | Louisville |
| 4       | Joseph     | Chang     | Raleigh    |
| 5       | Mary       | Greene    | Raleigh    |
| 6       | Matthew    | Rivera    | Louisville |
| 7       | Samantha   | Daniels   | Dallas     |
| 8       | Sarah      | Myer      | Houston    |
| 9       | Susan      | Davidson  | Dallas     |
| 10      | Tyler      | Hunter    | Houston    |

For pagination, the function would be changed like so to only show the first 5 entries:

```sql
WITH customers AS (
  SELECT
    ROW_NUMBER() OVER (
      ORDER BY
        first_name
      ) row_num,
      first_name,
      last_name,
      city
  FROM
    customers
) SELECT
  first_name,
  last_name,
  city
FROM
  customers
WHERE
  row_num > 0 AND
  row_num <= 5;
```

Which would give the following output:

| row_num | first_name | last_name | city       |
| ------- | ---------- | --------- | ---------- |
| 1       | Chris      | Blake     | Manchester |
| 2       | Emily      | Pugh      | Manchester |
| 3       | Eric       | Gustav    | Louisville |
| 4       | Joseph     | Chang     | Raleigh    |
| 5       | Mary       | Greene    | Raleigh    |

The `ROW_NUMBER()` function above could instead be modified like so to include partitions:

```sql
SELECT
  ROW_NUMBER() OVER (
   PARTITION BY city
   ORDER BY first_name
  ) row_num,
    first_name,
    last_name,
    city
FROM
  customers
ORDER BY
  city;
```

| row_num | first_name | last_name | city       |
| ------- | ---------- | --------- | ---------- |
| 1       | Samantha   | Daniels   | Dallas     |
| 2       | Susan      | Davidson  | Dallas     |
| 1       | Sarah      | Myer      | Houston    |
| 2       | Tyler      | Hunter    | Houston    |
| 1       | Eric       | Gustav    | Louisville |
| 2       | Matthew    | Rivera    | Louisville |
| 1       | Chris      | Blake     | Manchester |
| 2       | Emily      | Pugh      | Manchester |
| 1       | Joseph     | Chang     | Raleigh    |
| 2       | Mary       | Greene    | Raleigh    |

Above, the result set is partitioned by `city`. Each partition then has the `ROW_NUMBER()` function applied to it. Each `city` therefore has its own first row, assigned '1'; second row, assigned '2'; and so on.
