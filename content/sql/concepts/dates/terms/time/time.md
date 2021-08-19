---
Title: "TIME()"
Description: "Converts timestamps to time (hh:mm:ss)."
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
---
 
The `TIME()` function allows us to extract just the time portion of a time string, which consists of the hour, minute, and second (hh:mm:ss).

Similarly, we can query the time with:

```sql
SELECT TIME(order_time), 
   COUNT(*) AS 'count_baked_goods'
FROM baked_goods
GROUP BY TIME(order_time);
```


## Code Example

```sql
SELECT student_name AS 'student',
  overall_gpa AS 'gpa',
  is_honor_student AS 'Honor Student'
FROM students;
```
