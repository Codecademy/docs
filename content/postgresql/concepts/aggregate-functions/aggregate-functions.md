---
Title: 'Aggregate Functions'
Description: 'Performs calculations across multiple rows of data, returning a single result.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'PostgreSQL'
  - 'Aggregate Functions'
CatalogContent:
  - 'learn-postgresql'
  - 'paths/analyze-data-with-sql'
---

In PostgreSQL, **aggregate functions** perform calculations across multiple rows of data and return a single result. These functions execute operations including counting, adding, finding the average, and searching the maximum or minimum value(s) using the `SELECT` statement and the `GROUP BY` clause.

PostgreSQL offers the following aggregate functions:

- `MAX()`: Computes the maximum among all the input values.
- `MIN()`: Computes the minimum among all the input values.
- `SUM()`: Computes the sum of all the input values.
- `COUNT()`: Computes the number of input rows.
- `AVG()`: Computes the average (or arithmetic mean) of all the input values.

### Example

Here is a `sales` table that is to be used as an example to understand how the above aggregate functions work:

|  Transaction_ID  |  Customer  |  Product    |  Quantity  |  Cost  |
| --- | ---- | ----- | ----- | ---- |
| 041 | Varrick | Iphone Xr | 2 | 88000 |
| 021 | Tolf | Samsung S8 | 2 | 75000 |
| 033 | Kuvira | Airpods | 3 | 4000 |
| 001 | Kalu | Iphone X | 1 | 44000 |
| 456 | Isujah | HP Laptop | 1 | 65000 |
| 026 | Zion | MacBook Air | 3 | 250000 |

Using this table, all the aggregate functions mentioned above are explained below.

### MAX()
```sql
SELECT MAX(Quantity * Cost) AS Max_Spent FROM sales;
```
This query calculates the maximum amount spent on a single commodity in the `sales` table by multiplying the `Quantity` column with the `Cost` column and then determines the maximum among all the calculated values.

### MIN()
```sql
SELECT MIN(Quantity * Cost) AS Min_Spent FROM sales;
```
The minimum amount spent on a single product in the `sales` table is calculated by this query, which multiplies the `Quantity` column with the `Cost` column and then finds the minimum among all the calculated values.

### SUM()
```sql
SELECT SUM(Quantity * Cost) AS Total_Spent FROM sales;
```
This query calculates the total amount spent on all the sales in the `sales` table by multiplying the `Quantity` column with the `Cost` column for each sale and then summing all the calculated values.

### COUNT()
```sql
SELECT COUNT(*) FROM sales;
```
This query returns the total number of records in the `sales` table.

### AVG()
```sql
SELECT AVG(Quantity * Cost) AS Average_Spent FROM sales;
```
This query finds the average amount spent per sale in the `sales` table by calculating the product of the `Quantity` and `Cost` columns for each sale and then finding the average of all the calculated values.

### GROUP BY
The `GROUP BY` clause in PostgreSQL is used to arrange identical data into groups. This clause is often combined with aggregate functions to perform operations on each group of data. Essentially, `GROUP BY` summarizes data by grouping rows that have the same values in the specified columns.

Let's use the `sales` table to find out how much each customer spent in total.

```sql
SELECT Customer, SUM(Quantity * Cost) AS Total_Spent
FROM sales
GROUP BY Customer;
```
The `GROUP BY` clause groups the set of results, including the total amount spent by each customer, by the `Customer` column.
- `SELECT Customer` specifies the column name to retrieve from the table.
- `SUM(Quantity * cost) AS Total_Spent` multiplies the `Quantity` and `cost` columns for each sale to calculate the total amount spent by the customer, and names the result column `Total_Spent`.
- `FROM sales` specifies the table from which the query retrieves the data.
- `GROUP BY Customer` clause groups the results by the `Customer` column.

This is the out put of the above query:

| Customer | Total_Spent |
| -------- | ----------- |
| Varrick | 176000 |
| Tolf | 150 |
| Kuvira | 8000 |
| Kalu | 88000 |
| Isujah | 130000 |
| Zion | 750000 |
