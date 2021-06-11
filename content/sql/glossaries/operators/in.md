---
Title: IN
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
Allows the user to specify multiple values in `WHERE` clause.

## Syntax
SELECT production_city

FROM movies

WHERE name IN ('Los Angeles', 'Atlanta', 'New York');
The given query will match any movie that begins with `Star` in its title, like Star Wars and Star Trek.

## Example 1
To pattern match all sequences of characters in the `item_name` column from the `inventory` folder that begin with `abc` with a length of at least 3 characters in the sequence:
```sql
SELECT *
FROM inventory
WHERE item_name LIKE `abc__%`;
```

## Example 2
To pattern match all sequences of characters in the `item_name` column from the `inventory` folder that contain begin with `abc` and end with `xyz`:
```sql
SELECT *
FROM inventory
WHERE item_name LIKE `abc%xyz`;
```
