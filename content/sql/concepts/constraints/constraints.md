---
Title: "Contraints"
Subjects:
  - "Computer Science"
  - "Data Science"
Tags: 
  - "Comments"
  - "Documentation"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-sql"
  - "https://www.codecademy.com/learn/paths/computer-science"
  - "https://www.codecademy.com/learn/paths/data-science"
---

*Constraints* in SQL add information about how a column can be used after specifying the data type for a column. They can be used to tell the database to reject inserted data that does not adhere to a certain restriction. 

- `PRIMARY KEY` columns can be used to uniquely identify the row. Attempts to insert a row with an identical value to a row already in the table will result in a *constraint violation* which will not allow you to insert the new row.

- `UNIQUE` columns have a different value for every row. This is similar to `PRIMARY KEY` except a table can have many different `UNIQUE` columns.

- `NOT NULL` columns must have a value. Attempts to insert a row without a value for a `NOT NULL` column will result in a constraint violation and the new row will not be inserted.

- `DEFAULT` columns take an additional argument that will be the assumed value for an inserted row if the new row does not specify a value for that column.

The statement below sets constraints on the `celebs` table:

```sql
CREATE TABLE celebs (
   id INTEGER PRIMARY KEY, 
   name TEXT UNIQUE,
   date_of_birth TEXT NOT NULL,
   date_of_death TEXT DEFAULT 'Not Applicable'
);
```
