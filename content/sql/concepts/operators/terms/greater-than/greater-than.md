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

The **`GREATER THAN (>)`** operator selects rows with values strictly greater than a given condition. It can be applied to numeric values and dates.

This operator can be combined with the equality operator `=` to be inclusive of the condition.

## Syntax

```pseudo
SELECT *
FROM table
WHERE column > condition;
```

The `column` must exist in `table`, and must be either a numeric or date type column. The values in `column` will then be compared to the `condition`.

## Example 1

Return rows where `cups` is strictly greater than 3.

```sql
SELECT *
FROM coffee
WHERE cups > 3;
```

## Example 2

Return rows where `order_date` is greater than or equal to (after) `2020-01-01`.

```sql
SELECT *
FROM coffee
WHERE order_date >= '2020-01-01';
```
