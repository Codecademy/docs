---
Title: 'LEFT JOIN'
Description: 'Combines rows from two or more tables based on a related column, returning all records from the left table and matching records from the right table.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Database'
  - 'Join'
  - 'Queries'
  - 'SQL'
  - 'Tables'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`LEFT JOIN`** is a fundamental SQL operation that combines rows from two or more tables based on a related column between them. It retrieves all records from the left table and only the matching records from the right table. When there is no matching record in the right table, `NULL` values are returned for the columns from the right table, ensuring that no data from the left table is lost in the result set.

The GIF here showcases the behaviour of a `LEFT JOIN`:

![LEFT JOIN GIF](https://content.codecademy.com/courses/learn-sql/multiple-tables/left-join.gif)

`LEFT JOIN` is particularly valuable in scenarios where all records from a primary table need to be preserved while optionally including related information from secondary tables. Common use cases include generating reports with optional data, displaying user profiles with optional contact information, analyzing sales data with optional customer details, and creating comprehensive datasets where missing relationships should not exclude primary records.

## Syntax

```sql
SELECT column_name(s)
FROM table1
LEFT JOIN table2 ON table1.column_name = table2.column_name;
```

**Syntax explanation:**

- `SELECT column_name(s)`: Specifies the columns to retrieve from the joined tables
- `FROM table1`: The left table, which serves as the primary source of data
- `LEFT JOIN table2`: The right table to be joined with the left table
- `ON table1.column_name = table2.column_name`: The join condition that specifies how the tables are related

**Return value:**

The `LEFT JOIN` returns a result set that includes all rows from the left table, with matching data from the right table where available, and `NULL` values for right table columns where no match exists.

## Example 1: Basic `LEFT JOIN` Example

This example demonstrates the fundamental usage of `LEFT JOIN` with customer and order data to show all customers regardless of whether they have placed orders:

```sql
-- Create customers table
CREATE TABLE customers (
  customer_id INT PRIMARY KEY,
  customer_name VARCHAR(50),
  city VARCHAR(50)
);

-- Insert sample data
INSERT INTO customers (customer_id, customer_name, city) VALUES
(1, 'Alice Johnson', 'New York'),
(2, 'Bob Smith', 'Los Angeles'),
(3, 'Carol Brown', 'Chicago'),
(4, 'David Wilson', 'Houston');

-- Create orders table
CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  customer_id INT,
  order_date DATE,
  total_amount DECIMAL(10, 2)
);

-- Insert sample data
INSERT INTO orders (order_id, customer_id, order_date, total_amount) VALUES
(101, 1, '2024-01-15', 250.00),
(102, 2, '2024-01-20', 150.00),
(103, 1, '2024-02-01', 300.00);

-- LEFT JOIN query to show all customers with their orders
SELECT
  c.customer_id,
  c.customer_name,
  c.city,
  o.order_id,
  o.order_date,
  o.total_amount
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
ORDER BY c.customer_id;
```

The output produced by this code is:

```shell
| customer_id | customer_name  | city        | order_id | order_date | total_amount |
|-------------|----------------|-------------|----------|------------|---------------|
| 1           | Alice Johnson  | New York    | 101      | 2024-01-15 | 250.00        |
| 1           | Alice Johnson  | New York    | 103      | 2024-02-01 | 300.00        |
| 2           | Bob Smith      | Los Angeles | 102      | 2024-01-20 | 150.00        |
| 3           | Carol Brown    | Chicago     | NULL     | NULL       | NULL          |
| 4           | David Wilson   | Houston     | NULL     | NULL       | NULL          |
```

This query returns all customers from the customers table, along with their order information where available. Customer David Wilson appears in the results with `NULL` values for order details since he has not placed any orders, demonstrating how `LEFT JOIN` preserves all records from the left table.

## Example 2: Employee Department Analysis

This example shows how `LEFT JOIN` can be used to analyze employee distribution across departments, including employees who may not be assigned to any department:

```sql
-- Create departments table
CREATE TABLE departments (
  dept_id INT PRIMARY KEY,
  dept_name VARCHAR(50),
  location VARCHAR(50)
);

-- Insert department data
INSERT INTO departments (dept_id, dept_name, location) VALUES
(10, 'Sales', 'New York'),
(20, 'Marketing', 'Chicago'),
(30, 'Engineering', 'San Francisco'),
(40, 'HR', 'Boston');

-- Create employees table
CREATE TABLE employees (
  emp_id INT PRIMARY KEY,
  emp_name VARCHAR(50),
  dept_id INT,
  salary DECIMAL(10, 2)
);

-- Insert employee data
INSERT INTO employees (emp_id, emp_name, dept_id, salary) VALUES
(1, 'John Doe', 10, 55000.00),
(2, 'Jane Smith', 20, 62000.00),
(3, 'Mike Johnson', 10, 48000.00),
(4, 'Sarah Wilson', 30, 75000.00),
(5, 'Tom Brown', NULL, 45000.00); -- Employee without department assignment

-- LEFT JOIN to show all employees with their department information
SELECT
  e.emp_id,
  e.emp_name,
  e.salary,
  d.dept_name,
  d.location
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.dept_id
ORDER BY e.emp_name;
```

The output of this code will be:

```shell
| emp_id | emp_name     | salary   | dept_name   | location       |
|--------|--------------|----------|-------------|----------------|
| 2      | Jane Smith   | 62000.00 | Marketing   | Chicago        |
| 1      | John Doe     | 55000.00 | Sales       | New York       |
| 3      | Mike Johnson | 48000.00 | Sales       | New York       |
| 4      | Sarah Wilson | 75000.00 | Engineering | San Francisco  |
| 5      | Tom Brown    | 45000.00 | NULL        | NULL           |
```

This query demonstrates how `LEFT JOIN` handles employees who may not be assigned to any department. Employee Tom Brown appears in the results with `NULL` values for department information, which is crucial for HR analysis to identify unassigned employees.

## Example 3: Product Sales Report

This example illustrates using `LEFT JOIN` to create a comprehensive sales report that includes all products, even those that have not been sold, which is essential for inventory management and sales analysis:

```sql
-- Create products table
CREATE TABLE products (
  product_id INT PRIMARY KEY,
  product_name VARCHAR(50),
  category VARCHAR(30),
  unit_price DECIMAL(8, 2)
);

-- Insert product data
INSERT INTO products (product_id, product_name, category, unit_price) VALUES
(1, 'Laptop Computer', 'Electronics', 899.99),
(2, 'Wireless Mouse', 'Electronics', 29.99),
(3, 'Office Chair', 'Furniture', 199.99),
(4, 'Desk Lamp', 'Furniture', 49.99),
(5, 'Notebook Set', 'Stationery', 15.99);

-- Create sales table
CREATE TABLE sales (
  sale_id INT PRIMARY KEY,
  product_id INT,
  quantity_sold INT,
  sale_date DATE
);

-- Insert sales data (note: not all products have sales)
INSERT INTO sales (sale_id, product_id, quantity_sold, sale_date) VALUES
(1001, 1, 5, '2024-01-10'),
(1002, 2, 15, '2024-01-12'),
(1003, 1, 3, '2024-01-15'),
(1004, 4, 8, '2024-01-18');

-- LEFT JOIN to show all products with their sales performance
SELECT
  p.product_id,
  p.product_name,
  p.category,
  p.unit_price,
  COALESCE(SUM(s.quantity_sold), 0) AS total_quantity_sold,
  COALESCE(SUM(s.quantity_sold * p.unit_price), 0) AS total_revenue
FROM products p
LEFT JOIN sales s ON p.product_id = s.product_id
GROUP BY p.product_id, p.product_name, p.category, p.unit_price
ORDER BY total_revenue DESC;
```

The output by this code will be:

```shell
| product_id | product_name     | category     | unit_price | total_quantity_sold | total_revenue |
|------------|------------------|--------------|------------|----------------------|----------------|
| 1          | Laptop Computer  | Electronics  | 899.99     | 8                    | 7199.92        |
| 2          | Wireless Mouse   | Electronics  | 29.99      | 15                   | 449.85         |
| 4          | Desk Lamp        | Furniture    | 49.99      | 8                    | 399.92         |
| 5          | Notebook Set     | Stationery   | 15.99      | 0                    | 0.00           |
| 3          | Office Chair     | Furniture    | 199.99     | 0                    | 0.00           |
```

This query generates a complete sales report showing all products, including those with zero sales. The use of `COALESCE` function handles `NULL` values by converting them to zero, making the report more readable and suitable for business analysis.

## Frequently Asked Questions

### 1. What is the difference between `LEFT JOIN` and `INNER JOIN`?

`LEFT JOIN` returns all records from the left table and matching records from the right table, while `INNER JOIN` only returns records that have matches in both tables.

### 2. Can I use multiple LEFT JOINs in a single query?

Yes, you can chain multiple `LEFT JOIN`s together. Each `LEFT JOIN` operates on the result of the previous join, allowing you to combine data from multiple tables while preserving records from the leftmost table.

### 3. What happens when the join condition returns multiple matches?

When multiple rows in the right table match a single row in the left table, `LEFT JOIN` returns all matching combinations. This can result in duplicate rows from the left table, one for each matching row in the right table.
