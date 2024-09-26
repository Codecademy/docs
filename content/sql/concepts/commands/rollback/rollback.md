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

The SQL **`rollback`** command undoes work performed in the current **`transaction`** to a **`savepoint`** or to the last **`commit`** to the database. An SQL transaction is a series of one or more SQL statements in the current session.

> **Note:** For info on how to start and commit a transaction, see the [MySQL documentation](https://dev.mysql.com/doc/refman/8.4/en/commit.html).

Therefore, the rollback procedure allows a user to undo the work to a previous point without applying these statements to the database.

## Syntax

```pseudo
ROLLBACK [WORK] [TO SAVEPOINT savepoint_name];
```

| CLAUSE                      | Description                                                                                                                                                                                 |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TO SAVEPOINT savepoint_name | (optional) Resets database to an established savepoint `savepoint_name` within the current transaction. These savepoint names can be created using the command `SAVEPOINT savepoint_name;`. |

### Rollback Current Transaction

The command can be entered alone to end and undo any changes in the current transaction.

```pseudo
ROLLBACK;
--Or, for compatibility with some SQL standards:
ROLLBACK WORK;
```

### Rollback Current Transaction To Savepoint

To rollback to a specific savepoint, follow the syntax below.

```pseudo
ROLLBACK [WORK] TO SAVEPOINT savepoint_name;
```

> [!CAUTION]  
> **Note:** Certain statements cannot be rolled back once performed, such as creating, dropping, or altering tables and databases. For more info see the [MySQL documentation](https://dev.mysql.com/doc/refman/8.4/en/cannot-roll-back.html).

## Example

Given table_1 contains this data:
| id | dob | name |
| --- | --- | --- |
| 1 | 11/16/2001 | Jolly Old Chap |
| 2 | 1/12/2000 | Jolly Young Chap |

```sql
--Fix Young Chap's birthday to be younger than Old Chap
UPDATE table_1
SET dob = "1/21/2024";
SELECT * FROM table_1;
```

This gives the following:
| id | dob | name |
| --- | --- | --- |
| 1 | 1/21/2024 | Jolly Old Chap |
| 2 | 1/21/2024 | Jolly Young Chap |

Oops! you accidentally set everyone's birthday to 1/21/2024!

````sql
--Rollback the transaction
ROLLBACK;
--Try again, adding WHERE statement to update the correct chap
UPDATE table_1
SET dob = "1/21/2024"
WHERE id = 2;
SELECT * FROM table_1;

This gives the following:
| id | dob | name |
| --- | --- | --- |
| 1 | 11/16/2001 | Jolly Old Chap |
| 2 | 1/21/2024 | Jolly Young Chap |

You get a request to add another chap.

```sql
--Create a savepoint, in case you make another error
SAVEPOINT first;

--Add new chap
INSERT INTO table_1 (name,dob)
  VALUES ("Jolly Medium Chap","3/22/2012");
SELECT name FROM table_1 WHERE id=3;

--gives "Jolly Medium Chap"

--Create new savepoint
SAVEPOINT second;

--Change name
UPDATE table_1
  SET name = "Jolly Rancher"
  WHERE id=3;
SELECT name FROM table_1 WHERE id=3;

--gives "Jolly Rancher"

--Hmm...the original name was better. Go ahead and rollback.
ROLLBACK TO SAVEPOINT second;
SELECT name FROM table_1 WHERE id=3;

--gives "Jolly Medium Chap"

--But what is medium age anyway? Just go back to your save with just two chaps.
ROLLBACK TO SAVEPOINT first;
SELECT * FROM table_1;

````

This would get you back to the table below:
| id | dob | name |
| --- | --- | --- |
| 1 | 11/16/2001 | Jolly Old Chap |
| 2 | 1/21/2024 | Jolly Young Chap |
