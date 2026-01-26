---
Title: 'CURRENT_TIMESTAMP()'
Description: 'Returns the current date and time.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'MySQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`CURRENT_TIMESTAMP()`** function returns the current date and time in the string format `YYYY-MM-DD HH:MM:SS`.

## Syntax

```pseudo
CURRENT_TIMESTAMP
```

**Parameters:**

`CURRENT_TIMESTAMP` does not accept any parameters in standard SQL implementations.

**Return value:**

Returns the current date and time as a `DATETIME` value (in SQL Server) or `TIMESTAMP` value (in other systems) in the format `YYYY-MM-DD HH:MM:SS.mmm`.

## Example 1: Basic Usage

In this example, `CURRENT_TIMESTAMP` retrieves the current date and time from the database server:

```sql
SELECT CURRENT_TIMESTAMP;
```

A possible output of this code is:

```shell
2026-01-21 19:39:23
```

## Example 2: Using as Default Value

In this example, `CURRENT_TIMESTAMP` is used as a default value for the `order_date` column, automatically capturing the timestamp when a new record is inserted:

```sql
CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  product_name VARCHAR(100)
);

INSERT INTO orders (order_id, product_name)
VALUES (1, 'Laptop');

SELECT * FROM orders;
```

The output shows that the `order_date` was automatically populated:

```shell
order_id    order_date              product_name
----------- ----------------------- ----------------------------------------------------------------------------------------------------
          1 2026-01-22 11:43:29.737 Laptop
```

## Example 3: Comparing Timestamps

In this example, `CURRENT_TIMESTAMP` is used with [`DATEDIFF()`](https://www.codecademy.com/resources/docs/sql/dates/datediff) to calculate how many minutes have elapsed since an order was placed:

```sql
SELECT
  order_id,
  product_name,
  DATEDIFF(minute, order_date, CURRENT_TIMESTAMP) AS minutes_ago
FROM orders;
```

The output of this code is:

```shell
order_id | product_name | minutes_ago
---------|--------------|------------
1        | Laptop       | 120
```
