---
Title: 'SQL Subqueries' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'SQL subqueries are queries that are embedded within another query.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
  - 'Data Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Subqueries'
  - 'SQLite'
  - 'MySQL'
  - 'PostgreSQL'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

**SQL Subqueries** also known as nested queries or inner queries, are queries that are embedded within another query. They allow the retrieval of data from one query and use it as a part of another query. Subqueries provide a powerful mechanism for performing complex database operations.

## Used in Place of a Scalar

One common use case for subqueries is to replace a scalar value in a query. A scalar subquery returns a single value and can be used in expressions, such as the `SELECT` list, `WHERE` clause, or even as a part of an arithmetic operation.

```pseudo
SELECT emp_name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```

This example retrieves the employee name and salary for those employees whose salary is greater than the average salary calculated in the subquery.

## Used in Place of a Table

Subqueries can also be used in place of a table to retrieve data. This allows for operations on a subset of data derived from another table or set of tables.

```pseudo
SELECT salesperson_id, total_sales
FROM (SELECT salesperson_id, SUM(amount) AS total_sales
      FROM sales
      GROUP BY salesperson_id) AS subquery;
```

In this example, the subquery calculates the total sales made by each salesperson, and the main query retrieves the salesperson ID and their corresponding total sales.

## Used in a WHERE Clause

Another common use case for subqueries is to include them in a `WHERE` clause to filter data based on specific conditions.

```pseudo
SELECT product_name, price
FROM products
WHERE category_id IN (SELECT category_id FROM categories WHERE category_name = 'Electronics');
```

This example selects the product name and price for all products that belong to the 'Electronics' category using a subquery in the WHERE clause.
