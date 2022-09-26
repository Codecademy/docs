---
Title: 'Index'
Description: 'Improves the speed of data retrieval in the database.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'Primary Key'
  - 'Foreign Key'
  - 'Index'
  - 'Tables'
CatalogContent:
  - 'paths/analyze-data-with-sql'
  - 'paths/data-science'
---

A database **index** is a data structure that improves the speed of data retrieval in the database. Indexes on a table consist of one or more columns of ordered data with links to specific rows in a table.

By matching the values in the index, the database management system can quickly retrieve the corresponding row without having to search every row in the table.

Tables are indexed on their primary key columns, and many database systems require an index on a foreign key column as well. It is also common practice to place indexes on columns that are likely to be queried often.

## SQL Example

Index creation can vary from database to database, but in standard [SQL](https://www.codecademy.com/resources/docs/sql) it consists of:

1. Using the `CREATE INDEX` statement, followed by a name for the index.
2. Applying the `ON` clause to the table name, followed by a list of the columns to be indexed.

In the example below, adding an index on the `region` field of a `sales` table looks like this:

```sql
CREATE INDEX sales_by_region
ON sales (region);
```
