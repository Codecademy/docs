---
Title: 'TRUNCATE'
Description: 'Deletes all rows from a table while retaining the table structure.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Data'
  - 'Database'
  - 'Functions'
  - 'SQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

**`TRUNCATE`** is a SQL statement used to quickly delete all rows from a table while retaining the table structure. Unlike the **`DELETE`** statement, `TRUNCATE` does not log individual row deletions and does not generate triggers, making it faster for large datasets.

## Key Characteristics

- _Performance_: `TRUNCATE` is more efficient than `DELETE` because it uses minimal logging.
- _Data Integrity_: It resets identity columns (e.g., `AUTO_INCREMENT`) to their seed values.
- _Irreversibility_: `TRUNCATE` operations cannot be rolled back in most database systems, as it does not log row-level changes.
- _Constraints_: Cannot truncate a table that is referenced by a foreign key.

## Comparison: TRUNCATE vs. DELETE

| Feature               | `TRUNCATE`                    | `DELETE`                  |
| --------------------- | ----------------------------- | ------------------------- |
| Row Logging           | No                            | Yes                       |
| Triggers              | Not activated                 | Activated                 |
| Rollback              | Not supported in many systems | Supported                 |
| Identity Column Reset | Yes                           | No                        |
| Performance           | Faster                        | Slower for large datasets |

## Syntax

```pseudo
TRUNCATE TABLE table_name;
```

- `table_name`: Specifies the name of the table to truncate.

> **Note:** Use `TRUNCATE` carefully in production environments, as it cannot be undone.

## Example

The `TRUNCATE` statement can be used to clear all records from a table while retaining its structure. For instance, to remove all data from a table named `employee_data`:

```sql
TRUNCATE TABLE employee_data;
```

This removes all rows from the `employee_data` table without affecting the table's schema or structure.
