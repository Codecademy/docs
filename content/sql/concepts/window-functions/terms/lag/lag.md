---
Title: 'LAG()'
Description: 'Accesses data from previous rows without the need for a self join.'
Subjects:
  - 'Data Science'
Tags:
  - 'SQL Server'
  - 'Database'
  - 'Queries'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`LAG()`** window function facilitates access to previous rows based on the offset argument. It can be particularly useful when a comparison of a previous value is necessary without using self-join. There is a similarity to the `LEAD()` function, with the difference being the accessible rows. `LEAD()` accesses subsequent rows, while `LAG()` accesses previous rows.

## Syntax

```pseudo
LAG (expression [, offset] [, default])
OVER ( 
  [PARTITION BY partition_expression,]
  [ORDER BY order_expression [ASC|DESC]]
  )
```

`LAG()` accepts the following parameters:

- `expression` - The column value which will be referenced.
- `offset` - A positive numeric indicator of the previous row to access relative to the current row. If not specified, the default is 1.
- `default` - The value that will be returned if the `offset` is out of range. This is an optional argument, if not specified NULL will be returned.
- `partition_by` - Allows the result set to be grouped based on a column. This is an optional argument, if not specified the result set will be treated as a single group.
- `order_by` - Determines the order of the result set. If `partition_by` is specified, it will order the grouped data instead.

## Example 1

The examples below use the Sales table, which contains orders for different products sold on specific dates and their prices.

Sales Table

| product_id | order_date | sold_price |
| ---------- | ---------- | -------- |
|          1 | 2024-01-01 |      100 |
|          1 | 2024-02-01 |      120 |
|          1 | 2024-03-01 |       80 |
|          2 | 2024-01-01 |       50 |
|          2 | 2024-02-01 |       60 |
|          2 | 2024-02-02 |       60 |

The example uses `LAG()` on column `order_date`, ordered by `order_date`.

```sql
SELECT
    product_id,
    order_date,
    sold_price,
    LAG(order_date) OVER (
      ORDER BY order_date
      ) AS previous_order_date
FROM
    sales;
```

The output is a table with a new column `previous_order_date`, which contains previous entries of `order_date` in the table when ordered by `order_date`. The default offset is set to 1, meaning the previous row’s order_date will be displayed. NULL will be displayed when there is no previous row (such as for the first entry in the table).

```shell

| product_id | order_date | sold_price | previous_order_date |
| ---------- | ---------- | ---------- | ------------------- |
|          1 | 2024-01-01 |        100 | NULL                |
|          2 | 2024-01-01 |         50 | 2024-01-01          |
|          1 | 2024-02-01 |        120 | 2024-01-01          |
|          2 | 2024-02-01 |         60 | 2024-02-01          |
|          2 | 2024-02-02 |         60 | 2024-02-01          |
|          1 | 2024-03-01 |         80 | 2024-02-02          |
```

## Example 2

The below example uses `LAG()` with offset of 1, partitioned by `product_id` and ordered by `order_date`:

```sql
SELECT
    product_id,
    order_date,
    sold_price,
    LAG(sold_price,1) OVER (
      PARTITION BY product_id 
      ORDER BY order_date
      ) AS previously_sold_price
FROM
    sales;
```

The output is a table that features a new column `previously_sold_price`, which holds the product's sale price on the previous sale date. For the first record of each product_id, NULL is displayed because there was no previous sale for that product.

Output

| product_id | order_date | sold_price | previously_sold_price |
| ---------- | ---------- | ---------- | --------------------- |
|          1 | 2024-01-01 |        100 |                  NULL |
|          1 | 2024-02-01 |        120 |                   100 |
|          1 | 2024-03-01 |         80 |                   120 |
|          2 | 2024-01-01 |         50 |                  NULL |
|          2 | 2024-02-01 |         60 |                    50 |
|          2 | 2024-02-02 |         60 |                    60 |

## Example 3

The below example uses `LAG()` with offset of 1 and with default value "First Sale".

```sql
SELECT
    product_id,
    order_date,
    sold_price,
    LAG(product_id, 1, 'First Sale') OVER (
      ORDER BY order_date
      ) AS previous_sold_product
FROM
    sales;
  
```

This query outputs a new column, `previous_sold_product`, which contains the product ID from the previous sale for each row ordered by order_date. If there is no previous sale (for the first entry), the default value "First Sale" is used.

#### Output

| product_id | order_date | sold_price | previous_sold_product |
| ---------- | ---------- | ---------- | --------------------- |
|          1 | 2024-01-01 |        100 | First Sale            |
|          2 | 2024-01-01 |         50 | 1                     |
|          1 | 2024-02-01 |        120 | 2                     |
|          2 | 2024-02-01 |         60 | 1                     |
|          2 | 2024-02-02 |         60 | 2                     |
|          1 | 2024-03-01 |         80 | 2                     |
