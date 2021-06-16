---
Title: IN
Subjects:
  - "Data Science"
  - "Computer Science"
Tags:
  - "Operators"
  - "Database"
  - "Queries"
  - "SQLite"
  - "MySQL"
  - "PostgreSQL"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-sql"
  - "https://www.codecademy.com/learn/paths/analyze-data-with-sql"
  - "https://www.codecademy.com/learn/paths/design-databases-with-postgresql"
---

## Definition

Allows the user to specify multiple values in `WHERE` clause.

## Syntax

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name IN (value1, value2, ...);
```

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name IN (SELECT STATEMENT);
```

## Example 1

```sql
SELECT production_city
FROM movies
WHERE production_city IN ('Los Angeles', 'Atlanta', 'New York');
```

The given query will select all records where `production_city` is equal to `Los Angeles`, `Atlanta`, or `New York`.

## Example 2

To query all fields for records where `item_name` is equal to `'plunger'`, `'soap'`, or `'wipes'` in the `inventory` table:

```sql
SELECT *
FROM inventory
WHERE item_name IN ('plunger', 'soap', 'wipes');
```

# Example 3

The following SQL statement selects all customers that are from the same countries as the suppliers:

```sql
SELECT * FROM customers
WHERE country IN (
   SELECT country 
   FROM suppliers);
```
