---
Title: 'IIF'
Description: ' Performs inline conditional checks within SELECT statements to return different values based on a condition.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Operators'
  - 'Database'
  - 'Data'
  - 'Conditionals'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`IFF`** function in SQL is used to perform a conditional evaluation and return one of two values based on the result of a specified condition. It is similar to the ternary operator (condition ? true_value : false_value) found in many programming languages.

## Syntax

```pseudo
IIF(condition, value_if_true, value_if_false)
```

- `condition`: The condition to be evaluated.
- `value_if_true`: The value to be returned if the condition is true.
- `value_if_false`: The value to be returned if the condition is false.

## Usage

The **`IFF`** function is particularly useful for inline conditional logic within SQL queries. It allows you to embed simple conditional checks directly within SELECT, WHERE, ORDER BY, and other clauses.

## Example

The following example demonstrates the use of the `IF` function to label stock prices as `High` or `Low`:

```sql
# Create a table named 'employees' and categorize their salaries as high or moderate using the 'IIF' function

CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    name VARCHAR(100),
    salary DECIMAL(10, 2)
);

INSERT INTO employees (employee_id, name, salary) VALUES
(1, 'Alice', 45000),
(2, 'Bob', 55000),
(3, 'Charlie', 70000),
(4, 'Diana', 30000),
(5, 'Edward', 85000);

SELECT
    name,
    salary,
    IIF(salary > 60000, 'High Salary', 'Moderate Salary') AS salary_category
FROM
    employees;
```

The output of the `SELECT` statement will be:
| name | salary | salary_category |
| --------- | ------- | -------------- |
| Alice | 45000 | Moderate Salary |
| Bob | 55000 | Moderate Salary |
| Charlie | 70000 | High Salary |
| Diana | 30000 | Moderate Salary |
| Edward | 85000 | High Salary |

The `IIF` function checks if the salary is greater than `60000`. If true, it assigns `High Salary` to the `salary_category`. Otherwise, it assigns `Moderate Salary`.
