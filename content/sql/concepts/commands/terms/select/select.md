---
Title: 'SELECT'
Description: 'Every SQL query will begin with the `SELECT` command to fetch data from one or more tables.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'PostgreSQL'
  - 'MySQL'
  - 'SQLite'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
  - 'paths/design-databases-with-postgresql'
---

Every SQL query will begin with the `SELECT` command to fetch data from one or more tables.

## Syntax

The `SELECT` command is followed by a list of column name to be returned from the table(s) listed in the `FROM` clause:

```sql
SELECT column1, column2, ... columnN FROM table;
```

`SELECT` can also use the special `*` character to represent all columns from the table(s):

```sql
SELECT * FROM table;
```

**Note:** It is best practice to never rely on column order when using `*`.

## Examples

Select all columns from `table1` and `table2`:

```sql
SELECT * FROM table1 INNER JOIN table2 ON table1.columnA = table2.columnB;
```

**Note:** When selecting all columns from more than one table, if column names are duplicated across tables this will generate an error.

Select all columns from `table1` and named columns from `table2`:

```sql
SELECT table1.*, table2.columnA AS colA, table2.columnB FROM table1 INNER JOIN table2 ON table1.columnA = table2.columnB;
```

**Note:** If a column name used from `table2` duplicates one in `table1` it should be used with an alias as in the example.
