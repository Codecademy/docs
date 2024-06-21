---
Title: 'User Defined Variables'
Description: 'Create variables that can be stored and retrieved during a session.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'MySQL'
  - 'Variables'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

In MySQL, **User-Defined Variables** are used to store and retrieve values during a specific session. They can be used to store intermediate results, pass data between statements, and enhance the functionality of MySQL queries. User-defined variables are **session-specific**, meaning that their values can only be used within the current session and will not be available in future sessions or stored in the database.

## Syntax

To declare and use a user-defined variable in MySQL, follow the syntax below:

```pseudo
SET @variable_name = value;
SELECT @variable_name;
```

- `@variable_name`: the name of the variable defined by the user.

The `SET` statement assigns a value to the user-defined variable, and the `SELECT` statement retrieves the value of the variable.

## Example

The following example demonstrates the use of a user-defined variable in MySQL:

```sql
-- Create a stocks table
CREATE TABLE stocks_table (
        name VARCHAR(50),
        price DECIMAL(10, 2)
);
```

```sql
-- Insert stocks into the table
INSERT INTO stocks_table (name, price)
VALUES
('Alphabet', 589.45),
('Apple', 398.23),
('Nvidia', 1237.78),
('Tesla', 1089.25);
```

```sql
-- Declare a variable to store the total number of stocks
SET @total_products = (SELECT COUNT(*) FROM stocks_table);

-- Retrieve the value of the variable
SELECT @total_products;
```

The output of the SELECT statement will be:

| @total_products |
| --------------- |
| 4               |
