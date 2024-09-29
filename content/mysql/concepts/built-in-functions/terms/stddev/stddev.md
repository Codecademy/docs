---
Title: 'STDDEV()'
Description: 'Returns sample standard deviation of a set of values.'
Subjects:
  - 'Data Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'MySQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`STDDEV()`** is a build-in function that is used to calculate sample standard deviation for a set of values.

## Syntax

```pseudo
STDDEV(column_name)
```

- `column_name`: column name for which the standard deviation is calculated.

## Example

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    marks DECIMAL(10, 2)
);

INSERT INTO students (id, name, marks) VALUES 
(1, 'Alice', 96),
(2, 'Bob', 80),
(3, 'Charlie', 85),
(4, 'David', 75),
(5, 'Eve', 100);

SELECT STDDEV(marks) AS "Sample standard deviation" FROM students;
```

The output would be:

| Sample standard deviation |
| ------------------------- |
|9.453041838477178          |
