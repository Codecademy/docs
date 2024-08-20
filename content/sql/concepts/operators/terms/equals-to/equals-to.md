---
Title: 'Equals To'
Description: 'Queries for items equal to a specified condition.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Operators'
  - 'Database'
  - 'Queries'
  - 'SQLite'
  - 'MySQL'
  - 'PostgreSQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
  - 'paths/design-databases-with-postgresql'
---

The **`EQUAL TO`** operator is used to compare the equality of two expressions, used with the `WHERE` clause.

## Syntax

```pseudo
SELECT column1, column2, ...
FROM table_name
WHERE column1 = condition;
```

The equal to operator `=` can be combined with other comparison operators to check for the following:

- `>=`: Greater than or equal to
- `<=`: Less than or equal to
- `!=`: Not equal

## Example

Return employees that have employee IDs equal to 100 in the table `Employ`:

```sql
# Create a table named 'employ'
CREATE TABLE employ (employ_name VARCHAR(30), employ_id INT PRIMARY KEY);

# Insert some stocks into the table
INSERT INTO employ (employ_name, employ_id) VALUES
('John', 100),
('Janet', 101),
('Joe', 102)

# Use the EQUAL TO operator to find employees with a specific ID
SELECT employ_name, employ_id FROM employ WHERE employ_id = '100';
```
The query results with the following result:

```shell
employ_name, employ_id
'John', 100 
```
