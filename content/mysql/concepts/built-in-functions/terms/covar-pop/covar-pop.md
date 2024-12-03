---
Title: 'COVAR_POP()'
Description: 'Computes the population covariance of two sets of values in a dataset.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'MySQL'
  - 'SQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`COVAR_POP()`** function in MySQL calculates the population covariance between two sets of numeric values. Covariance enables us to measure the degree to which two [variables](https://www.codecademy.com/resources/docs/mysql/user-defined-variables) modify together.

This function is regularly used in statistical analysis to understand relationships between variables. A positive covariance indicates that both variables tend to increase together, while a negative covariance indicates an inverse relationship.

## Syntax

```pseudo
COVAR_POP(expression1, expression2)
```

- `expression1`: The first numeric data set.
- `expression2`: The second numeric data set.

Both [expressions](https://www.codecademy.com/resources/docs/mysql/expressions) must contain the same number of rows.

## Example

Suppose we have a table `sales` that records the number of units sold and the corresponding revenue for different products:

| product_id | units_sold | revenue |
| ---------- | ---------- | ------- |
| 1          | 100        | 1000    |
| 2          | 200        | 2500    |
| 3          | 150        | 1500    |
| 4          | 300        | 4000    |

To calculate the population covariance between `units_sold` and `revenue`, the following query including `COVAR_POP()`can be used:

```sql
SELECT COVAR_POP(units_sold, revenue) AS population_covariance
FROM sales;
```

The output of the above code will be as follows:

```shell
+----------------------+
| population_covariance |
+----------------------+
| 666666.6667         |
+----------------------+
```
