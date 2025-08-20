---
Title: 'FULL OUTER JOIN'
Description: 'Returns all rows from both tables being joined, regardless of whether they have matching values in the join condition.'
Subjects:
  - 'Code Foundations'
  - 'Data Science'
Tags:
  - 'Database'
  - 'Join'
  - 'PostgreSQL'
  - 'Queries'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The SQL **`FULL OUTER JOIN`** command returns all rows from both tables being [joined](https://www.codecademy.com/resources/docs/sql/joins), regardless of whether the tables have matching values in the join condition.

- If there is a match between the two tables, the joined row is shown.
- If there's no match, the result will still include the row, but with `NULL` values in the columns from the table that doesn’t have a match.

## Syntax

```pseudo
SELECT column_list
FROM table1
FULL OUTER JOIN table2
ON table1.common_column = table2.common_column;
```

In the syntax:

- `table1`, `table2`: The tables being joined.
- `common_column`: The column used to match rows between the tables.

## Example 1: Joining Customers and Orders Using SQL `FULL OUTER JOIN`

Suppose there are two tables:

Table 1: Customers

| CustomerID | Name    |
| ---------- | ------- |
| 1          | Alice   |
| 2          | Bob     |
| 3          | Charlie |

Table 2: Orders

| OrderID | CustomerID | Product |
| ------- | ---------- | ------- |
| 101     | 1          | Laptop  |
| 102     | 4          | Phone   |

Here is the query using SQL `FULL OUTER JOIN`:

```sql
SELECT Customers.CustomerID, Customers.Name, Orders.OrderID, Orders.Product
FROM Customers
FULL OUTER JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;
```

The output will be:

| CustomerID | Name    | OrderID | Product |
| ---------- | ------- | ------- | ------- |
| 1          | Alice   | 101     | Laptop  |
| 2          | Bob     | NULL    | NULL    |
| 3          | Charlie | NULL    | NULL    |
| 4          | NULL    | 102     | Phone   |

## Example 2: Joining Departments and Employees Using SQL `FULL OUTER JOIN`

Suppose there are two tables:

Table 1: Departments

| DeptID | DeptName |
| ------ | -------- |
| 10     | HR       |
| 20     | IT       |

Table 2: Employees

| EmpID | EmpName | DeptID |
| ----- | ------- | ------ |
| 1     | John    | 20     |
| 2     | Sarah   | 30     |

Here is the query using SQL `FULL OUTER JOIN`:

```sql
SELECT Departments.DeptID, Departments.DeptName, Employees.EmpID, Employees.EmpName
FROM Departments
FULL OUTER JOIN Employees
ON Departments.DeptID = Employees.DeptID;
```

The output will be:

| DeptID | DeptName | EmpID | EmpName |
| ------ | -------- | ----- | ------- |
| 10     | HR       | NULL  | NULL    |
| 20     | IT       | 1     | John    |
| NULL   | NULL     | 2     | Sarah   |

## Example 3: Joining Students and Courses Using SQL `FULL OUTER JOIN`

Suppose there are two tables:

Table 1: Students

| StudentID | Name |
| --------- | ---- |
| 101       | Alex |
| 102       | Emma |

Table 2: Courses

| CourseID | StudentID | CourseName |
| -------- | --------- | ---------- |
| C1       | 103       | Math       |
| C2       | 101       | Science    |

Here is the query using SQL `FULL OUTER JOIN`:

```sql
SELECT Students.StudentID, Students.Name, Courses.CourseID, Courses.CourseName
FROM Students
FULL OUTER JOIN Courses
ON Students.StudentID = Courses.StudentID;
```

The output will be:

| StudentID | Name | CourseID | CourseName |
| --------- | ---- | -------- | ---------- |
| 101       | Alex | C2       | Science    |
| 102       | Emma | NULL     | NULL       |
| 103       | NULL | C1       | Math       |

## Frequently Asked Questions

### 1. What are the 4 types of JOINs in SQL?

The four basic types of SQL joins are:

- **INNER JOIN**: Returns only rows where there is a match in both tables.
- **LEFT JOIN (LEFT OUTER JOIN)**: Returns all rows from the left table and matching rows from the right table; unmatched rows from the right show as `NULL`.
- **RIGHT JOIN (RIGHT OUTER JOIN)**: Returns all rows from the right table and matching rows from the left table; unmatched rows from the left show as `NULL`.
- **FULL OUTER JOIN**: Returns all rows from both tables, filling in `NULL` where matches don’t exist.

### 2. What does `(+)` mean in SQL JOINs?

The `(+)` symbol is used in Oracle SQL to indicate an outer join.

**Example:**

```sql
SELECT a.id, b.name
FROM tableA a, tableB b
WHERE a.id = b.id(+);
```

Here, `(+)` means a LEFT OUTER JOIN—it returns all rows from `tableA` and matches from `tableB`, inserting `NULL` where no match exists.

### 3. What’s the difference between CROSS JOIN and FULL OUTER JOIN?

- **CROSS JOIN**: Produces the **Cartesian product** of two tables, meaning every row from the first table is paired with every row from the second. If `tableA` has 3 rows and `tableB` has 4 rows, the result will have 12 rows.
- **FULL OUTER JOIN**: Combines rows from both tables based on a condition and includes unmatched rows, filling missing values with `NULL`.
