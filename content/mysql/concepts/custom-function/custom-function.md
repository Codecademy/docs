---
Title: 'Custom Function'
Description: 'Function created to perform a certain task.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Types'
  - 'PostgreSQL'
  - 'MySQL'
  - 'SQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

**`Custom Function`** are function created to perform some certain taks. These function contain logic in a set of SQL statement, they help in improving reusability and simplify complex queries.

## Syntax

```pseudo
DELIMITER //

CREATE FUNCTION function_name(parameters)
RETURNS return_type
DETERMINISTIC
BEGIN
    logic
END //

DELIMITER;
```

- `function_name` : Name of the function that is declared.
- `return_type`: Type of value returned by the function.
- `parameters`: Parameters that are passed to the function.
- `logic`: The operation performed by the function

## Example

The below example creates a custom function as `calculate_age` which is used to calculate age of a person.

```sql
DELIMITER //

CREATE FUNCTION calculate_age(dob DATE)
RETURNS INT
DETERMINISTIC
BEGIN
    DECLARE age INT;

    -- Calculate age based on the current date and date of birth
    SET age = YEAR(CURDATE()) - YEAR(dob) - (DATE_FORMAT(CURDATE(), '%m%d') < DATE_FORMAT(dob, '%m%d'));

    RETURN age;
END //

DELIMITER ;

SELECT calculate_age('1990-05-15') AS Age;
```

The output would be:

| Age |
| --- |
|34   |
