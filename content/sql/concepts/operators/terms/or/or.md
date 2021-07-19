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

Filters the result set to only include rows where either condition is true.

## Syntax

```sql
SELECT column_name
FROM table_name
WHERE column_name = value_1
   OR column_name = value_2;
```

## Example 1

To query for records where item_name is equal to `'brush'` or `'gloves'` in the `inventory` table:

```sql
SELECT *
FROM inventory
WHERE item_name = 'brush' OR 'gloves';
```

## Example 2

To query for records where item_name is equal to `'plunger'` or `'soap'` or `'wipes'` in the `inventory` table:

```sql
SELECT *
FROM inventory
WHERE item_name= 'plunger' OR 'soap' OR 'wipes';
```
