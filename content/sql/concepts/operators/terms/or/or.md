---
Title: OR
Description: 'Test if any condition in a given expression evaluates to TRUE.'
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

The **`OR`** operator tests if any condition in a given expression evaluates to `TRUE`.

## Syntax

```pseudo
SELECT column_name
FROM table_name
WHERE condition1
  OR condition2
  ...
  OR conditionN;
```

If any of the `condition_`s evaluate to `TRUE`, the row(s) can be returned. However, if all of the `condition_`s were to evaluate to `NOT TRUE`, then the row(s) would not be returned from the query.

## Example 1

To query for records where `item_name` is equal to `'brush'` or `'gloves'` in the `inventory` table:

```sql
SELECT *
FROM inventory
WHERE item_name = 'brush' OR 'gloves';
```

## Example 2

To query for records where `item_name` is equal to `'plunger'` or `'soap'` or `'wipes'` in the `inventory` table:

```sql
SELECT *
FROM inventory
WHERE item_name= 'plunger' OR 'soap' OR 'wipes';
```
