---
Title: "INNER JOIN"
Description: "Returns a result set off all rows that have matching values in both tables, omits rows where match fails."
Subjects:
  - "Data Science"
Tags:
  - "Database"
  - "Queries"
  - "PostgreSQL"
  - "MySQL"
  - "SQLite"
CatalogContent:
  - "learn-sql"
  - "paths/analyze-data-with-sql"
  - "paths/design-databases-with-postgresql"
---

 

Returns a result set of all rows that have matching values in both tables, omits rows where match fails.

## Example

To create a result set of every row where student IDs match in both tables and only includes last name, first name, and both GPAs:

```sql
SELECT
  students.last_name,
  students.first_name,
  students.overall_gpa,
  transfer_data.overal_gpa
FROM students
INNER JOIN transfer_data 
  ON students.student_id = transfer_data.student_id;
```
