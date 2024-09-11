---
Title: 'Rollback'
Description: 'Undoes any work performed in the current transaction. It can also be used to undo work performed by in-doubt transactions.'
Subjects:
  - 'Data Science'
Tags:
  - 'Database'
  - 'Documentation'
  - 'Functions'
  - 'Queries'
  - 'PostgreSQL'
  - 'MySQL'
  - 'SQLite'
  - 'Tables'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The SQL **rollback** command undoes work performed in the current **transaction** to a **savepoint** or to the last **commit** to the database. An SQL transaction is a series of one or more SQL statements in the current session. 
> **Note:** For info on how to start and commit a transaction, see the [MySQL documentation](https://dev.mysql.com/doc/refman/8.4/en/commit.html). 

Therefore, the rollback procedure allows a user to reset the work to a previous point without applying these statements to the database.

## Syntax
```sql
ROLLBACK [WORK] CLAUSE
```

| CLAUSE | Description
| --- | --- |
| TO SAVEPOINT savepoint_name | (optional) Resets database to an established savepoint `savepoint_name` within the current transaction. These savepoint names can be created using the command `SAVEPOINT savepoint_name;`. |

### Rollback Current Transaction
The command can be entered alone to end and undo any changes in the current transaction.
```sql
ROLLBACK;
--Or, for compatability with some SQL standards:
ROLLBACK WORK;
```

### Rollback Current Transaction To Savepoint
To rollback to a specific savepoint, follow the syntax below.

```sql
ROLLBACK [WORK] TO SAVEPOINT savepoint_name;
```

> [!CAUTION]  
> Certain statements cannot be rolled back once performed, such as creating, dropping, or altering tables and databases. For more info see the [MySQL documentation](https://dev.mysql.com/doc/refman/8.4/en/cannot-roll-back.html).

## Example
Given table_1 contains this data:
| id | dob | name |
| --- | --- | --- |
| 1 | 11/16/2001 | Jolly Old Chap |
| 2 | 1/12/2000 | Jolly Young Chap |
```sql
--Create a savepoint
SAVEPOINT theBeginning
--Fix Young Chap's birthday to be younger than Old Chap
UPDATE table_1
    SET dob = "1/21/2024"
SELECT * FROM table_1;
```
This prints the following:
| id | dob | name |
| --- | --- | --- |
| 1 | 1/21/2024 | Jolly Old Chap |
| 2 | 1/21/2024 | Jolly Young Chap |

Oops! We accidentally set everyone's birthday to 1/21/2024!
Let's rollback to our savepoint and try again.
```sql
ROLLBACK TO SAVEPOINT theBeginning
UPDATE table_1
    SET dob = "1/21/2024"
    WHERE id = 2
SELECT * FROM table_1;
```

This prints the following:
| id | dob | name |
| --- | --- | --- |
| 1 | 11/16/2001 | Jolly Old Chap |
| 2 | 1/12/2024 | Jolly Young Chap |