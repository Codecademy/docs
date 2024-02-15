---
Title: 'Aggregate Functions'
Description: 'In SQL, aggregate functions perform a calculation on a set of values and return a single value. They are often used with the GROUP BY clause of the SELECT statement. Note: Except for COUNT(), aggregate functions ignore all NULL values. List all the years and their number of movies, but only the years with more than 5 movies: sql SELECT year, COUNT() FROM movies'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Documentation'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

In SQL, aggregate functions perform a calculation on a set of values and return a single value. They are often used with the `GROUP BY` clause of the `SELECT` statement.

**Note:** Except for `COUNT(*)`, aggregate functions ignore all `NULL` values.

## Example

List all the years and their number of movies, but only the years with more than 5 movies:

```sql
SELECT year,
  COUNT(*)
FROM movies
GROUP BY year
HAVING COUNT(*) > 5;
```
