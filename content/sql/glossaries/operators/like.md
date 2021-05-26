---
Title: "SQL Operators: `LIKE`"
Subjects:
  - "Language Fluency"
  - "Code Foundations"
  - "Data Science"
Tags:
  - "Database"
  - "Queries"
  - "Tables"
Catalog Content:
  - "https://www.codecademy.com/learn/paths/analyze-data-with-sql"
  - "https://www.codecademy.com/learn/paths/design-databases-with-postgresql"
---

## Definition
***
Allows the user to perform case-sensitive pattern matching on `string` data through the use of wildcard characters.

## Syntax
***
SELECT column1, column2, ...
FROM table_name
WHERE column LIKE 'pattern%';

*OR*

SELECT column1, column2, ...
FROM table_name
WHERE column LIKE '%pattern%'

*OR*

SELECT column1, column2, ...
FROM table_name
WHERE column LIKE '%pattern'

*OR*

SELECT column1, column2, ...
FROM table_name
WHERE column LIKE 'pattern_';

*OR*

SELECT column1, column2, ...
FROM table_name
WHERE column LIKE '_pattern_';

*OR*

SELECT column1, column2, ...
FROM table_name
WHERE column LIKE '_pattern%';

*OR*

SELECT column1, column2, ...
FROM table_name
WHERE column LIKE 'pattern__%';

*OR*

SELECT column1, column2, ...
FROM table_name
WHERE column LIKE 'pattern1%pattern2';

## Example 1
***
Use `LIKE` as a `WHERE` condition to pattern match all sequences of characters in the `item_name` column from the `inventory` folder that begin with `abc`:
```codebyte/sql
SELECT *
FROM inventory
WHERE item_name LIKE `abc%`;
```

## Example 2
***
Use `LIKE` as a `WHERE` condition to pattern match all sequences of characters in the `item_name` column from the `inventory` folder that contain `abc` anywhere in the sequence:
```codebyte/sql
SELECT *
FROM inventory
WHERE item_name LIKE `%abc%`;
```

## Example 3
***
Use `LIKE` as a `WHERE` condition to pattern match all sequences of characters in the `item_name` column from the `inventory` folder that end with `aa`:
```codebyte/sql
SELECT *
FROM inventory
WHERE item_name LIKE `%abc`;
```

## Example 4
***
Use `LIKE` as a `WHERE` condition to pattern match all sequences of characters in the `item_name` column from the `inventory` folder that contain `abc` in specifically the second position of the sequence:
```codebyte/sql
SELECT *
FROM inventory
WHERE item_name LIKE `_abc%`;
```

## Example 5
***
Use `LIKE` as a `WHERE` condition to pattern match all sequences of characters in the `item_name` column from the `inventory` folder that begin with `abc` with a length of at least 3 characters in the sequence:
```codebyte/sql
SELECT *
FROM inventory
WHERE item_name LIKE `abc__%`;
```

## Example 5
***
Use `LIKE` as a `WHERE` condition to pattern match all sequences of characters in the `item_name` column from the `inventory` folder that contain begin with `abc` and end with `xyz`:
```codebyte/sql
SELECT *
FROM inventory
WHERE item_name LIKE `abc%xyz`;
```
