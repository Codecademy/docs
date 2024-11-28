---
Title: 'Functions'
Description: 'A PostgreSQL function is a reusable SQL code block that performs operations and returns results.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'PostgreSQL'
CatalogContent:
  - 'paths/analyze-data-with-sql'
---

**`Functions`** in PostgreSQL are reusable sets of SQL and procedural commands stored on the database server. They are also referred to as _Stored Procedures_. They enable complex operations to be performed in a single function, reducing the need for multiple commands and database roundtrips

PostgreSQL supports functions in various languages, such as SQL, PL/pgSQL, C, Python, and more.

## Syntax

Here is the syntax for defining a PostgreSQL function:

```pseudo
CREATE [OR REPLACE] FUNCTION function_name(parameters)
RETURNS return_type AS $$
DECLARE
    <variable_name> <data_type>;
BEGIN
   <function_logic>;
   RETURN <value_or_variable>;
END;
$$ LANGUAGE lang_name;
```

- `function_name`: Specifies the function name.
- `[OR REPLACE]`: Allows updating an existing function with the same name. PostgreSQL will create a new function if the function does not exist
- `parameters`: These are the input parameters that the function accepts.
- `RETURNS return_type`: Specifies the type of value that the function will return.
- `AS`: Introduces the function body.
- `function_body`: This field contains the function's logic that will be executed when the function is called.
- `LANGUAGE lang_name`: Defines the name of the language in which the function is written.

## Example

Suppose we have a table `employees` containing employees names and salaries, with the following records:

| employee | salary |
| -------- | ------ |
| Sarah    | 50000  |
| Bailey   | 60000  |
| Valeria  | 70000  |

We want to create a function that calculates the average salary of all employees in the table. The function `avg_salary()` can be defined as follows:

```sql
CREATE FUNCTION avg_salary()
RETURNS NUMERIC AS $$
DECLARE
    average_salary NUMERIC;
BEGIN
    SELECT AVG(salary)
    INTO average_salary
    FROM employees;

    RETURN average_salary;
END;
$$ LANGUAGE plpgsql;
```

Here the `average_salary` variable is used to store the result of the AVG(salary) calculation, where the function will return the average salary.

To call the `avg_salary()` function and get the average salary, use the `SELECT` statement as follows:

```sql
SELECT avg_salary();
```

The above code will call the `avg_salary()` function and return all the employees calculated average salaries in the `employee` table.

```shell
| average_salary |
|----------------|
| 60000.0000     |
```
