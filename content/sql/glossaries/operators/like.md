---
Title: LIKE
Subjects:
  - "Data Science"
  - "Computer Science"
Tags:
  - "Operators"
  - "Database"
  - "Queries"
  - "SQLite"
  - "MySQL"
  - "PostgreSQL"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-sql"
  - "https://www.codecademy.com/learn/paths/analyze-data-with-sql"
  - "https://www.codecademy.com/learn/paths/design-databases-with-postgresql"
---

## Definition
Allows the user to perform case-sensitive pattern matching on `TEXT` data through the use of wildcard characters.

## Syntax
SELECT name

FROM movies

WHERE name LIKE 'Star%';
The given query will match any movie that begins with `Star` in its title, like Star Wars and Star Trek.

## % Wildcard

The `%` wildcard can be used in a `LIKE` operator pattern to match zero or more unspecified character(s).

SELECT name

FROM movies

WHERE name LIKE 'The%';
The given query will match any movie that begins with `The`, followed by zero or more of any characters.

## _ Wildcard

The `_` wildcard can be used in a `LIKE` operator pattern to match any single unspecified character.

SELECT name

FROM movies

WHERE name LIKE '_ove';
The given query will match any movie which begins with a single character, followed by `ove`.


## Example 1
To pattern match all sequences of characters in the `item_name` column from the `inventory` folder that begin with `abc`:
```sql
SELECT *
FROM inventory
WHERE item_name LIKE `abc%`;
```

## Example 2
To pattern match all sequences of characters in the `item_name` column from the `inventory` folder that contain `abc` anywhere in the sequence:
```sql
SELECT *
FROM inventory
WHERE item_name LIKE `%abc%`;
```

## Example 3
To pattern match all sequences of characters in the `item_name` column from the `inventory` folder that end with `aa`:
```sql
SELECT *
FROM inventory
WHERE item_name LIKE `%abc`;
```

## Example 4
To pattern match all sequences of characters in the `item_name` column from the `inventory` folder that contain `abc` in specifically the second position of the sequence:
```sql
SELECT *
FROM inventory
WHERE item_name LIKE `_abc%`;
```

## Example 5
To pattern match all sequences of characters in the `item_name` column from the `inventory` folder that begin with `abc` with a length of at least 3 characters in the sequence:
```sql
SELECT *
FROM inventory
WHERE item_name LIKE `abc__%`;
```

## Example 6
To pattern match all sequences of characters in the `item_name` column from the `inventory` folder that contain begin with `abc` and end with `xyz`:
```sql
SELECT *
FROM inventory
WHERE item_name LIKE `abc%xyz`;
```
