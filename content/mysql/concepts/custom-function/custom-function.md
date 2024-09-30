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

**`Custom Functions`** are created to perform specific tasks. These functions contain logic within a set of SQL statements, improving reusability and simplifying complex queries.

## Syntax

```pseudo
DELIMITER //

CREATE FUNCTION function_name(parameters)
RETURNS return_type
DETERMINISTIC
BEGIN
    -- logic goes here
    RETURN
END //

DELIMITER ;
```

- `function_name`: Name of the function that is declared.
- `return_type`: Type of value returned by the function.
- `parameters`: Parameters that are passed to the function.
- `logic`: The operation performed by the function

## Example

The below example creates a custom function called `calculate_age,` which is used to calculate a person's age.

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

The above query will return the following output:

| Age |
| --- |
| 34  |
