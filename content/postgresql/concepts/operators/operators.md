---
Title: 'Operators'
Description: 'Enable users to perform different operations on the data.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data'
  - 'Database'
  - 'Operators'
  - 'PostgreSQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

In PostgreSQL, **operators** enable users to perform different operations on the data in one or multiple tables in a [database](https://www.codecademy.com/resources/docs/general/database). They can be used for calculations, comparisons, joining, filtering, etc.

## Syntax

There are many operators that can be used in PostgreSQL. Here are some common ones:

### Comparison Operators

The following operators can be categorized as comparison operators:

```pseudo
// Equal to
SELECT * FROM table_name
WHERE column1 = 'North';

// Not Equal to
SELECT * FROM table_name
WHERE column1 != column2;

// Greater than
SELECT * FROM table_name
WHERE column1 > 10;

// Less than
SELECT * FROM table_name
WHERE column1 < 1000;
```

### Logical Operators

The following operators can be categorized as logical operators:

```pseudo
// AND
SELECT * FROM table_name
WHERE column1 >= 10 AND column1 <= 1000;

// OR
SELECT * FROM table_name
WHERE column1 = 'NORTH' OR 'WEST';

// NOT
SELECT * FROM table_name
WHERE NOT column1 = 'SOUTH';
```

## Examples

The following examples demonstrate the usage of operators in PostgreSQL.

Here's a table named `animals` to be used for the examples:

| `id` | `name` | `species` | `gender` | `age` |
| ---- | ------ | --------- | -------- | ----- |
| 01   | Niko   | monkey    | female   | 3     |
| 02   | Frank  | giraffe   | male     | 4     |
| 03   | Lyn    | lion      | female   | 6     |
| 04   | Tom    | elephant  | male     | 7     |

Here's a query that invokes some of the operators mentioned above:

```sql
SELECT * FROM animals WHERE gender = 'female' AND age >= 4;
```

The above query results in the following output:

| `id` | `name` | `species` | `gender` | `age` |
| ---- | ------ | --------- | -------- | ----- |
| 03   | Lyn    | lion      | female   | 6     |

Here's another query that invokes some operators:

```sql
SELECT * FROM animals WHERE NOT species = 'lion';
```

The above query produces the following output:

| `id` | `name` | `species` | `gender` | `age` |
| ---- | ------ | --------- | -------- | ----- |
| 01   | Niko   | monkey    | female   | 3     |
| 02   | Frank  | giraffe   | male     | 4     |
| 04   | Tom    | elephant  | male     | 7     |
