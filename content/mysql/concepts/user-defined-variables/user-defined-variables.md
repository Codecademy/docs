---
Title: 'User-Defined Variables'
Description: 'Enables users to store and retrieve values during a specific session.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Database'
  - 'MySQL'
  - 'Values'
  - 'Variables'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

In MySQL, **user-defined variables** can be used to store a value in a specific statement and later retrieve it in another statement. These variables can be useful for storing intermediate results, passing data between statements, and enhancing the functionality of MySQL queries. They are also session-specific, meaning the values can only be used within the current session and will not be available in future sessions or stored in the database.

## Syntax

The `SET` statement is used to declare a user-defined variable and assign a value to it. Then, the `SELECT` statement is used to retrieve the value of the variable:

```pseudo
SET @variable_name = value;
SELECT @variable_name;
```

- `variable_name`: The name of the variable defined by the user.
- `value`: The value assigned to the variable.

## Example

The following example demonstrates the use of a user-defined variable in MySQL:

```sql
-- Create a table named 'stocks_table'
CREATE TABLE stocks_table (
        name VARCHAR(30),
        price DECIMAL(8, 2)
);
```

Then, some stocks are inserted into the table:

```sql
INSERT INTO stocks_table (name, price)
VALUES
('Alphabet', 589.45),
('Apple', 398.23),
('Nvidia', 1237.78),
('Tesla', 1089.25);
```

Next, a user-defined variable is declared to store the total number of stocks and then used to retrieve the stored result:

```sql
SET @total_products = (SELECT COUNT(*) FROM stocks_table);
SELECT @total_products;
```

The output of the `SELECT` statement will be:

| @total_products |
| --------------- |
| 4               |
