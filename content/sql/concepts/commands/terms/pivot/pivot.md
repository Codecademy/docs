---
Title: 'PIVOT'
Description: 'Transforms rows of a table into columns.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'Aggregate Functions'
  - 'SQL Server'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

In SQL, the **`PIVOT`** command transforms rows of a table into columns.

## Syntax

```pseudo
SELECT column1, column2, ...
FROM table
PIVOT
  (
    aggregate_function(column_to_be_aggregated)
    FOR pivot_column IN (pivot_column_values)
  ) AS alias_name;
```

- `alias_name`: The temporary name for the newly created pivot table.

## Example

The below example shows a table `transactions` containing three columns `customer_name`, `book_genre`, and `price`. Each row represents a transaction at a bookstore. The query below creates a temporary pivot table named `pivot_table` with columns `customer_name`, `scifi`, and `romance`. In this table, each row represents the aggregate price that the customers paid for books in each of these genres:

```sql
SELECT
  customer_name,
  scifi,
  romance
FROM
  transactions PIVOT (
    SUM(price) FOR book_genre IN (scifi, romance)
  ) AS pivot_table;
```
