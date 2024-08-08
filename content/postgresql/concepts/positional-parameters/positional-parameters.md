---
Title: 'Positional Parameters'
Description: 'Represent placeholders denoted by `$1`, `$2`, etc. and are commonly used within prepared statements and dynamic SQL queries.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'PostgreSQL'
  - 'Database'
  - 'Data'
  - 'Queries'
CatalogContent:
  - 'getting-started-off-platform-for-data-science'
  - 'paths/design-databases-with-postgresql'
---

In PostgreSQL, **positional parameters** represent placeholders denoted by `$1`, `$2`, etc. and are commonly used within prepared statements and dynamic SQL queries. During execution, these placeholders are replaced with actual values according to their specified order.

## Example

Here is a table to be used for demonstrating the usage of positional parameters:

```sql
-- Creating a table
CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  name TEXT,
  age INTEGER
);

-- Inserting data into the table
INSERT INTO employees (name, age) VALUES
('John', 30),
('Alice', 25),
('Bob', 35);
```

The below query is to be used to retrieve the list of employees older than a specific age:

```sql
PREPARE get_older_employees (INTEGER) AS
SELECT * FROM employees WHERE age > $1;
```

In the above query, `PREPARE` creates a prepared statement named `get_older_employees` and `INTEGER` specifies the data type of the positional parameter.

Below, `EXECUTE` is used to execute the prepared statement with a specific value for the positional parameter:

```sql
EXECUTE get_older_employees(25);
```

This returns the list of employees older than 25 years:

| id  | name | age |
| --- | ---- | --- |
| 1   | John | 30  |
| 3   | Bob  | 35  |

## Benefits

Here are some benefits of using positional parameters:

- Reusability: The prepared statement can be reused with different parameter values without needing to rewrite the entire query.
- Security: Positional parameters help prevent SQL injection attacks by separating the query logic from the input values.
