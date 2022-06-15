---
Title: 'GROUP BY'
Description: 'Groups a result set based on an aggregate function (COUNT(), MIN(), MAX(), SUM(), AVG()). It lists the number in each group.'
Subjects:
  - 'Data Science'
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

The **`GROUP BY`** command groups a result-set of rows, usually based on an [aggregate function](https://www.codecademy.com/resources/docs/sql/aggregate-functions).

## Syntax

```pseudo
SELECT column(s)
FROM table
GROUP BY column(s)
```

The aggregate function is usually applied on the same line as the [SELECT](https://www.codecademy.com/resources/docs/sql/commands/select) command.

## Example

The following example returns a result set of the number (count) of students from each country:

```sql
SELECT COUNT(student_name),
  birth_country
FROM students
GROUP BY birth_country;
```
