---
Title: 'PRIMARY KEYS'
Description: 'Uniquely identifies each record in a table and ensures data integrity by preventing duplicate or `NULL` values in one or more specified columns.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Database'
  - 'Primary Key'
  - 'Tables'
CatalogContent:
  - 'learn-sql'
  - 'paths/data-science'
---

The **`PRIMARY KEY`** constraint is a fundamental database constraint that uniquely identifies each record in a table. It serves as the main identifier for rows and ensures data integrity by preventing duplicate records and null values in the specified column or columns. It combines the functionality of both `NOT NULL` and `UNIQUE` constraints, making it essential for maintaining data consistency and establishing relationships between tables.

`PRIMARY KEY` constraints are used extensively in database design for creating unique identifiers, establishing table relationships through foreign keys, enabling efficient data retrieval through automatic indexing, and maintaining referential integrity across related tables. They are commonly implemented in user management systems for unique user IDs, inventory systems for product identification, order processing systems for transaction tracking, and any scenario where each record must be uniquely identifiable and accessible.

## Syntax

The PRIMARY KEY constraint can be defined in two ways:

### Method 1: Column-Level Definition

```pseudo
CREATE TABLE table_name (
  column_name data_type PRIMARY KEY,
  column2 data_type,
  ...
);
```

### Method 2: Table-Level Definition

```pseudo
CREATE TABLE table_name (
  column1 data_type,
  column2 data_type,
  ...,
  CONSTRAINT constraint_name PRIMARY KEY (column1)
);
```

### Adding PRIMARY KEY to Existing Table

```pseudo
ALTER TABLE table_name
ADD CONSTRAINT constraint_name PRIMARY KEY (column_name);
```

**Parameters:**

- `table_name`: The name of the table where the PRIMARY KEY constraint will be applied
- `column_name`: The column or columns that will form the primary key
- `data_type`: The data type of the primary key column(s)
- `constraint_name`: Optional name for the PRIMARY KEY constraint (recommended for easier management)

**Return value:**

The PRIMARY KEY constraint itself does not return a value. However, it enforces uniqueness and creates an automatic index that improves query performance when searching by the primary key column(s).

## Example 1: Basic Table Creation

This example demonstrates creating a table with a single-column primary key for user management:

```sql
-- Create a users table with UserID as primary key
CREATE TABLE Users (
  UserID INT PRIMARY KEY,
  Username VARCHAR(50) NOT NULL,
  Email VARCHAR(100) NOT NULL,
  DateCreated DATE
);

-- Insert sample data
INSERT INTO Users (UserID, Username, Email, DateCreated) VALUES
(1, 'john_doe', 'john@example.com', '2024-01-15'),
(2, 'jane_smith', 'jane@example.com', '2024-01-16'),
(3, 'mike_wilson', 'mike@example.com', '2024-01-17');
```

Output of this code is:

```shell
Table 'Users' created successfully with UserID as PRIMARY KEY.
3 rows inserted successfully.
```

The `UserID` column serves as the primary key, automatically ensuring that each user has a unique identifier. The database will reject any attempt to insert duplicate `UserID` values or `NULL` values in this column, maintaining data integrity for the user management system.

## Example 2: E-commerce Order Management

This example shows implementing a composite primary key for order line items in an e-commerce system:

```sql
-- Create order items table with composite primary key
CREATE TABLE OrderItems (
  OrderID INT NOT NULL,
  ProductID INT NOT NULL,
  Quantity INT NOT NULL,
  UnitPrice DECIMAL(10,2) NOT NULL,
  LineTotal DECIMAL(12,2),
  CONSTRAINT PK_OrderItems PRIMARY KEY (OrderID, ProductID)
);

-- Insert order line items
INSERT INTO OrderItems (OrderID, ProductID, Quantity, UnitPrice, LineTotal) VALUES
(1001, 501, 2, 29.99, 59.98),
(1001, 502, 1, 45.50, 45.50),
(1002, 501, 3, 29.99, 89.97),
(1002, 503, 1, 15.25, 15.25);

-- Attempt to insert duplicate composite key (will fail)
INSERT INTO OrderItems (OrderID, ProductID, Quantity, UnitPrice, LineTotal) VALUES
(1001, 501, 1, 29.99, 29.99);
```

The output of this code will be:

```shell
Table 'OrderItems' created successfully.
4 rows inserted successfully.
ERROR: Duplicate entry '1001-501' for key 'PRIMARY'
```

The composite primary key (`OrderID`, `ProductID`) ensures that each product can appear only once per order, preventing duplicate line items while allowing the same product to appear in different orders. This design maintains data integrity in e-commerce order processing.

## Example 3: Adding PRIMARY KEY to Existing Table

This example demonstrates adding a primary key constraint to an existing table and handling the challenges that may arise:

```sql
-- Create a products table without primary key initially
CREATE TABLE Products (
  ProductCode VARCHAR(20) NOT NULL,
  ProductName VARCHAR(100) NOT NULL,
  Category VARCHAR(50),
  Price DECIMAL(8,2)
);

-- Insert sample data
INSERT INTO Products (ProductCode, ProductName, Category, Price) VALUES
('LAPTOP001', 'Gaming Laptop', 'Electronics', 1299.99),
('MOUSE002', 'Wireless Mouse', 'Electronics', 29.99),
('DESK003', 'Standing Desk', 'Furniture', 399.99);

-- Add PRIMARY KEY constraint to existing table
ALTER TABLE Products
ADD CONSTRAINT PK_Products PRIMARY KEY (ProductCode);

-- Verify the constraint by attempting duplicate insertion
INSERT INTO Products (ProductCode, ProductName, Category, Price) VALUES
('LAPTOP001', 'Another Laptop', 'Electronics', 999.99);
```

The output generated by this code will be:

```shell
Table 'Products' created successfully.
3 rows inserted successfully.
PRIMARY KEY constraint 'PK_Products' added successfully.
ERROR: Duplicate entry 'LAPTOP001' for key 'PRIMARY'
```

Adding a `PRIMARY KEY` constraint to an existing table requires that all existing data in the specified column(s) be unique and non-null. The database will automatically create an index on the `ProductCode` column, improving query performance for product lookups in inventory management systems.

## Frequently Asked Questions

### 1. Can a table have multiple primary keys?

No, a table can have only one `PRIMARY KEY` constraint. However, that single primary key can consist of multiple columns (composite primary key). If you need additional unique constraints, use UNIQUE constraints instead.

### 2. What happens if I try to insert NULL values into a primary key column?

The database will reject the insertion with an error. `PRIMARY KEY` columns automatically have the NOT NULL constraint, so they cannot contain NULL values under any circumstances.

### 3. What's the difference between `PRIMARY KEY` and `UNIQUE` constraints?

A `PRIMARY KEY` enforces both `UNIQUE` and `NOT NULL` constraints on a column or group of columns. In contrast, `UNIQUE` allows `NULL` values (typically one per column, depending on the RDBMS). Also, a table can have only one `PRIMARY KEY` but can have multiple `UNIQUE` constraints. `PRIMARY KEY`s are also used in defining `FOREIGN KEY` relationships.
