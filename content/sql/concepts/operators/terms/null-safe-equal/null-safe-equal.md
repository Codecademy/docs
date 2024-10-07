---
Title: 'NULL-SAFE EQUAL'
Description: 'Performs an equality comparison similar to the = operator, using the logic of an XNOR gate.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Operators'
  - 'Database'
  - 'Queries'
  - 'Tables'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

In SQL, the **`NULL-SAFE EQUAL`** operator performs an equality comparison like the [`=`](https://www.codecademy.com/resources/docs/sql/operators/equals-to) operator. However, it can also accept NULL values and never returns NULL, instead always returning `TRUE` or `FALSE`. It uses the logic of an XNOR gate to determine the value returned. It is written as `<=>`.

This operator is useful in cases where XNOR-like logic is required for comparisons that can accept NULL values and always return `TRUE` or `FALSE`.

## Syntax

```pseudo
SELECT column1
FROM table
WHERE column1 <=> value;
```

> Note: The syntax can vary across different SQL flavors. In [PostgreSQL](https://www.codecademy.com/resources/docs/postgresql), the operator is written as `IS NOT DISTINCT FROM`. In MariaDB/[MySQL](https://www.codecademy.com/resources/docs/mysql), it is written as `<=>`. Also, in SQLite, it is written as `IS`.

## Example

The following example demonstrates the usage of the `NULL-SAFE EQUAL` operator:

```sql
SELECT NULL <=> 1, NULL <=> NULL, 3 <=> NULL, 2 <=> 2;
```

The above query returns the following result:

```shell
0, 1, 0, 1
```
