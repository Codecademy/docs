---
Title: 'Aggregate Expressions'
Description: PostgreSQL aggregate expressions perform calculations across multiple rows of data, returning a single result. These expressions are particularly useful for summarizing and analyzing large datasets   
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'PostgreSQL'
  - `Aggregate Functions`
CatalogContent:
  - 'learn-postgresql'
  - 'paths/analyze-data-with-sql'
---

In PostgreSQL, aggregate functions calculate values across sets of data and return a single result. These functions allow you to perform tasks like count, sum, average, and finding the maximum or minimum value(s) within set of rows when used with the `SELECT` statement and `GROUP BY` clause. These functions produce a single result for an entire group of tables and create a summarized set of results based on a group of rows.

PostgreSQL offers the following aggregate functions:

- `MAX()` - Computes the maximum of input values of selected. 
- `MIN()` - Computes the minimum of input values of selected.
- `SUM()` - Computes the sum of input values. 
- `COUNT()` - Computes the number of input rows.
- `AVG()` - Computes the average (arithmetic mean) of all the input values.

## Example

Consider the following `sales` table as an example to demonstrate how these aggregate functions work.

| `Transaction_ID` | `Customer` | `Product` | `Quantity` | `Cost` |
| --- | ---- | ----- | ----- | ---- |
| 041 | Varrick | Iphone Xr | 2 | 88000 |
| 021 | Tolf | Samsung S8 | 2 | 75000 |
| 033 | Kuvira | Airpods | 3 | 4000 |
| 001 | Kalu | Iphone X | 1 | 44000 |
| 456 | Isujah | HP Laptop | 1 | 65000 |
| 026 | Zion | MacBook Air | 3 | 250000 |

Let's use this table to explain different PostgreSQL aggregate functions.

## Max

``` sql
SELECT MAX(Quantity * Cost) AS Max_Spent FROM sales;
```
This query calculates the maximum amount spent on a single comodity in the `sales` table by multiplying the `Quantity` column with the `cost` column and then determines the maximum value.

## Min

``` sql
SELECT MIN(Quantity * Cost) AS Min_Spent FROM sales;
```
The minimum amount spent on a single product in the `sales` table is calculated by this query, which multiplies the `Quantity` column with the `Cost` column and then finds the minimum value.

## Sum

``` sql
SELECT SUM(Quantity * cost) AS Total_Spent FROM sales;
```

Calculating the total amount spent on all sales in the sales table involves multiplying the `Quantity` column with the `cost` column for each sale and then summing these values using this query, which labels the result as `Total_Spent`.

## Count

``` sql
SELECT COUNT(*) FROM sales;
```
This query returns the total count of records in the `sales` table.

## Avg

``` sql
SELECT AVG(Quantity * Cost) AS Average_Spent FROM sales;
```
This query finds the average amount spent per sale in the sales table by calculating the product of the `Quantity` and `cost` columns for each sale and then averaging these values.

## GROUP BY

The `GROUP BY` clause is used to arrange data into groups, this clause is often combined with aggregate functions to perform operations on each group of data. Essentially, `GROUP BY`` summarizes the data by grouping rows that have the same values in specified columns, in other to gain insights and make decisions.

Let's use the `sales` table to find out how much each customer spent in total.

``` sql
SELECT Customer, SUM(Quantity * cost) AS Total_Spent
FROM sales
GROUP BY Customer;
```
Breaking down the query:
- `SELECT Customer` specifies the column name to retrieve from the table.
- `SUM(Quantity * cost) AS Total_Spent` multiplies the `Quantity` and `cost` columns for each sale to calculate the total amount spent by the customer, and names the result column `Total_Spent``.
- `FROM sales` specifies the table from which the query retrieves the data.

PostgreSQL offers the following aggregate functions:

- MAX() - Computes the maximum of input values. 
- MIN() - Computes the minimum of input values.
- SUM() - Computes the sum of input values. 
- COUNT() - Computes the number of input rows.
- AVG() - Computes the average (arithmetic mean) of all the input values.

## Example

Consider the following `sales` tables as an example to demonstrate how these aggregate functions work.

| `Transaction_ID` | `Customer` | `Product` | `Quantity` | `Cost` |
| --- | ---- | ----- | ----- | ---- |
| 041 | Varrick | Iphone Xr | 2 | 88000 |
| 021 | Tolf | Samsung S8 | 2 | 75000 |
| 033 | Kuvira | Airpods | 3 | 4000 |
| 001 | Kalu | Iphone X | 1 | 44000 |
| 456 | Isujah | HP Laptop | 1 | 65000 |
| 026 | Zion | MacBook Air | 3 | 250000 |

Let's use this table to explain different PostgreSQL aggregate functions.

## Max

``` sql
SELECT MAX(Quantity * Cost) AS Max_Spent FROM sales;
```
This query calculates the maximum amount spent on a single comodity in the `sales` table by multiplying the `Quantity` column with the `cost` column and then determines the maximum value.

## Min

``` sql
SELECT MIN(Quantity * Cost) AS Min_Spent FROM sales;
```
The minimum amount spent on a single product in the `sales` table is calculated by this query, which multiplies the `Quantity` column with the `Cost` column and then finds the minimum value.

## Sum

``` sql
SELECT SUM(Quantity * cost) AS Total_Spent FROM sales;
```

Calculating the total amount spent on all sales in the sales table involves multiplying the `Quantity` column with the `cost` column for each sale and then summing these values using this query, which labels the result as `Total_Spent`.

## Count

``` sql
SELECT COUNT(*) FROM consumer;
```
This query returns the total count of records in the `sales` table.

## Avg

``` sql
SELECT AVG(Quantity * Cost) AS Average_Spent FROM sales;
```
This query finds the average amount spent per sale in the sales table by calculating the product of the `Quantity` and `cost` columns for each sale and then averaging these values.

## GROUP BY

The `GROUP BY` clause in Postgresql is used to arrange identical data into groups. This clause is often combined with aggregate functions to perform operations on each group of data. Essentially, `GROUP BY` allows you to summarize data by grouping rows that have the same values in specified columns.

Let's use the `sales` table to find out how much each customer spent in total.

``` pseudo
SELECT Customer, SUM(Quantity * cost) AS Total_Spent
FROM sales
GROUP BY Customer;
```
Breaking down the query:
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
