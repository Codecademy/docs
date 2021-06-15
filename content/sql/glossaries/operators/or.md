---
Title: OR
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
Allows the user to query for records that evaluate to `TRUE` for multiple boolean expressions.

## Syntax
SELECT *

FROM movies

WHERE name= 'Matrix' OR 'Jurassic Park';

The given query will return any instances of name being equal to `Matrix` or `Jurassic Park` in the `movies` table.

## Example 1
To query for records where item_name is equal to `plunger` or `soap` or `wipes` in the inventory table:
```sql
SELECT *
FROM inventory
WHERE item_name= 'plunger' OR 'soap' OR 'wipes';
```
