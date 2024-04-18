---
Title: 'Constants'
Description: 'Constants - PostgreSQL constants are fixed values specified directly in SQL queries, unchangeable during execution, aiding in data manipulation.'
Subjects: 
  - 'Computer Science'
  - 'Data Science'
  - 'Database Management'
Tags: 
  - 'PostgreSQL'
  - 'Constants'
CatalogContent: 
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

**Constants** - PostgreSQL constants are fixed values specified directly in SQL queries, unchangeable during execution, aiding in data manipulation.

## Syntax

```sql
-- Contants can be used in various SQL statements, for example:

SELECT * FROM table_name WHERE column_name = 'constant_value';
```

## Examples 

### 1. Inserting a new record with fixed values:
```sql
INSERT INTO products (name, price) VALUES ('Chair', 50.00);
```
In this example, we're inserting a new record into the products table. The (name, price) part specifies the columns we're inserting data into. The VALUES clause indicates the values we're inserting into those columns. Here, 'Chair' is a constant representing the product name, and 50.00 is a constant representing the price.

### 2. Updating records with fixed conditions:
```sql
UPDATE orders SET status = 'Shipped' WHERE order_id = 123;
```
This query updates records in the orders table. We're setting the status column to 'Shipped' for records where the order_id is 123. 'Shipped' is a constant representing the updated status.

### 3. Filtering data based on fixed criteria:
```sql
SELECT * FROM students WHERE grade = 'A' AND attendance = 'Present';
```
In this query, we're selecting all columns (*) from the students table where the grade is 'A' and the attendance is 'Present'. 'A' and 'Present' are constants representing fixed criteria for filtering student data.

### 4. Real World Scenario:

A company operates an online store and regularly receives orders from customers. Each order has a status associated with it, such as "Pending", "Shipped", or "Delivered". When a customer places an order, the order is initially in a "Pending" status. As the order progresses through the fulfillment process, its status is updated accordingly.

Use of PostgreSQL Constants:
In this scenario, PostgreSQL constants can be used to represent the various order statuses. For example:

    'Pending'
    'Shipped'
    'Delivered'

When inserting or updating orders in the database, these constants can be utilized to set or modify the order status accordingly. Here's how it might look in SQL:

```sql
-- Inserting a new order with a 'Pending' status
INSERT INTO orders (order_id, customer_id, status) VALUES (1, 1001, 'Pending');

-- Updating the status of an order to 'Shipped'
UPDATE orders SET status = 'Shipped' WHERE order_id = 1;

-- Updating the status of an order to 'Delivered'
UPDATE orders SET status = 'Delivered' WHERE order_id = 1;
```
In this example, the constants 'Pending', 'Shipped', and 'Delivered' represent fixed order statuses. They provide clarity and consistency in the database schema, ensuring that all orders follow the same set of status values. This simplifies queries, data analysis, and business logic related to order processing.