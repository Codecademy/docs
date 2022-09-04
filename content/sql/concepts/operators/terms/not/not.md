---
Title: NOT
Description: 'Queries for items in an expression that return NOT TRUE for some condition(s).'
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

The **`NOT`** operator is used to query for items in a table that return `NOT TRUE` for some condition(s).

## Syntax

```pseudo
SELECT column1, column2, ...
FROM table_name
WHERE column NOT condition;
```

The `condition` will usually involve comparison operators such as the following:

- `=`: Equal to
- `>`: Greater than
- `<`: Less than
- `>=`: Greater than or equal to
- `<=`: Less than or equal to
- `!=`: Not equal

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
