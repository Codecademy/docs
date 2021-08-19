---
Title: "DATE()"
Description: "Converts timestamps to dates (YYYY-MM-DD)."
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

The `DATE()` function allows us to extract just the date portion of a time string, which consists of the year, month, and day (YYYY-MM-DD).

## Syntax

```sql
SELECT DATE('2022-09-01 17:38:22'); 
-- Result: 2022-09-01
```

## Example 

```sql
SELECT DATE(order_time), 
   COUNT(*) AS 'count_baked_goods'
FROM baked_goods
GROUP BY DATE(order_time);
```


Beginning table:

| student_id | name   | address   | last_terms_grades | overall_gpa |
| ---------- | ------ | --------- | ----------------- | ----------- |
| 10001      | Tim    | 123 R Ave |  2.4              | 3.1         |
| 10002      | Amy    | 789 T St  |  3.2              | 3.8         |

```sql
ALTER TABLE students
ADD exam_grade INT(3);
```

After `ADD`ing the new column `exam_grade`:

| student_id | name   | address   | last_terms_grades | overall_gpa | exam_grade |
| ---------- | ------ | --------- | ----------------- | ----------- | ---------- |
| 10001      | Tim    | 123 R Ave |  2.4              | 3.1         | null       |
| 10002      | Amy    | 789 T St  |  3.2              | 3.8         | null       |

```sql
ALTER TABLE students
DROP COLUMN last_terms_grades;
```

After `DROP`ing the column `last_terms_grades`:

| student_id | name   | address   | overall_gpa | exam_grade |
| ---------- | ------ | --------- | ----------- | ---------- |
| 10001      | Tim    | 123 R Ave | 3.1         | null       |
| 10002      | Amy    | 789 T St  | 3.8         | null       |
