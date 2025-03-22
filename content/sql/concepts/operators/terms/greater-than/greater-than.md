---
Title: 'GREATER THAN'
Description: 'Queries for items that are greater than a given value'
Subjects:
  - 'Data Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'PostgreSQL'
  - 'MySQL'
  - 'SQLite'
  - 'Tables'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`GREATER THAN (>)`** operator selects rows with values strictly greater than a given condition. It can be applied to numeric values and dates. This operator can be combined with the equality operator `=` as a `GREATER THAN OR EQUAL TO (>=)` to be inclusive of the condition.

## Syntax

```pseudo
SELECT *
FROM table
WHERE column > condition;
```

The `column` must exist in the `table` and be either a numeric or date-type column. The values in `column` will then be compared to the `condition`.

## Example 1

The table `Coffee` tracks the number of cups ordered. Return rows where the column `cups` has a value strictly greater than `(>)` 3.

```sql
CREATE TABLE Coffee (
    name varchar(255),
    drink varchar(255),
    order_date date,
    cups int
);

SELECT *
FROM Coffee
WHERE cups > 3;
```

## Example 2

Using the same table above, we make a comparison on the date column. Return rows where `order_date` is greater than or equal to `(>=)` `2020-01-01`.

```sql
SELECT *
FROM Coffee
WHERE order_date >= '2020-01-01';
```
