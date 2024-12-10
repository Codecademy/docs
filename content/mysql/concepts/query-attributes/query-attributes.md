---
Title: 'Query Attributes'
Description: 'Metadata associated with SQL queries in MySQL for plugins, debugging, or tracing without altering query behavior.'
Subjects:
  - 'Attributes'
  - 'Metadata'
  - 'SQL'
  - 'MySQL'
Tags:
  - 'MySQL'
  - 'Database'
  - 'Tables'
  - 'Data'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

In MySQL, **query attributes** allow you to add metadata to SQL queries. They help pass custom information, debug, and trace query execution.

These attributes do not change the behaviour of the query but provide additional context for tools or services interacting with the database.

## Syntax

In MySQL, query attributes are typically set using the `SET` statement. The syntax for adding a query attribute is as follows:

```pseudo
SET [GLOBAL|SESSION] query_attribute_name = 'value';
```

- `GLOBAL` or `SESSION`: Specifies whether the attribute applies globally for all sessions or just for the current session.
- `query_attribute_name`: Name of the query attribute.
- `value`: Represents the value assigned to the attribute.

## Example

Suppose we have a table called `transactions` that stores information about financial transactions:

| transaction_id | user_id | transaction_date | amount | status    |
| -------------- | ------- | ---------------- | ------ | --------- |
| 1001           | 101     | 2024-01-02       | 250.00 | completed |
| 1002           | 102     | 2024-01-05       | 400.00 | failed    |
| 1003           | 101     | 2024-02-01       | 150.00 | pending   |
| 1004           | 103     | 2024-02-10       | 320.00 | completed |
| 1005           | 104     | 2024-02-15       | 600.00 | completed |

In case, we want to pass a custom user ID as a query attribute to track which user’s transactions are being queried, we can do it as follows:

```sql
-- Set a query attribute to include the user ID for tracking
SET SESSION query_user_id = 'user_101';
-- Execute a query with the attribute
SELECT * FROM transactions WHERE user_id = 101 AND status = 'completed';
```

The output of the above code will be as follows:

| transaction_id | user_id | transaction_date | amount | status    |
| -------------- | ------- | ---------------- | ------ | --------- |
| 1001           | 101     | 2024-01-02       | 250.00 | completed |

Here, the `query_user_id` attribute provides metadata for tracking the query, making it easier to associate this query with its origin in logs or monitoring systems. This additional context is especially useful in auditing or multi-user systems.
