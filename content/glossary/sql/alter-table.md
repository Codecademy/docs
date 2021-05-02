<!--
---
Title: "ALTER TABLE"
Subjects:
  - "data science"
Tags:
  - "data science"
  - "database"
  - "queries"
  - "table"
  - "postgressql"
  - "mysql"
  - "sqlite"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-sql"
  - "https://www.codecademy.com/learn/sql-table-transformation"
  - "https://www.codecademy.com/learn/paths/design-databases-with-postgresql"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---
-->

## Definition 
Adds, deletes, modifies or changes the data type of a column in a table.

## Code Example

Beginning table:

| student_id | name   | address   | last_terms_grades | overall_gpa |
| ---------- | ------ | --------- | ----------------- | ----------- |
| 10001      | tim    | 123 R Ave |  2.4              | 3.1         |
| 10002      | amy    | 789 T St  |  3.2              | 3.8         |

```sql
ALTER TABLE Students
    ADD exam_grade INT(3);
```

After `ADD`ing the new column `exam_grade`:

| student_id | name   | address   | last_terms_grades | overall_gpa | exam_grade |
| ---------- | ------ | --------- | ----------------- | ----------- | ---------- |
| 10001      | tim    | 123 R Ave |  2.4              | 3.1         | null       |
| 10002      | amy    | 789 T St  |  3.2              | 3.8         | null       |

```sql
ALTER TABLE Students
    DROP COLUMN last_terms_grades;
```

After `DROP`ing the column last_terms_grades:

| student_id | name   | address   | overall_gpa | exam_grade |
| ---------- | ------ | --------- | ----------- | ---------- |
| 10001      | tim    | 123 R Ave | 3.1         | null       |
| 10002      | amy    | 789 T St  | 3.8         | null       |
