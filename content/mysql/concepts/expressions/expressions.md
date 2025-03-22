---
Title: 'Expressions'
Description: 'Combinations of one or more values, operators, and functions that evaluate to produce a result.'
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

These are some of the common MySQL Expressions:

### Arithmetic Expressions

Arithmetic expressions involve numerical calculations and use arithmetic operators such as `+`, `-`, `*`, and `/`.

### Column Expressions

Column expressions refer to the columns of a table and are used to specify or manipulate the column data.

### String Expressions

String expressions involve operations on string data types, such as concatenation, manipulation, and evaluation operations. For example, the `CONCAT()` function is commonly used to concatenate two or more strings into one.

### Aggregate Expression

Aggregate expressions perform calculations on multiple rows and return a single value. Common aggregate functions include `AVG()`, `SUM()`, `COUNT()`, `MIN()`, and `MAX()`.

### Boolean Expressions

Boolean expressions return a boolean value, typically used in `WHERE` clauses to filter records. For example, `price > 10` is a boolean expression that could be used in `SELECT * FROM products WHERE price > 10;` to filter products with a price greater than 10.

### Function Expressions

Function expressions use MySQL functions to perform operations on data. For example, `NOW()` retrieves the current timestamp.

## Example

Consider the following SQL statement used to create a table with sample data:

```sql
-- Create a table named 'products'
CREATE TABLE products (
    name VARCHAR(50),
    price DECIMAL(10, 2),
    quantity_in_stock INT
);

-- Insert data into the 'products' table
INSERT INTO products (name, price, quantity_in_stock) VALUES
('Product A', 19.99, 10),
('Product B', 5.99, 20),
('Product C', 49.99, 5);
```

### Arithmetic Expressions

The following example calculates the total value of each product in stock:

```sql
SELECT
    name,
    price,
    quantity_in_stock,
    price * quantity_in_stock AS total_value
FROM
    products;
```

The above query will produce the following output:

| name      | price | quantity_in_stock | total_value |
| --------- | ----- | ----------------- | ----------- |
| Product A | 19.99 | 10                | 199.90      |
| Product B | 5.99  | 20                | 119.80      |
| Product C | 49.99 | 5                 | 249.95      |

### Column Expressions

The following example retrieves the `name` and `price` columns from the `products` table:

```sql
SELECT name, price FROM products;
```

The above query will produce the following output:

| name      | price |
| --------- | ----- |
| Product A | 19.99 |
| Product B | 5.99  |
| Product C | 49.99 |

### String Expressions

In the following example, the concatenation operation `CONCAT(name, ' - Special Offer')` combines the `name` column value with the string `' - Special Offer'`.

```sql
SELECT CONCAT(name, ' - Special Offer') AS special_offer FROM products;
```

The above query will produce the following output:

| special_offer             |
| ------------------------- |
| Product A - Special Offer |
| Product B - Special Offer |
| Product C - Special Offer |

### Aggregate Expressions

The following example calculates the total price of all products:

```sql
SELECT SUM(price) AS total_price FROM products;
```

The above query will produce the following output:

| total_price |
| ----------- |
| 75.97       |

### Boolean Expressions

The following example retrieves products with low stock:

```sql
SELECT * FROM products WHERE quantity_in_stock < 10;
```

The above query will produce the following output:

| name      | price | quantity_in_stock |
| --------- | ----- | ----------------- |
| Product C | 49.99 | 5                 |

### Function Expressions

The following example retrieves the length of each product name:

```sql
SELECT name, LENGTH(name) AS name_length FROM products;
```

The above query will produce the following output:

| name      | name_length |
| --------- | ----------- |
| Product A | 9           |
| Product B | 9           |
| Product C | 9           |
