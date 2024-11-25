---
Title: 'Subscripts'
Description: 'Subscripts are used to access, update, or manipulate specific elements of an array by their position or index.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Database'
  - 'Data Structures'
  - 'PostgreSQL'
  - 'SQL'
CatalogContent:
  - 'paths/analyze-data-with-sql'
  - 'paths/data-science'
---

**Subscripts** are used to access, update or manipulate elements of an array by their position or index.

They provide a concise way to reference particular elements in one-dimensional or multi-dimensional arrays.

## Syntax

For a one-dimensional array, the following syntax is used:

```pseudo
array_name[subscript]
```

- `array_name`: The name of the array being accessed.
- `subscript`: The index position of the element to be accessed within the array.

Alternatively, for multi-dimensional array the following syntax is used:

```pseudo
array_name[subscript_1][subscript_2]...[subscript_n]
```

- `array_name`: The name of the array being accessed.
- `subscript_1, subscript_2, ..., subscript_n`: The index positions for each dimension of the array to access the specific element.

## Example

Suppose we have a table `students` with column name `grades` that stores a multi-dimensional array of test scores:

```sql
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    grades INTEGER[][]
);
```

Insert some data into the table:

```sql
INSERT INTO students (name, grades)
VALUES
    ('Bryan', ARRAY[[98, 60], [75, 52]]);
```

If we want to access Bryan's score, we will run the below query:

```sql
SELECT grades[2][2] AS second_subject_score
FROM students
WHERE name = 'Bryan';
```

The above code will return Bryan's score with the use of subscripts:

```shell
second_subject_score
----------------------
 52
```
