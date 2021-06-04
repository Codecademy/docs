---
Title: "SELECT"
Subjects:
  - "Data Science"
  - "Computer Science"
Tags:
  - "Database"
  - "Queries"
  - "PostgreSQL"
  - "MySQL"
  - "SQLite"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-sql"
  - "https://www.codecademy.com/learn/paths/analyze-data-with-sql"
  - "https://www.codecademy.com/learn/paths/design-databases-with-postgresql"
---

## Definition

Returns unique values in the specified column(s).

## Syntax

The `SELECT DISTINCT` statement specifies that the statement is going to be a query that returns unique values in the specified column(s).

```sql
SELECT DISTINCT column_name
FROM table_name;
```

## Example

For a table `teams` having five rows:

| city | name |
| --- | --- | 
| Cleveland | Cavaliers |
| Los Angeles | Lakers |
| Los Angeles | Clippers |
| Golden State | Warriors |
| Miami | Heat |

```sql
SELECT DISTINCT city
FROM teams;
```

The given query would return:

| city |
| --- |
| Cleveland |
| Los Angeles |
| Golden State |
| Miami |