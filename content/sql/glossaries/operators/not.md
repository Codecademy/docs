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
Use `NOT` with the `IN` condition to return items not within the `('Cat', 'Dog', 'Fish')` list:
```codebyte/sql
SELECT *
FROM inventory
WHERE item_name NOT IN ('Cat', 'Dog', 'Fish');
```

## Example 3
***
Use `NOT` with the `EXISTS` condition to return all items from the `inventory` table that do not exist within the `store` table by `item_id`:
```codebyte/sql
SELECT *
FROM inventory
WHERE NOT EXISTS
  (SELECT *
    FROM store
    WHERE inventory.item_id = store.item_id);
```

## Example 4
***
Use `NOT` with the `BETWEEN` condition to return items that do not have a price within `10` and `12`:
```codebyte/sql
SELECT *
FROM inventory
WHERE price NOT BETWEEN 10 AND 12;
```

## Example 5
***
Use `NOT` with the `IS NULL` condition to return items that do not contain `NULL` values in their sequence:
```codebyte/sql
SELECT *
FROM inventory
WHERE item_name IS NOT NULL;
```
