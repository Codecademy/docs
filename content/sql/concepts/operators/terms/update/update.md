---
Title: 'UPDATE'
Description: 'Modifies existing records in a table according to specified conditions.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'PostgreSQL'
  - 'MySQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`UPDATE`** statement in SQL is used to modify existing records in a table. This powerful **Data Manipulation Language (DML)** command allows developers to update one or multiple rows simultaneously.

## Syntax

```pseudo
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

- `table_name`: The name of the table containing the data to be updated.
- `SET`: Specifies the columns to update and their new values.
- `condition`: An optional clause that specifies which rows to update. If omitted, all rows in the table are updated.

## Example

Let's say there's a table `Employees`:

| ID  | Name  | Department | Salary |
| --- | ----- | ---------- | ------ |
| 1   | John  | HR         | 50000  |
| 2   | Alice | IT         | 60000  |
| 3   | Bob   | Sales      | 45000  |

To update Bob's salary in the Sales department, the following query can be used:

```sql
UPDATE Employees
SET Salary = 47000
WHERE Name = 'Bob' AND Department = 'Sales';
```

Now, the updated table will be as follows:

| ID  | Name  | Department | Salary |
| --- | ----- | ---------- | ------ |
| 1   | John  | HR         | 50000  |
| 2   | Alice | IT         | 60000  |
| 3   | Bob   | Sales      | 47000  |
