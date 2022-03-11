---
Title: 'SELECT'
Description: 'Every SQL query will begin with the SELECT command to fetch data from one or more tables.'
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

The `SELECT` command is followed by one or more column names to be returned from the table(s) listed in the `FROM` clause:

```sql
SELECT column1, column2, ... columnN FROM table;
```

`SELECT` can also use the special `*` character to represent all columns from the table(s):

```sql
SELECT * FROM table;
```

**Note:** It is best practice to not rely on column order when using `*`.

## Examples

The following example selects all columns from `table1` and `table2` with an [`INNER JOIN`](https://www.codecademy.com/resources/docs/sql/joins), restricting the rows to where `table1.columnA` and `table2.columnB` are equal:

```sql
SELECT * FROM table1 INNER JOIN table2 ON table1.columnA = table2.columnB;
```

When selecting all columns from across multiple tables, duplicate column names will generate an error unless they are distinguished with an alias.

The next example selects all columns from `table1` and a named column, `columnA`, from `table2`. It is presumed that both tables have a column named `columnA` and, therefore, an alias should be used to avoid an error:

```sql
SELECT table1.*, table2.columnA AS colA, table2.columnB FROM table1 INNER JOIN table2 ON table1.columnA = table2.columnB;
```
