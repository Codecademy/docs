---
Title: 'LEAD()'
Description: 'Allows access to rows after the target value at an offset.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'PostgreSQL'
  - 'MySQL'
  - 'SQLite'
CatalogContent:
  - 'paths/analyze-data-with-sql'
---

The **`LEAD()`** window function takes a column and an integer offset as arguments and returns the value of the cell in that column that is the specified number of rows after the current row. A third argument can be added to fill cells that do not have a corresponding row.

## Syntax

```pseudo
LEAD(column1_name, offset) OVER(
  ORDER BY column2_name
)
```

- The [`ORDER BY`](https://www.codecademy.com/resources/docs/sql/commands/order-by) clause is required.

- There is also a third, optional argument that sets the value of cells where the corresponding row does not exist. The third argument will be `NULL` by default.

- When using `LEAD()` with partitions, any cells with a corresponding row in another partition will be filled with the default value. Think of it as treating each partition as a separate table.

## Example

Suppose there's a `yearly_sales` table that looks like this:

| month | sales |
| ----- | ----- |
| 1     | 1000  |
| 2     | 500   |
| 3     | 750   |
| 4     | 800   |
| 5     | 500   |
| 6     | 400   |
| 7     | 300   |
| 8     | 500   |
| 9     | 700   |
| 10    | 800   |
| 11    | 1000  |
| 12    | 1250  |

Running the following query shows the next month's sales for every month, with the last month having `NA` as its value.

```sql
SELECT month,
  sales,
  LEAD(sales, 1, "NA") OVER(
    ORDER BY month
  ) AS next_month_sales
FROM yearly_sales;
```

This will be the output:

| month | sales | next_month_sales |
| ----- | ----- | ---------------- |
| 1     | 1000  | 500              |
| 2     | 500   | 750              |
| 3     | 750   | 800              |
| 4     | 800   | 500              |
| 5     | 500   | 400              |
| 6     | 400   | 300              |
| 7     | 300   | 500              |
| 8     | 500   | 700              |
| 9     | 700   | 800              |
| 10    | 800   | 1000             |
| 11    | 1000  | 1250             |
| 12    | 1250  | NA               |
