---
Title: 'Operator Invocations'
Description: 'Used to perform operations on the data using operators.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data'
  - 'Operators'
  - 'PostgreSQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/data-science-foundations'
  - 'paths/analyze-data-with-sql'
  - 'paths/design-databases-with-postgresql'
---

In PostgreSQL, **operator invocations** allow operations to be executed on data in one or multiple tables in a database. They can be used for calculations, comparisons, joining, filtering, etc.

> **Note:** These are common operators, but many others are available to use.

## Syntax

### Comparison Operators

```pseudo
--Equal
SELECT * from table_name
WHERE column1 = 'North';

--Not Equal
SELECT * from table_name
WHERE column1 = column2;

-- Greater Than (or Equal To)
SELECT * from table_name
WHERE column1 > 10;

-- Less Than (or Equal To)
SELECT * from table_name
WHERE column1 < 1000;
```

### Logical Operators

```pseudo
// AND
SELECT * FROM table_name
WHERE column1 >= 10 AND  column1 <= 1000;

// OR
SELECT * FROM table_name
WHERE column1 = 'North' OR 'WEST';

// NOT
SELECT * FROM table_name
WHERE NOT column1 = 'SOUTH';
```


## Example 1

Here's an example of operator invocations on data in the table `animals`. 

| `id` |  `name`  |  `species`  |  `gender`  | `age`  |
| ---- | -------- | ----------- | ---------- | ------ |
| 01   | Niko     | monkey      | female     | 3      |
| 02   | Frank    | giraffe     | male       | 4      |
| 03   | Lyn      | lion        | female     | 6      |
| 04   | Tom      | elephant    | male       | 7      |


```sql
SELECT * from animals
WHERE gender = 'female' AND age >= 4;
```

Output:

| `id` |  `name`  |  `species`  |  `gender`  | `age`  |
| ---- | -------- | ----------- | ---------- | ------ |
| 03   | Lyn      | lion        | female     | 6      |


## Example 2

Using that same table, here is another operator invocation example.

```sql
SELECT * from animals
WHERE NOT species = 'lion'; 
```

Output:

| `id` |  `name`  |  `species`  |  `gender`  | `age`  |
| ---- | -------- | ----------- | ---------- | ------ |
| 01   | Niko     | monkey      | female     | 3      |
| 02   | Frank    | giraffe     | male       | 4      |
| 04   | Tom      | elephant    | male       | 7      |