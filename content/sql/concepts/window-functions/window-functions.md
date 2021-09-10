---
Title: 'Window Functions'
Description: 'A window function performs a calculation over the inputted column and then returns the calculated value for each row. Window functions can be identified by their use of the OVER clause. In the simplest syntactic example, a function can be preformed over a given column as shown below: sql SELECT functionname(column1name) OVER() FROM tablename;  An ORDER BY clause can be used to determine in which direction the function should be calculated.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'SQLite'
  - 'MySQL'
  - 'PostgreSQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

A window function performs a calculation over the inputted column and then returns the calculated value for each row. Window functions can be identified by their use of the `OVER` clause.

In the simplest syntactic example, a function can be preformed over a given column as shown below:

```sql
SELECT function_name(column_1_name) OVER()
FROM table_name;
```

An `ORDER BY` clause can be used to determine in which direction the function should be calculated.

```sql
SELECT function_name(column_1_name) OVER(
    ORDER BY column_2_name
  )
FROM table_name;
```

## Example

A common use case for window functions is to create a running total.

For example, suppose there's a `monthly_sales` table with the following values:

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

To find the cumulative sales up to each month, the given query can be used:

```sql
SELECT quarter,
  month,
  sales,
  SUM(sales) OVER(
    ORDER BY month
  ) AS 'running_total'
FROM monthly_sales;
```

This will give the following output:

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

## Partitions

Window functions can be partitioned to create bunches of rows that apply the function to each bunch. This is done using the `PARTITION BY` keyword within the `OVER` clause.

To find the average sales per quarter of the previous example, the given query can be used:

```sql
SELECT quarter,
  month,
  sales,
  AVG(sales) OVER(
    PARTITION BY quarter
  ) AS 'quarterly_average'
FROM monthly_sales;
```

This will give the following output:

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
