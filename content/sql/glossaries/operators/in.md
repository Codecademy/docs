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
SELECT production_city

FROM movies

WHERE production_city IN ('Los Angeles', 'Atlanta', 'New York');

The given query will select all records where `production_city` is equal to 'Los Angeles', 'Atlanta', or 'New York'.

## Example 1
To query all fields for records where `item_name` is equal to 'plunger', 'soap', or 'wipes' in the `inventory` table:
```sql
SELECT *
FROM inventory
WHERE item_name IN ('plunger', 'soap', 'wipes');
```
