---
Title: 'Keywords'
Description: 'Predefined words that carry a special meaning and are used to perform various operations within the database.'
Subjects:
  - 'Code Foundations'
  - 'Data Science'
Tags:
  - 'MySQL'
  - 'Database'
  - 'Tables'
  - 'Data'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

In MySQL, **keywords** are predefined words that carry a special meaning. They are used to perform various operations within the database, such as creating tables, inserting data, querying the database, updating records, and more.

Keywords define the structure and syntax of MySQL queries. They help organize the commands in a way that the MySQL database can interpret and execute. Using keywords ensures that the MySQL queries are standardized, which enhances readability and maintainability of the code.

## Common MySQL Keywords

Here's a table of some commonly used MySQL keywords along with their definitions:

| Keyword    | Definition                                                       |
| ---------- | ---------------------------------------------------------------- |
| `SELECT`   | Retrieves data from one or more tables                           |
| `FROM`     | Specifies the table(s) to retrieve data from                     |
| `WHERE`    | Filters the results based on a condition                         |
| `INSERT`   | Adds new data to a table                                         |
| `UPDATE`   | Modifies existing data in a table                                |
| `DELETE`   | Removes data from a table                                        |
| `CREATE`   | Creates a new database object (e.g., table, index)               |
| `ALTER`    | Modifies the structure of an existing database object            |
| `DROP`     | Removes a database object                                        |
| `JOIN`     | Combines rows from two or more tables                            |
| `GROUP BY` | Groups rows that have the same values in specified columns       |
| `HAVING`   | Specifies a search condition for a group or an aggregate         |
| `ORDER BY` | Sorts the result set in ascending or descending order            |
| `LIMIT`    | Specifies the maximum number of rows to return in the result set |
| `UNION`    | Combines the result sets of two or more `SELECT` statements      |

> Note: The complete list of keywords can be found in the [MySQL Documentation](https://dev.mysql.com/doc/refman/8.0/en/keywords.html) with more details.

## Example

The following example demonstrates the use of few MySQL keywords:

```sql
-- Create a new table
CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  position VARCHAR(100),
  salary DECIMAL(10, 2),
  hire_date DATE
);

-- Insert a new employee
INSERT INTO employees (first_name, last_name, position, salary, hire_date)
VALUES ('John', 'Doe', 'Software Engineer', 75000.00, '2024-05-25');

-- Select specific employees
SELECT first_name, last_name
FROM employees
WHERE position = 'Software Engineer';
```

The output of the above query is:

| first_name | last_name |
| ---------- | --------- |
| John       | Doe       |

## Best Practices

- Consistent formatting: Keywords should always be written in uppercase for better readability.
- Proper naming conventions: Keywords should not be used as names for tables or columns. If necessary, backticks can be used to avoid syntax errors.
- Comprehensive understanding: The list of reserved keywords should be familiarized with to avoid unintentional errors in MySQL queries.
