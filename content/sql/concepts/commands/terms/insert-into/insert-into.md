---
Title: 'INSERT INTO'
Description: 'Adds new rows of data into a database table.'
Subjects:
  - 'Code Foundations'
  - 'Data Science'
Tags:
  - 'Database'
  - 'MySQL'
  - 'PostgreSQL'
  - 'Queries'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The SQL **`INSERT INTO`** statement adds new rows of data into a database table. It is one of the most common operations when working with relational databases, allowing developers to populate tables with meaningful data.

## SQL `INSERT INTO` Syntax

**General syntax:**

```pseudo
INSERT INTO table_name
VALUES (value1, value2, ...);
```

**Inserting multiple rows:**

```pseudo
INSERT INTO table_name
VALUES
  (value1, value2, ...),
  (value1, value2, ...);
```

**Inserting values into specific columns:**

```pseudo
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);
```

**Inserting default values using the `DEFAULT` keyword:**

```pseudo
INSERT INTO table_name
VALUES (value1, DEFAULT, value3, ...);
```

**Inserting from another table:**

```pseudo
INSERT INTO table_name (column1, column2)
SELECT column1, column2
FROM another_table
WHERE condition;
```

## Example 1: Inserting into All Columns Using SQL `INSERT INTO`

Suppose there is a table named `Employees`:

| EmployeeID | FirstName | LastName | Department |
| ---------- | --------- | -------- | ---------- |
| 1          | John      | Doe      | HR         |
| 2          | Jane      | Smith    | IT         |

This query uses SQL `INSERT INTO` to insert data into all columns in the `Employees` table:

```sql
INSERT INTO Employees
VALUES (3, 'Michael', 'Brown', 'Finance');
```

The output will be:

| EmployeeID | FirstName | LastName | Department |
| ---------- | --------- | -------- | ---------- |
| 1          | John      | Doe      | HR         |
| 2          | Jane      | Smith    | IT         |
| 3          | Michael   | Brown    | Finance    |

## Example 2: Inserting into Specific Columns Using SQL `INSERT INTO`

This query uses SQL `INSERT INTO` to insert data into specific columns in the `Employees` table:

```sql
INSERT INTO Employees (FirstName, LastName)
VALUES ('Emily', 'Clark');
```

The output will be:

| EmployeeID | FirstName | LastName | Department |
| ---------- | --------- | -------- | ---------- |
| 1          | John      | Doe      | HR         |
| 2          | Jane      | Smith    | IT         |
| 3          | Michael   | Brown    | Finance    |
| 4          | Emily     | Clark    | NULL       |

> **Note:** The `Department` column is `NULL` because no value was provided.

## Example 3: Inserting Multiple Rows Using SQL `INSERT INTO`

This query uses SQL `INSERT INTO` to insert multiple rows of data in the `Employees` table:

```sql
INSERT INTO Employees (FirstName, LastName, Department)
VALUES
  ('Chris', 'Evans', 'Marketing'),
  ('Anna', 'Taylor', 'HR'),
  ('David', 'Wilson', 'IT');
```

The output will be:

| EmployeeID | FirstName | LastName | Department |
| ---------- | --------- | -------- | ---------- |
| 1          | John      | Doe      | HR         |
| 2          | Jane      | Smith    | IT         |
| 3          | Michael   | Brown    | Finance    |
| 4          | Emily     | Clark    | NULL       |
| 5          | Chris     | Evans    | Marketing  |
| 6          | Anna      | Taylor   | HR         |
| 7          | David     | Wilson   | IT         |

## Frequently Asked Questions

### 1. How to use SQL `INSERT INTO`?

SQL `INSERT INTO` can be used to add new rows into a table by specifying values for all or selected columns. For example:

```sql
INSERT INTO Employees (FirstName, LastName, Department)
VALUES ('Alice', 'Johnson', 'Sales');
```

### 2. What is the purpose of SQL `INSERT INTO`?

The purpose of SQL `INSERT INTO` is to populate a database table with new records. It allows data entry during the initial creation of a database and also for ongoing updates when new information needs to be stored.

### 3. Does SQL `INSERT INTO` append?

Yes. SQL `INSERT INTO` always appends new rows to the table. It does not overwrite existing data. To modify existing rows, the `UPDATE` statement can be used.
