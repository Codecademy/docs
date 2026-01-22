---
Title: 'NOW()'
Description: 'Returns the current date and time.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'MySQL'
  - 'PostgreSQL'
  - 'SQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analize-data-with-sql'
---

The **`NOW()`** function returns the current date and time in timestamp format.

> **Note:** In other RDBMS like Microsoft SQL Server or SQLite, the function name or syntax may have slight variations.

## Syntax

```pseudo
NOW()
```

**Parameters:**

The `NOW()` function does not take any parameters.

**Return value:**

Returns the current date and time.

## Example 1

In this example, the current date and time is returned using the `NOW()` function:

```sql
SELECT NOW() as current_timestamp;
```

The [`AS`](https://www.codecademy.com/resources/docs/sql/commands/as) keyword is used to name the resulting column `current_timestamp` in the output:

| current_timestamp   |
| ------------------- |
| 2026-01-20 21:38:45 |

## Example 2

In this example, the following data is given in the `users` table:

| id  | username | email             | created_at          |
| --- | -------- | ----------------- | ------------------- |
| 1   | jdoe     | john@example.com  | 2026-01-10 10:00:00 |
| 2   | asmith   | alice@example.com | 2026-01-15 14:20:00 |

The `NOW()` function is used to capture the exact moment a new account is created in the users table.

```sql
INSERT INTO users (id, username, email, created_at)
VALUES (3, 'emiller', 'ethan@example.com', NOW());
```

The following query verifies the new user created:

```sql
SELECT * FROM users
WHERE username = 'emiller';
```

| id  | username | email             | created_at          |
| --- | -------- | ----------------- | ------------------- |
| 3   | emiller  | ethan@example.com | 2026-01-22 14:29:45 |
