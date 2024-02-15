---
Title: 'SELECT DISTINCT'
Description: 'Returns unique values in the specified column(s).'
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

Returns unique values in the specified column(s).

## Syntax

The `SELECT DISTINCT` statement specifies that the statement is going to be a query that returns unique values in the specified column(s).

```sql
SELECT DISTINCT column_name
FROM table_name;
```

## Example

For a table `teams` having five rows:

| city         | name      | wins | losses |
| ------------ | --------- | ---- | ------ |
| Cleveland    | Cavaliers | 22   | 50     |
| Los Angeles  | Lakers    | 42   | 30     |
| Los Angeles  | Clippers  | 47   | 25     |
| Golden State | Warriors  | 39   | 33     |
| Miami        | Heat      | 40   | 32     |

```sql
SELECT DISTINCT city
FROM teams;
```

The given query would return:

| city         |
| ------------ |
| Cleveland    |
| Los Angeles  |
| Golden State |
| Miami        |
