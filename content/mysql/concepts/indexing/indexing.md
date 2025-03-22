---
Title: 'Indexing'
Description: 'A technique used to speed up the retrieval of rows from a database table.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data'
  - 'Index'
  - 'MySQL'
  - 'Database'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

**Indexing** in MySQL is like creating a shortcut to quickly find data in a database. Just as an index in a book helps locate topics without flipping through every page, a database index helps MySQL locate rows faster without scanning the entire table. This improves the speed of search queries, making data retrieval much more efficient.

## How Indexes Work

Indexes are created on columns in a table. When an index is created on a column, MySQL organizes and stores information about that column in a sorted manner, typically using a structure called a `B-tree`. This allows MySQL to quickly locate rows based on the indexed column's values.
The commonly used types of indexes are:

1. **Primary Key Index**: Automatically created when a primary key is defined.
2. **Unique Index**: Ensures that all values in a column are unique.
3. **Regular Index**: Speeds up retrieval but allows duplicate values.
4. **Full-text Index**: Used for full-text searches.
5. **Composite Index**: Optimizes queries involving multiple columns.

## Creating Indexes

Indexes can be created when the table is first created with the `CREATE TABLE` statement, or they can be added later using the `CREATE INDEX` statement.

### Creating Indexes When Creating a Table

In this example, an index is created on the `last_name` column.

```sql
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    INDEX (last_name)
);
```

### Creating Indexes on an Existing Table

This statement adds an index to the `last_name` column of the `employees` table.

```sql
CREATE INDEX idx_lastname ON employees(last_name);
```

## Using Indexes

When a query is executed, MySQL's query optimizer decides whether to use an index. Here are some examples of how indexing can improve performance:

### Example Without Index

Without an index on `last_name`, MySQL has to scan every row in the `employees` table to find the rows where `last_name` is 'Taylor'.

```sql
SELECT * FROM employees WHERE last_name = 'Taylor';
```

### Example With Index

With an index on `last_name`, MySQL can quickly locate all rows where `last_name` is 'Taylor' using the index.

```sql
CREATE INDEX idx_lastname ON employees(last_name);

SELECT * FROM employees WHERE last_name = 'Taylor';
```

## Viewing Indexes

All the indexes on a table can be viewed using the `SHOW INDEX` command:

```sql
SHOW INDEX FROM employees;
```

## Dropping Indexes

To remove an index, the `DROP INDEX` statement is used:

```sql
DROP INDEX idx_lastname ON employees;
```

## Considerations for Using Indexes

1. **Performance Improvement**: Indexes can greatly improve query performance.
2. **Storage Overhead**: Indexes require additional storage.
3. **Insert/Update Performance**: Indexes can slow down insert and update operations because the index must be updated.
4. **Choose Columns Wisely**: Not all columns need indexes. Index columns that are frequently searched or used in join operations.

## Example with Composite Index

A composite index is an index on multiple columns.

```sql
CREATE INDEX idx_name_email ON employees(last_name, email);
```

This composite index can be used for queries filtering by `last_name` alone, `last_name` and `email`, or `email` alone (with some limitations).

## Practical Example

Here's a more detailed practical example:

### Creating the Table

```sql
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    category VARCHAR(50),
    price DECIMAL(10, 2),
    stock INT
);

CREATE INDEX idx_category_price ON products(category, price);
```

### Inserting Data

```sql
INSERT INTO products (name, category, price, stock) VALUES
('Laptop', 'Electronics', 999.99, 50),
('Smartphone', 'Electronics', 699.99, 100),
('Desk', 'Furniture', 199.99, 20),
('Tablet', 'Electronics', 299.99, 75),
('Headphones', 'Electronics', 199.99, 150),
('Monitor', 'Electronics', 179.99, 80),
('Sofa', 'Furniture', 499.99, 10);
```

### Querying with Index

```sql
SELECT * FROM products WHERE category = 'Electronics' AND price < 800;
```

Expected Output:

Based on the inserted sample data, the query will return the rows where the category is 'Electronics' and the price is less than 800. Here is the expected output:

| product_id | name       | category    | price  | stock |
| ---------- | ---------- | ----------- | ------ | ----- |
| 2          | Smartphone | Electronics | 699.99 | 100   |
| 4          | Tablet     | Electronics | 299.99 | 75    |
| 5          | Headphones | Electronics | 199.99 | 150   |
| 6          | Monitor    | Electronics | 179.99 | 80    |

## Conclusion

Indexes in MySQL are powerful tools for improving the performance of data retrieval operations. They are particularly useful for speeding up search queries, enhancing join operations, improving sorting performance, enforcing unique constraints, and enabling efficient full-text searches. However, they come with trade-offs, including storage overhead, impact on write performance, and the need for careful management and maintenance. Properly designed and implemented indexes can significantly enhance database performance, but it’s important to consider their limitations and use them judiciously.
