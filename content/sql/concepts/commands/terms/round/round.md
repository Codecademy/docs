---
Title: 'ROUND'
Description: 'Rounds a value to the nearest integer or to a specific number of decimals if an optional value is provided.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Types'
  - 'Integers'
  - 'Numbers'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`ROUND`** command rounds a value to the nearest integer or to a specific number of decimals if an optional value is provided.

## Syntax

```pseudo
ROUND(value, decimal_places)
```

If the optional `decimal_places` parameter is omitted, then the `value` is rounded with zero decimals.

## Example

The example below assumes there is a `grades` table with a column `test_scores` with values for all the exams administered in a semester, rounded to two decimal places:

```sql
SELECT names,
ROUND(AVG(test_scores), 2) AS semester_avg
FROM grades
GROUP BY names;
```
