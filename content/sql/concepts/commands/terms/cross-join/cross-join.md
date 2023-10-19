---
Title: 'CROSS JOIN'
Description: 'Returns a table with all possible combinations of every row from the first table and every row from the second table.'
Subjects:
  - 'Data Science'
Tags:
  - 'Queries'
  - 'Join'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`CROSS JOIN`** command returns a table with all possible combinations of every row from the first table and every row from the second table.

This is also called a Cartesian join since it returns the Cartesian product of each row selected in the join.

This can produce extremely large data sets and can be modified to function more like an [`INNER JOIN`](https://www.codecademy.com/resources/docs/sql/commands/inner-join) by using a [`WHERE`](https://www.codecademy.com/resources/docs/sql/commands/where) clause.

## Syntax

```pseudo
SELECT column(s)
FROM first_table
CROSS JOIN second_table;
```

Select one or more columns from `first_table` and `second_table` to return a table with the Cartesian product of these rows.

## Example

This example selects `Styles` from the `Furniture` table and `Name` from the `Colors` table. It uses a `CROSS JOIN` to return a table with combinations of each furniture style and color.

```sql
SELECT Furniture.Style, Colors.Name
FROM Furniture
CROSS JOIN Colors;
```
