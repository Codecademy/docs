---
Title: "Expressions"
Description: "Combinations of one or more values, operators, and functions that evaluate to produce a result."
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Concatenation'
  - 'MySQL'
  - 'Values'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

In MySQL, **Expressions** are combinations of one or more values, operators, and functions that evaluate to produce a result. Expressions are used in various parts of SQL queries to compute values, filter records, and perform operations. They are fundamental building blocks for constructing meaningful queries and performing calculations within the database.

## Types of MySQL Expressions

### Arithmetic Expressions

Arithmetic expressions involve numerical calculations and use arithmetic operators such as `+`, `-`, `*`, and `/`.

### Syntax

``` sql
SELECT 1 + 2;
SELECT price * quantity;
```

## Examples

The following example create table with columns name, price, and quantity_in_stock:

``` sql
CREATE TABLE products (
    name VARCHAR(50),
    price DECIMAL(10, 2),
    quantity_in_stock INT
);
```

``` sql
INSERT INTO products (name, price, quantity_in_stock) VALUES
('Product A', 19.99, 10),
('Product B', 5.99, 20),
('Product C', 49.99, 5);
```

We can use expressions to calculate the total value of products in stock:

``` sql
SELECT
    name,
    price,
    quantity_in_stock,
    price * quantity_in_stock AS total_value
FROM
    products;
```
    
This example results in the following output:

```shell
+-----------+-------+------------------+-------------+
| name      | price | quantity_in_stock| total_value |
+-----------+-------+------------------+-------------+
| Product A | 19.99 | 10               | 199.90      |
| Product B | 5.99  | 20               | 119.80      |
| Product C | 49.99 | 5                | 249.95      |
+-----------+-------+------------------+-------------+
```
