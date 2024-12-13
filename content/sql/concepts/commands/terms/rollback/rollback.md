---
Title: 'ROLLBACK'
Description: 'Undoes any work performed in the current transaction. It can also be used to undo work performed by in-doubt transactions.'
Subjects:
  - 'Data Science'
Tags:
  - 'Database'
  - 'Documentation'
  - 'Functions'
  - 'Queries'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

In SQL, the **`ROLLBACK`** command undoes work performed in the current transaction to a savepoint or to the last commit to the database. A SQL transaction is a series of one or more SQL statements in the current session.

Therefore, the rollback procedure allows a user to undo the work to a previous point without applying these statements to the database.

> Note: To learn more about how to start and commit a transaction, check out the [MySQL documentation](https://dev.mysql.com/doc/refman/8.4/en/commit.html).

## Syntax

```pseudo
ROLLBACK [WORK] [TO SAVEPOINT savepoint_name];
```

- `TO SAVEPOINT savepoint_name`: Resets the database to an established savepoint `savepoint_name` within the current transaction. These savepoint names can be created using the command `SAVEPOINT savepoint_name`.

### Rollback Current Transaction

The following syntax can be used to undo any changes in the current transaction:

```pseudo
ROLLBACK;
-- Or, for compatibility with some SQL standards:
ROLLBACK WORK;
```

### Rollback Current Transaction to Savepoint

To rollback to a specific savepoint, the following syntax can be used:

```pseudo
ROLLBACK [WORK] TO SAVEPOINT savepoint_name;
```

> Note: Certain statements cannot be rolled back once performed, such as creating, dropping, or altering tables and databases. For more info, check out the [MySQL documentation](https://dev.mysql.com/doc/refman/8.4/en/cannot-roll-back.html).

## Example

Here is a table `table_1` containing the following data:

| id  | dob        | name             |
| --- | ---------- | ---------------- |
| 1   | 11/16/2001 | Jolly Old Chap   |
| 2   | 1/12/2000  | Jolly Young Chap |

Next, the following code is used to fix Young Chap's birthday and make him younger than Old Chap:

```sql
UPDATE table_1
SET dob = "1/21/2024";
SELECT * FROM table_1;
```

This gives the following as the output:

| id  | dob       | name             |
| --- | --------- | ---------------- |
| 1   | 1/21/2024 | Jolly Old Chap   |
| 2   | 1/21/2024 | Jolly Young Chap |

However, the above output suggests that everyone's birthday has been accidentally set to `1/21/2024`.

To fix that, the following code is used to rollback the transaction and update the birthday correctly:

```sql
ROLLBACK;
UPDATE table_1
SET dob = "1/21/2024"
WHERE id = 2;
SELECT * FROM table_1;
```

This gives the following as the output:

| id  | dob        | name             |
| --- | ---------- | ---------------- |
| 1   | 11/16/2001 | Jolly Old Chap   |
| 2   | 1/21/2024  | Jolly Young Chap |

Finally, the following code adds another chap to the database and then rolls back the addition:

```sql
-- Create a savepoint, in case another error is made
SAVEPOINT first;

-- Add a new chap
INSERT INTO table_1 (name,dob)
  VALUES ("Jolly Medium Chap","3/22/2012");
SELECT name FROM table_1 WHERE id=3;

-- Gives "Jolly Medium Chap"

-- Create a new savepoint
SAVEPOINT second;

-- Change the name
UPDATE table_1
  SET name = "Jolly Rancher"
  WHERE id=3;
SELECT name FROM table_1 WHERE id=3;

-- Gives "Jolly Rancher"

-- The original name feels better. So, let's go ahead and rollback.
ROLLBACK TO SAVEPOINT second;
SELECT name FROM table_1 WHERE id=3;

-- Gives "Jolly Medium Chap"

-- There is no need of the new chap anymore. Let's just go back to the save with just two chaps.
ROLLBACK TO SAVEPOINT first;
SELECT * FROM table_1;
```

This would output the following table:

| id  | dob        | name             |
| --- | ---------- | ---------------- |
| 1   | 11/16/2001 | Jolly Old Chap   |
| 2   | 1/21/2024  | Jolly Young Chap |
