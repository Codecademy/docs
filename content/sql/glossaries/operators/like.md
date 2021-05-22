---
Title: "SQL Operators: `LIKE`"
Subjects:
  - "Language Fluency"
  - "Code Foundations"
  - "Data Science"
Tags:
  - "Database"
  - "Queries"
  - "Tables"
Catalog Content:
  - "https://www.codecademy.com/learn/paths/analyze-data-with-sql"
  - "https://www.codecademy.com/learn/paths/design-databases-with-postgresql"
---

## Definition
***
The `LIKE` operator allows the user to perform pattern matching on `string` data through the use of wildcard characters.

## Syntax
***
LIKE %

*OR*

LIKE _
## Example 1
***
Use `LIKE` as a `WHERE` condition to pattern match all sequences of characters that begin with an `A`:
```codebyte/sql
WHERE name LIKE `A%`
```

## Example 2
***
Use `LIKE` as a `WHERE` condition to pattern match all sequences of characters that begin with an `A`:
```codebyte/sql
import random

print(random.randint(-25, 25))
```
