---
Title: 'NOT EQUAL TO'
Description: 'Compares two values and returns true if they are not equal.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Database'
  - 'MySQL'
  - 'Operators'
  - 'PostgreSQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/data-science'
---

The **`NOT EQUAL TO`** operator in SQL is a comparison operator used to compare two values. It returns `true` if the values aren't equal and `false` if they are equal. The operator can be represented in two ways: `<>` or `!=`.

It is commonly used in the [`WHERE`](https://www.codecademy.com/resources/docs/sql/commands/where) clause to exclude specific records from the result set. The `NOT EQUAL TO` operator is essential for creating precise queries that filter out unwanted data.

## Syntax

The syntax for the `NOT EQUAL TO` operator in SQL is:

```sql
WHERE column_name <> value;
```

Or alternatively:

```sql
WHERE column_name != value;
```

The `column_name` represents the column being evaluated, and `value` is the specific criterion being compared.

> **Note:** Although both `<>` and `!=` symbols can be used for the `NOT EQUAL TO` operator, `<>` follows the ISO standard while `!=` does not. It is generally recommended to use `<>` for better compatibility.

## Example 1: Using `NOT EQUAL TO` with Text Values

Here's a sample `customers` table with location data:

```sql
CREATE TABLE customers (
  ID INT,
  Name VARCHAR(100),
  City VARCHAR(100),
  State CHAR(2)
);

INSERT INTO customers VALUES
(1, 'Smith', 'New York', 'NY'),
(2, 'Johnson', 'Chicago', 'IL'),
(3, 'Martinez', 'Los Angeles', 'CA'),
(4, 'Brown', 'New York', 'NY'),
(5, 'Wilson', 'Miami', 'FL'),
(6, 'Thompson', 'Dallas', 'TX');
```

This example demonstrates how to use the `NOT EQUAL TO` operator to exclude specific text values from results:

```sql
SELECT *
FROM customers
WHERE city <> 'New York';
```

This query returns all the records from the customers table where the city is not equal to 'New York':

```shell
ID  Name        City         State
2   Johnson     Chicago      IL
3   Martinez    Los Angeles  CA
5   Wilson      Miami        FL
6   Thompson    Dallas       TX
```

## Example 2: Using `NOT EQUAL TO` with Numeric Values

For this example, let's work with a `products` table containing various electronics items:

```sql
CREATE TABLE products (
  product_id INT,
  product_name VARCHAR(100),
  price DECIMAL(10,2)
);

INSERT INTO products VALUES
(1, 'Keyboard', 29.99),
(2, 'Monitor', 149.99),
(3, 'Standard Mouse', 19.99),
(4, 'Mouse', 14.99),
(5, 'Headphones', 59.99),
(6, 'USB Drive', 19.99);
```

This example shows how to filter numeric data using the `NOT EQUAL TO` operator:

```sql
SELECT product_name, price
FROM products
WHERE price != 19.99;
```

This query retrieves all products where the price is not $19.99:

```shell
product_name    price
Keyboard        29.99
Monitor         149.99
Mouse           14.99
Headphones      59.99
```

## Example 3: Combining `NOT EQUAL TO` with Multiple Conditions

To demonstrate more complex filtering, consider this company `employees` database table:

```sql
CREATE TABLE employees (
  emp_id INT,
  name VARCHAR(100),
  department VARCHAR(100),
  salary DECIMAL(10,2)
);

INSERT INTO employees VALUES
(101, 'Johnson', 'Sales', 45000),
(102, 'Davis', 'Sales', 52000),
(103, 'Williams', 'Marketing', 65000),
(104, 'Miller', 'Sales', 48000),
(105, 'Rodriguez', 'IT', 70000),
(106, 'Garcia', 'HR', 47000),
(107, 'Jones', 'Sales', 55000),
(108, 'Taylor', 'Finance', 61000),
(109, 'Wilson', 'HR', 42000),
(110, 'Clark', 'IT', 72000);
```

This example demonstrates how to use the `NOT EQUAL TO` operator with multiple conditions using logical operators:

```sql
SELECT *
FROM employees
WHERE department <> 'Sales'
AND salary > 50000;
```

This query retrieves all employees who do not work in the 'Sales' department and have a salary greater than $50,000:

```shell
emp_id  name          department    salary
103     Williams      Marketing     65000
105     Rodriguez     IT            70000
108     Taylor        Finance       61000
110     Clark         IT            72000
```

## Frequently Asked Questions

### 1. What is the difference between `<>` and `!=` in SQL?

Both `<>` and `!=` are `NOT EQUAL TO` operators in SQL and function identically. However, `<>` follows the ISO SQL standard, while `!=` is not part of the standard. For maximum compatibility across different database systems, it's recommended to use `<>`.

### 2. Is the `NOT EQUAL TO` operator case-sensitive for text comparisons?

The case sensitivity of the `NOT EQUAL TO` operator depends on the database system and its collation settings. In most databases like [MySQL](https://www.codecademy.com/resources/docs/mysql) with default settings, string comparisons are case-insensitive. However, in databases like [PostgreSQL](https://www.codecademy.com/resources/docs/postgresql), they are typically case-sensitive by default.

### 3. Can I use the `NOT EQUAL TO` operator with `NULL` values?

No, comparing any value with `NULL` using `NOT EQUAL TO` will not work as expected. `NULL` represents an unknown value, so neither `column <> NULL` nor `column = NULL` will return the expected results. Instead, use [`IS NULL`](https://www.codecademy.com/resources/docs/sql/operators/is-null) or [`IS NOT NULL`](https://www.codecademy.com/resources/docs/sql/operators/is-not-null) operators.
