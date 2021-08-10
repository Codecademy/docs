---
Title: LIKE
Description: "Perform case-sensitive pattern matching on TEXT data through the use of wildcard characters."
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
CatalogContent:
  - "learn-sql"
  - "paths/analyze-data-with-sql"
  - "paths/design-databases-with-postgresql"
---



Perform case-sensitive pattern matching on `TEXT` data through the use of wildcard characters.

## Syntax

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name LIKE pattern;
```

`LIKE` is a special operator used with the `WHERE` clause to search for a specific pattern in a column.

## Wildcard `%`

The `%` wildcard can be used in a `LIKE` operator pattern to match zero or more unspecified character(s).

```sql
SELECT name
FROM movies
WHERE name LIKE 'The%';
```

The given query will match any movie that begins with `The`, followed by zero or more of any characters.

## Wildcard `_`

The `_` wildcard can be used in a `LIKE` operator pattern to match any single unspecified character.

```sql
SELECT name
FROM movies
WHERE name LIKE '_ove';
```

The given query will match any movie which begins with a single character, followed by `ove`.

## Example 1

To pattern match all match any movie that begins with `Star` in its title, like `'Star Wars'` and `'Star Trek'`.

```sql
SELECT name
FROM movies
WHERE name LIKE 'Star%';
```

## Example 2

To pattern match all sequences of characters in the `item_name` column from the `inventory` folder that contain `abc` anywhere in the sequence:
```sql
SELECT *
FROM inventory
WHERE item_name LIKE `%abc%`;
```

## Example 3

To pattern match all sequences of characters in the `item_name` column from the `inventory` folder that end with `abc`:

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
