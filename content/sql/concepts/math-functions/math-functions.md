---
Title: 'Math Functions'
Description: 'SQL Math Functions are built-in features in SQL, which allow mathematical operations directly in database queries.'
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

**SQL Math Functions** are built-in features in SQL, which let you do mathematical operations, such as addition, subtraction, and even more complex calculations, directly in your database queries. This makes it easier and more efficient to work with numerical data in SQL, as you don't need to extract the data and process it separately.

### Example

In this example, the following data is given, in a table named `orders`:

| order_id | product_price | quantity |
| -------- | ------------- | -------- |
| 1        | 20            | 3        |
| 2        | 15            | 5        |
| 3        | 30            | 2        |
| 4        | 10            | 1        |

The multiplication (\*) math function can be used to calculate the total price for each order:

```sql
SELECT order_id, product_price, quantity, product_price * quantity AS total_price
FROM orders;
```

In this SQL statement, `product_price` and `quantity` are multiplied for each order to calculate `total_price`. The [`AS`](https://www.codecademy.com/resources/docs/sql/commands/as) keyword is used to rename the `product_price * quantity` column to `total_price` in the output.

The output will be:

| order_id | product_price | quantity | total_price |
| -------- | ------------- | -------- | ----------- |
| 1        | 20            | 3        | 60          |
| 2        | 15            | 5        | 75          |
| 3        | 30            | 2        | 60          |
| 4        | 10            | 1        | 10          |

This is a simple but practical example of math functions in SQL.
