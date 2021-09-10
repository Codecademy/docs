---
Title: 'Constraints'
Description: 'Constraints in SQL are the rules applied to the values of individual columns. They add information about how a column can be used after specifying the data type for a column. They can be used to tell the database to reject inserted data that does not adhere to a certain restriction. Here are some of the constraints that can be set: - PRIMARY KEY columns can be used to uniquely identify the row. Attempts to insert a row with an identical value to a row already in the table will result in a constraint violation which will not allow you to insert the new row. - UNIQUE columns have a different value for every row. This is similar to PRIMARY KEY except a table can have many different UNIQUE columns. - NOT NULL columns must have a value. Attempts to insert a row without a value for a NOT NULL column will result in a constraint violation and the new row will not be inserted. - DEFAULT columns take an additional argument that will be the assumed value for an inserted row if the new row does not specify a value for that column. Note: There can be only one PRIMARY KEY column per table, but there can be multiple UNIQUE columns.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Comments'
  - 'Documentation'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

Constraints in SQL are the rules applied to the values of individual columns. They add information about how a column can be used after specifying the data type for a column. They can be used to tell the database to reject inserted data that does not adhere to a certain restriction.

Here are some of the constraints that can be set:

- `PRIMARY KEY` columns can be used to uniquely identify the row. Attempts to insert a row with an identical value to a row already in the table will result in a _constraint violation_ which will not allow you to insert the new row.

- `UNIQUE` columns have a different value for every row. This is similar to `PRIMARY KEY` except a table can have many different `UNIQUE` columns.

- `NOT NULL` columns must have a value. Attempts to insert a row without a value for a `NOT NULL` column will result in a constraint violation and the new row will not be inserted.

- `DEFAULT` columns take an additional argument that will be the assumed value for an inserted row if the new row does not specify a value for that column.

**Note:** There can be only one `PRIMARY KEY` column per table, but there can be multiple `UNIQUE` columns.

The statement below sets constraints on the `celebs` table:

```sql
CREATE TABLE celebs (
  id INTEGER PRIMARY KEY,
  name TEXT UNIQUE,
  grade INTEGER NOT NULL,
  age INTEGER DEFAULT 10
);
```

- `id` column is the `PRIMARY KEY`.
- `name` column is `UNIQUE`.
- `grade` column is `NOT NULL`.
- `age` column has a `DEFAULT` of 10.
