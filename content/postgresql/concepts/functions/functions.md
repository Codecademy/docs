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

**`Functions`** in PostgreSQL are reusable sets of SQL and procedural commands stored on the database server. They are also referred to as Stored Procedures. They enable us to perform executions within the database within a single function that usually requires several commands and round trips.

PostgreSQL supports functions in various languages, such as SQL, PL/pgSQL, C, Python, and more.

## Syntax

Here's the basic syntax used to define a function:

```pseudo
CREATE [OR REPLACE] FUNCTION function_name (parameters) 
RETURNS return_type AS $$
   DECLARE
      < variable_declaration >
      [...]
   BEGIN
      < function_body >
      [...]
      RETURN { variable_name | value } ;
   END; 
   $$ LANGUAGE lang_name;
```

In this syntax:

* `function_name` refers to the name of the function.

* [OR REPLACE] option allows you to update an existing function.

* In `parameters`, list out the parameters that the function takes in. A function can have zero or more parameters.

* Define the datatype of the returned value after `returns`. The `return_type` could be a base, composite, domain type, or even reference a table column's type.

* The `AS` keyword is used when defining a standalone function.

* `function_body` contains the logic of the function that will be executed.

* `language lang_name` defines the name of the language that the function is implemented in. Note that PostgreSQL supports many languages including  SQL, C, PL/pgSQL, or the name of a user-defined procedural language.


## Example

Supposed we have a table `employees` containing the employees' names and salaries, with the following records:

 `employee` | `salary` |
 ---------- | -------- |
 Sarah       | 50000     |
 Bailey       | 60000     |
 Valeria        | 70000     |


We would like to create a function that calculates the average salary of all the employees in the table. Our function `avg_salary()` can be defined as follows:

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

Breaking down the syntax:

- The function name `avg_salary()` is declared following the command `CREATE FUNCTION`. It accepts zero parameters.
- The data type of the returned value is `NUMERIC`
- The code block containing the declaration and the logic of the function is placed between a pair of `$$`
- In the declaration section, declare a variable `average_salary` that stores the number of films from the `employees` table.
- In the body, use the `select into` statement to select the average salary of the employees and assign it to the `average_salary` variable. At the end, use the return statement to `average_salary`

Call the function to get the average salary:

```sql
SELECT avg_salary();
```

The output will be:

 average_salary | 
 ---------------- | 
60000.0000        | 
