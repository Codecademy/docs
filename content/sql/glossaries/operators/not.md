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
Allows the user to query items that return `NOT TRUE` for some condition/conditions.

## Syntax
***
SELECT column1, column2, ...
FROM table_name
WHERE column NOT condition;

## Example 1
***
Use `NOT` with the `LIKE` condition to return items without `abc` in their sequence:
```codebyte/sql
SELECT *
FROM inventory
WHERE item_name NOT LIKE '%abc%';
```

## Example 2
***
Use `NOT` with the `IN` condition to return items without `abc` in their sequence:
```codebyte/sql
SELECT *
FROM inventory
WHERE item_name NOT ;
```

## Example 3
***
Use `NOT` with the `LIKE` condition to return items without `abc` in their sequence:
```codebyte/sql
SELECT *
FROM inventory
WHERE item_name NOT ;
```

## Example 4
***
Use `NOT` with the `LIKE` condition to return items without `abc` in their sequence:
```codebyte/sql
SELECT *
FROM inventory
WHERE item_name IS NOT NULL;
```
