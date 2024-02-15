---
Title: IN
Description: 'Allows the user to specify multiple values in the WHERE clause.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Operators'
  - 'Database'
  - 'Queries'
  - 'SQLite'
  - 'MySQL'
  - 'PostgreSQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
  - 'paths/design-databases-with-postgresql'
---

The **`IN`** operator allows the user to specify multiple values in the `WHERE` clause.

## Syntax

The `IN` operator is similar to multiple `OR` conditions:

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name IN (value1, value2, ...);
```

You can also use another returned result within the parenthesis:

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name IN (
  SELECT STATEMENT);
```

## Example 1

The given query will select all records where `production_city` is equal to `'Los Angeles'` or `'New York'`.

```sql
SELECT production_city
FROM movies
WHERE production_city IN ('Los Angeles', 'New York');
```

## Example 2

To query all fields for records where `item_name` is equal to `'plunger'`, `'soap'`, or `'wipes'` in the `inventory` table:

```sql
SELECT *
FROM inventory
WHERE item_name IN ('plunger', 'soap', 'wipes');
```

## Example 3

The following SQL statement selects all customers that are from the same countries as the suppliers:

```sql
SELECT *
FROM customers
WHERE country IN (
  SELECT country
  FROM suppliers
);
```
