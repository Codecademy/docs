---
Title: 'Window Functions'
Description: 'Perform calculations across a set of table rows related to the current row, without collapsing the result into a single output row.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'MySQL'
  - 'PostgreSQL'
  - 'SQLite'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

**Window functions** in SQL allow users to perform calculations across a set of table rows that are related to the current row. Unlike traditional [aggregate functions](https://www.codecademy.com/resources/docs/sql/aggregate-functions) (like [`SUM()`](https://www.codecademy.com/resources/docs/sql/aggregate-functions/sum), [`AVG()`](https://www.codecademy.com/resources/docs/sql/aggregate-functions/avg), [`COUNT()`](https://www.codecademy.com/resources/docs/sql/aggregate-functions/count)), which return only a single value for a group of rows, window functions return a value for each row, based on a defined window of rows.

## SQL Window Functions Syntax

The general syntax for window functions in SQL is:

```pseudo
function_name(expression) OVER (
  [PARTITION BY column]
  [ORDER BY column]
  [ROWS/RANGE frame_specification]
)
```

In the syntax:

- `function_name(expression)`: The function to be applied, like `SUM()` or `ROW_NUMBER()`.
- `OVER()`: Defines the window of rows over which the function operates.
- `PARTITION BY`: Divides rows into groups (like `GROUP BY`).
- `ORDER BY`: Orders rows within each partition.
- `ROWS/RANGE`: Defines a frame (a subset of the partition).

## Types of SQL Window Functions

There are different types of window functions in SQL:

- Ranking window functions
- Aggregate window functions
- Value window functions

### Ranking Window Functions

- `ROW_NUMBER()`: Assigns a unique sequential number.
- `RANK()`: Assigns rank with gaps if there are ties.
- `DENSE_RANK()`: Similar to `RANK()`, but without gaps.
- `NTILE(n)`: Divides rows into `n` buckets.

Here is an example that ranks sales employees by revenue within each region:

```sql
SELECT
  employee,
  region,
  revenue,
  RANK() OVER (PARTITION BY region ORDER BY revenue DESC) AS region_rank
FROM sales;
```

### Aggregate Window Functions

- `SUM()`: Calculates the total over the defined window.
- `AVG()`: Returns the average value within the window.
- `COUNT()`: Counts rows in the window frame.
- `MIN()`: Finds the smallest value in the window.
- `MAX()`: Finds the largest value in the window.

Here is an example that calculates the running total of sales by date:

```sql
SELECT
  order_date,
  SUM(amount) OVER (ORDER BY order_date) AS running_total
FROM orders;
```

### Value Window Functions

- `LAG()`: Looks at the previous row.
- `LEAD()`: Looks at the next row.
- `FIRST_VALUE()` / `LAST_VALUE()`: Finds the first/last value in a frame.

Here is an example that compares each month’s sales to the previous month:

```sql
SELECT
  month,
  sales,
  LAG(sales) OVER (ORDER BY month) AS prev_month_sales,
  sales - LAG(sales) OVER (ORDER BY month) AS growth
FROM monthly_sales;
```

## Example 1: Calculating Running Total Using SQL Window Functions

Suppose there's a table named `monthly_sales`:

| quarter | month | sales |
| ------- | ----- | ----- |
| 1       | 1     | 1000  |
| 1       | 2     | 500   |
| 1       | 3     | 750   |
| 2       | 4     | 800   |
| 2       | 5     | 500   |
| 2       | 6     | 400   |
| 3       | 7     | 300   |
| 3       | 8     | 500   |
| 3       | 9     | 700   |
| 4       | 10    | 800   |
| 4       | 11    | 1000  |
| 4       | 12    | 1250  |

Here is a query that calculates the running total of sales by each month:

```sql
SELECT quarter,
  month,
  sales,
  SUM(sales) OVER (
    ORDER BY month
  ) AS 'running_total'
FROM monthly_sales;
```

The output will be:

| quarter | month | sales | running_total |
| ------- | ----- | ----- | ------------- |
| 1       | 1     | 1000  | 1000          |
| 1       | 2     | 500   | 1500          |
| 1       | 3     | 750   | 2250          |
| 2       | 4     | 800   | 3050          |
| 2       | 5     | 500   | 3550          |
| 2       | 6     | 400   | 3950          |
| 3       | 7     | 300   | 4250          |
| 3       | 8     | 500   | 4750          |
| 3       | 9     | 700   | 5450          |
| 4       | 10    | 800   | 6250          |
| 4       | 11    | 1000  | 7250          |
| 4       | 12    | 1250  | 8500          |

## Example 2: Partitioning SQL Window Functions

Window functions in SQL can be partitioned to create bunches of rows that apply the function to each bunch. This is done using the `PARTITION BY` keyword within the `OVER` clause.

To find the average sales per quarter for the `monthly_sales` table, this query can be used:

```sql
SELECT quarter,
  month,
  sales,
  AVG(sales) OVER (
    PARTITION BY quarter
  ) AS 'quarterly_average'
FROM monthly_sales;
```

Here is the output:

| quarter | month | sales | quarterly_average |
| ------- | ----- | ----- | ----------------- |
| 1       | 1     | 1000  | 750               |
| 1       | 2     | 500   | 750               |
| 1       | 3     | 750   | 750               |
| 2       | 4     | 800   | 566.66            |
| 2       | 5     | 500   | 566.66            |
| 2       | 6     | 400   | 566.66            |
| 3       | 7     | 300   | 500               |
| 3       | 8     | 500   | 500               |
| 3       | 9     | 700   | 500               |
| 4       | 10    | 800   | 1016.66           |
| 4       | 11    | 1000  | 1016.66           |
| 4       | 12    | 1250  | 1016.66           |

## Frequently Asked Questions

### 1. What are window functions in SQL?

Window functions in SQL include ranking functions (`ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`, `NTILE()`), aggregate functions (`SUM()`, `AVG()`, `COUNT()`, `MIN()`, `MAX()`), and value functions (`LAG()`, `LEAD()`, `FIRST_VALUE()`, `LAST_VALUE()`).

### 2. What is a SQL window function used for?

Window functions in SQL are used for advanced analytics, such as calculating running totals, moving averages, rankings, comparisons to previous or next rows, and percentiles — all while keeping access to the individual row data.

### 3. Are window functions faster than subqueries in SQL?

In many cases, yes. Window functions in SQL are often more efficient than correlated subqueries because they are designed for set-based operations and optimized by the SQL engine. However, performance depends on the query complexity, indexing, and database implementation.
