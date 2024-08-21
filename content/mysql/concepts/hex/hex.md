---
Title: 'HEX()'
Description: 'Returns a hexadecimal string representation of a given string or numeric argument.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Database'
  - 'MySQL'
  - 'Strings'
  - 'Numbers'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`HEX()`** function in MySQL takes an input and returns its equivalent hexadecimal representation. This input can be either a string or a numeric value.

When the input is a string, the resulting hexadecimal representation will, by default, be a binary string. In the output, each byte of each character in the original string argument is represented by a corresponding pair of hexadecimal digits. The resulting hexadecimal string can also be converted back into the original string by using the `UNHEX()` function.

When the input is a decimal number, HEX(N) and CONV(N, 10, 16) produce the same hexadecimal output. The hexadecimal result from HEX(N) can be converted back to the original number using CONV(HEX(N), 16, 10).

 ## Syntax

```pseudo
HEX('string');
HEX(99);
```

## Examples

The following example uses the `HEX()` function to convert the `codecademy` string to hexadecimal.

```sql
SELECT HEX('codecademy');
```

The result looks like this:

| HEX('codecademy')   |
| ------------------- |
| 636F6465636164656D79 |

This next example instead passes a numeric value to the function.

```sql
SELECT HEX(123456789);
```

The resulting output is this:

| HEX(123456789) |
| -------------- |
| 75BCD15        |

## Detailed Example

The `HEX()` function can also be used with columns in a table.

### Creating the Table

```sql
CREATE TABLE employees (
  last_name VARCHAR(50),
  employee_id INT
);
```

### Inserting Data

```sql
INSERT INTO employees (last_name, employee_id) VALUES
('Smith', 40388),
('Jones', 80666),
('Brown', 64695),
('Miller', 23088),
('Williams', 15312);
```

To verify the data was inserted correctly, run the following.

```sql
SELECT * FROM employees;
```

The resulting table looks like this:

| last_name | employee_id |
| --------- | ----------- |
| Smith     | 40388       |
| Jones     | 80666       |
| Brown     | 64695       |
| Miller    | 23088       |
| Williams  | 15312       |

### Using Hex() on a Data Column

Now, to retrieve the data in the last_name column as hexadecimal, use the `HEX()` function.

```sql
SELECT last_name, HEX(last_name) FROM employees;
```

The expected output would then be:

| last_name | HEX(last name)   |
| --------- | ---------------- |
| Smith     | 536D697468       |
| Jones     | 4A6F6E6573       |
| Brown     | 42726F776E       |
| Miller    | 4D696C6C6572     |
| Williams  | 57696C6C69616D73 |