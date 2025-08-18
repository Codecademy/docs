---
Title: 'Comments'
Description: 'Annotations in SQL code that provide explanations or documentation without affecting query execution.'
Subjects:
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Comments'
  - 'Documentation'
  - 'SQL'
  - 'Syntax'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

**Comments** in SQL are annotations that provide explanations or documentation for SQL code without affecting the execution of queries. Comments allow developers to add notes, clarify complex logic, or temporarily disable parts of code for testing purposes. There are three types of comments in SQL:

- Single-line comments
- Multi-line comments
- Inline comments

Let's explore each in detail.

## Single Line Comments

**Single-line comments** are used to annotate a single line of SQL code. They begin with two hyphens (`--`) and continue until the end of the line. Single-line comments are commonly used for brief explanations or to temporarily disable individual lines of code.

### Syntax of Single Line Comments

```pseudo
-- This is a single-line comment
```

### Example of Single Line Comments

```sql
-- Select all customers from the database
SELECT * FROM customers;
```

In this example, the comment `-- Select all customers from the database` explains the purpose of the query. The database engine ignores everything after the `--` symbols, so only the `SELECT` statement is executed.

## Multi-line Comments

**Multi-line comments** are used when there is a need to comment out more than one line of SQL code. These comments start with `/*` and end with `*/`, and can span multiple lines. Multi-line comments are ideal for longer explanations, documentation blocks, or temporarily disabling larger sections of code.

### Syntax of Multi-line Comments

```pseudo
/* This is a multi-line comment
   that can span multiple lines */
```

### Example of Multi-line Comments

```sql
/* This query retrieves all orders
   placed in the year 2023
   for reporting purposes */
SELECT *
FROM orders
WHERE YEAR(order_date) = 2023;
```

In this example, the multi-line comment provides detailed information about what the query does. The comment spans three lines and explains the purpose of retrieving orders from 2023. The database engine ignores all text between `/*` and `*/`.

## Inline Comments

**Inline comments** allow adding comments within a query itself. They use the same `/* */` syntax as multi-line comments, but are placed within the SQL statement to provide specific information about particular parts of the query without interrupting the code flow.

### Syntax of Inline Comments

```pseudo
SELECT column1 /* comment about column1 */ FROM table_name;
```

### Example of Inline Comments

```sql
SELECT customer_name, /* Customer's full name */
       order_date,    /* Date when order was placed */
       total_amount   /* Final order total */
FROM orders;
```

In this example, inline comments describe what each selected column represents. This approach keeps the code readable while providing context for each column directly next to its definition.

## Example: Understanding SQL Comments

This example demonstrates all three types of SQL comments in a single query:

```sql
-- Single-line comment: Query to analyze customer orders
SELECT
    c.customer_name, /* Inline comment: Customer's full name */
    COUNT(o.order_id) AS total_orders,
    SUM(o.total_amount) /* Inline comment: Sum of all order values */ AS total_spent

FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
/* Multi-line comment:
   Filter for orders placed in the last year
   to get recent customer activity data */

WHERE o.order_date >= DATE_SUB(CURRENT_DATE, INTERVAL 1 YEAR)
GROUP BY c.customer_id, c.customer_name
-- Single-line comment: Sort by highest spending customers first
ORDER BY total_spent DESC;
```

This query combines all three comment types to create well-documented SQL code. The single-line comments (`--`) explain the overall purpose and sorting logic. The inline comments (`/* */`) describe specific columns being selected. The multi-line comment explains the filtering logic for recent orders.

## Frequently Asked Questions

### 1. What is `/*` in SQL?

The `/*` symbol marks the beginning of a multi-line comment in SQL. It must be paired with a closing `*/` symbol to properly end the comment block. Everything between these symbols is ignored by the database engine.

### 2. How do I comment off in SQL?

To comment out code in SQL, you can use:

- `--` for single-line comments
- `/* */` for multi-line comments or inline comments

### 3. How to comment multiple lines command?

To comment multiple lines in SQL, use the multi-line comment syntax: start with `/*` at the beginning of the first line you want to comment out, and end with `*/` after the last line. All lines between these symbols will be treated as comments and ignored during execution.
