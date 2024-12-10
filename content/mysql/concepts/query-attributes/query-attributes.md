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

In the following example we have have set a custom query attribute that sets a rule that says the query should not take longer than `10` seconds to run. If it does, MySQL will stop it

```sql
-- Set a query attribute 
SET SESSION query_time_limit = '10s';
-- Using the attribute in query
SELECT * FROM orders WHERE order_date > '2024-01-01';
```
The code generates the following output:

| order_id | customer_id | order_date  | total_amount |
|----------|-------------|-------------|--------------|
| 12564    | 987         | 2024-02-15  | 250.75       |
| 12893    | 123         | 2024-02-18  | 450.00       |

