---
Title: UPDATE
Description: 'Updates data row entries.'
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

The **`UPDATE`** operator changes data entries  .

## Syntax

```pseudo
UPDATE table_name
SET column_name = ... ;
WHERE item_name = ...
```

Update an entry if the where condition is matching. If there are no where condition, all rows are changed.

## Example 1

To update the price where `item_name` is equal to `'brush'` in the `inventory` table with 20.00:

```sql
UPDATE inventory
SET price = 20.00 
WHERE item_name = 'brush' ;
```
