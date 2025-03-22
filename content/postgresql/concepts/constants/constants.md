---
Title: 'Constants'
Description: 'Constants are fixed values that do not change during execution.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'CRUD'
  - 'Database'
  - 'PostgreSQL'
  - 'Queries'
CatalogContent:
  - 'paths/analyze-data-with-sql'
  - 'paths/data-science'
---

In PostgreSQL, **constants** are fixed values that do not change during execution. They are primarily used in queries and expressions to represent literal values like strings, integers, and boolean values. Constants are mostly used to improve readability and simplify code in functions, `WHERE` clauses, and `SELECT` statements.

## Syntax

In PL/pgSQL, the below syntax can be used to define a constant within a query:

```pseudo
constant_name CONSTANT data_type := expression;
```

- `constant_name`: It is the name of the constant used within the query.
- `CONSTANT`: It is the keyword used for representing a constant.
- `data_type`: It specifies the type of data that the constant holds.
- `:=`: It is an assignment [operator](https://www.codecademy.com/resources/docs/postgresql/operators) used in PL/pgSQL.
- `expression`: It represents the value that the constant will be initialized with.

## Example

Here's an example of how constants can be defined in PostgreSQL:

```sql
DO $$
DECLARE
  -- Declaring a constant with 'FLOAT' as the data type
  pi_value CONSTANT FLOAT := 3.14159;
  -- Declaring a constant with 'TEXT' (string) as the data type
  message CONSTANT TEXT := 'Hello, PostgreSQL!';
BEGIN
  -- Using the constant in a query
  RAISE NOTICE 'Value of pi: %, Message: %', pi_value, message;
END;
$$;
```

When the above code is executed, PostgreSQL prints the following message:

```shell
NOTICE: Value of pi: 3.14159, Message: Hello, PostgreSQL!
```

Here, the constants `pi_value` and `message` are defined.
