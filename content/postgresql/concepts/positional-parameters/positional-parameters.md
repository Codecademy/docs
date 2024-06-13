---
Title: 'Postional Parameters'
Description: 'Positional Parameters in PostgreSQL are used within prepared statements and dynamic SQL queries to represent placeholders for values that will be supplied later during execution.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'PostgreSQL'
  - 'Database'
  - 'Data'
CatalogContent:
  - 'getting-started-off-platform-for-data-science'
  - 'paths/design-databases-with-postgresql'
---

Positional parameters in PostgreSQL are used within prepared statements and dynamic SQL queries to represent placeholders for values that will be supplied later during execution.These placeholders are denoted by `$1`, `$2`, etc., indicating their position in the parameter list. When the query or prepared statement is executed, the positional parameters are replaced with actual values based on their order and the supplied values.

## Example

Here's an example of using positional parameters in PostgreSQL:

Consider a table called `employees` with columns `id`, `name`, and `age`. To retrieve employees whose age is greater than a specified value using positional parameters, the following SQL statements can be used:

First, create a simple table:

```sql
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name TEXT,
    age INTEGER
);

INSERT INTO employees (name, age) VALUES
('John', 30),
('Alice', 25),
('Bob', 35);
```

Next, write a query using positional parameters to retrieve employees older than a specified age:

```sql
PREPARE get_older_employees (INTEGER) AS
SELECT * FROM employees WHERE age > $1;
```

In the above query:

- `PREPARE` creates a prepared statement named `get_older_employees`.
- `(INTEGER)` specifies the data type of the positional parameter.
- `$1` is the positional parameter reference.

Now, we can execute the prepared statement with a specific value for the age parameter:

```sql
EXECUTE get_older_employees(25);
```
This will return all employees whose age is greater than 25.

## Benefits of Using Positional Parameters:

- Reusability: The prepared statement can be reused with different parameter values without needing to rewrite the entire query.
- Security: Positional parameters help prevent SQL injection attacks by separating the query logic from the input values.