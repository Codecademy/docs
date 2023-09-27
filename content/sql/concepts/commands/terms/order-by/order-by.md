Title: 'ORDER BY'
Description: 'Sorts the result set by a particular column either alphabetically or numerically.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'PostgreSQL'
  - 'MySQL'
  - 'SQLite'
  - 'Tables'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`ORDER BY`** command sorts the result set by a particular column either alphabetically or numerically.

## Syntax

```pseudo
SELECT column_name
FROM table_name
ORDER BY column_name ASC | DESC;
```
It's also possible to `ORDER BY` **multiple columns**: 
> _by seperating with a comma_
```
SELECT column_name_1
FROM table_name
ORDER BY column_name_1 ASC | DESC, column_name_2 ASC | DESC;
```
-  assuming **_column_name_1_** and **_column_name_2_** exist in **table_name**


`ORDER BY` can be set in two ways:

- `ASC` is a keyword used to sort the results in ascending order (default).
- `DESC` is a keyword used to sort the results in descending order.

## Example

The query below will sort by `birth_date`, in descending order:

```sql
SELECT *
FROM contacts
ORDER BY birth_date DESC;
```
