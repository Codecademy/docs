---
Title: NOT
Description: "Query items that return NOT TRUE for some condition/conditions."
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
CatalogContent:
  - "learn-sql"
  - "paths/analyze-data-with-sql"
  - "paths/design-databases-with-postgresql"
---



Query items that return `NOT TRUE` for some condition/conditions.

## Syntax

```sql
SELECT column1, column2, ...
FROM table_name
WHERE column NOT condition;
```

## Example 1

To return items without `abc` in their sequence:

```sql
SELECT *
FROM inventory
WHERE item_name NOT LIKE '%abc%';
```

## Example 2

To return items not within the `('Cat', 'Dog', 'Fish')` list:

```sql
SELECT *
FROM inventory
WHERE item_name NOT IN ('Cat', 'Dog', 'Fish');
```

## Example 3

To return all items from the `inventory` table that do not exist within the `store` table by `item_id`:

```sql
SELECT *
FROM inventory
WHERE NOT EXISTS (
   SELECT *
   FROM store
   WHERE inventory.item_id = store.item_id);
```

## Example 4

To return items that do not have a price within `10` and `12`:

```sql
SELECT *
FROM inventory
WHERE price NOT BETWEEN 10 AND 12;
```

## Example 5

To return items that do not contain `NULL` values in their sequence:

```sql
SELECT *
FROM inventory
WHERE item_name IS NOT NULL;
```
