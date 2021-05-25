---
Title: "SQL Operators: `NOT`"
Subjects:
  - "Language Fluency"
  - "Code Foundations"
  - "Data Science"
Tags:
  - "Database"
  - "Queries"
  - "Tables"
Catalog Content:
  - "https://www.codecademy.com/learn/paths/analyze-data-with-sql"
  - "https://www.codecademy.com/learn/paths/design-databases-with-postgresql"
---

## Definition
***
The `NOT` operator returns a record for if the condition/conditions are NOT TRUE

## Syntax
***
SELECT column1, column2, ...
FROM table_name
WHERE column NOT condition;

## Example 1
***
Use `NOT` as a `WHERE` condition to :
```codebyte/sql
SELECT *
FROM inventory
WHERE item_name NOT;
```
