---
Title: 'NULL SAFE EQUAL'
Description: 'Performs an equality comparison similar to the '=' operator, using the logic of an XNOR gate. Can accept NULL and ensures comparisons involving NULL do not result in NULL.'
Subjects: 
  - 'Computer Science'
Tags:
  - 'Operators' 
  - 'Database'
  - 'Queries'
  - 'Tables'
CatalogContent: 
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`NULL SAFE EQUAL`** operator performs an equality comparison like the '=' operator. However, it can also accept NULL values and never returns NULL, instead always returning TRUE or FALSE. It uses the logic of an XNOR gate to determine the value returned.

The 'NULL SAFE EQUAL' operator is useful for when XNOR-like logic is required for comparisons that can accept NULL values and always return True or False is needed.

> **Note:** The syntax can vary across different SQL flavors. In PostgreSQL, the operator is written as 'a IS NOT DISTINCT FROM b'. In MariaDB/MySQL, it is written as 'a <=> b'. Finally, in SQLite, it is written as 'a IS b'.

## Syntax

```pseudo
SELECT column1
FROM table
WHERE column1 <=> condition
```

## Example

```sql
SELECT NULL <=> 1, NULL <=> NULL, 3 <=> NULL, 2 <=> 2;
```

The above query returns the following results:

```shell
0, 1, 0, 1
```

