---
Title: 'PIVOT'
Description: 'Transforms rows of a table into columns'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'Aggregate Functions'
  - 'SQL Server'
  - 'Tables'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`PIVOT`** command transforms rows of a table into columns.

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

- `alias_name`: is the temporary name for the newly created PIVOT table.

## Example

The below example show a table `transactions` that has three columns: `customer_name`, `book_genre`, `price`. Each row represents a transaction at a bookstore. The query below creates a temporary pivot table `pivot_table` with columns `customer_name`, `scifi`, and `romance` where each row now represents the aggregate price that the customers paid for books in each of these genres.

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
