---
Title: 'Aggregate Functions'
Description: 'Performs calculations on a data set and returns a single result.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'PostgreSQL'
  - 'Aggregate Functions'
  - 'Functions'
  - 'Data'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

In PostgreSQL, **aggregate functions** perform calculations on a data set and return a single result. These functions use the `SELECT` statement and the `GROUP BY` clause to execute operations such as counting, adding, finding the average, and searching the maximum or minimum value(s).

The `GROUP BY` clause is used to arrange identical data into groups. In other words, this clause summarizes data by grouping rows that have the same values in the specified columns.

PostgreSQL offers the following aggregate functions:

- `MAX()`: Computes the maximum among all the input values.
- `MIN()`: Computes the minimum among all the input values.
- `SUM()`: Computes the sum of all the input values.
- `COUNT()`: Computes the number of input rows.
- `AVG()`: Computes the average of all the input values.

## Syntax

Here is a `sales` table to be used as an example to understand how the above aggregate functions work:

| Transaction_ID | Customer | Product     | Quantity | Cost   |
| -------------- | -------- | ----------- | -------- | ------ |
| 041            | Varrick  | Iphone Xr   | 2        | 88000  |
| 021            | Tolf     | Samsung S8  | 2        | 75000  |
| 033            | Kuvira   | Airpods     | 3        | 4000   |
| 001            | Kalu     | Iphone X    | 1        | 44000  |
| 456            | Isujah   | HP Laptop   | 1        | 65000  |
| 026            | Zion     | MacBook Air | 3        | 250000 |

Using this table, all the aggregate functions mentioned above are explained below.

### MAX()

```sql
SELECT MAX(Quantity * Cost) AS Max_Spent FROM sales;
```

This query calculates the maximum amount spent on a single commodity in the `sales` table by multiplying the `Quantity` column with the `Cost` column. Then, it determines the maximum among all the calculated values.

### MIN()

```sql
SELECT MIN(Quantity * Cost) AS Min_Spent FROM sales;
```

This query calculates the minimum amount spent on a single commodity in the `sales` table by multiplying the `Quantity` column with the `Cost` column. Then, it determines the minimum among all the calculated values.

### SUM()

```sql
SELECT SUM(Quantity * Cost) AS Total_Spent FROM sales;
```

This query calculates the total amount spent on all the sales in the `sales` table by multiplying the `Quantity` column with the `Cost` column for each sale. Then, it sums all the calculated values.

### COUNT()

```sql
SELECT COUNT(*) FROM sales;
```

This query returns the total number of records in the `sales` table.

### AVG()

```sql
SELECT AVG(Quantity * Cost) AS Average_Spent FROM sales;
```

This query finds the average amount spent per sale in the `sales` table by calculating the product of the `Quantity` and `Cost` columns for each sale. Then, it finds the average of all the calculated values.

## Example

Here is an example that demonstrates the usage of aggregate functions:

```sql
SELECT Customer, SUM(Quantity * Cost) AS Total_Spent
FROM sales
GROUP BY Customer;
```

This query calculates the total amount spent by each customer and groups the results by the `Customer` column.

This is the output of the above query:

| Customer | Total_Spent |
| -------- | ----------- |
| Varrick  | 176000      |
| Tolf     | 150         |
| Kuvira   | 8000        |
| Kalu     | 88000       |
| Isujah   | 130000      |
| Zion     | 750000      |
