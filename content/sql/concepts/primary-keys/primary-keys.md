---
Title: 'Primary Keys'
Description: 'SQL tables sometimes have a column that uniquely identifies each row of that table. These special columns are called primary keys. A primary key column has a few requirements: - None of the values can be NULL. - Each value must be unique (i.e., you can’t have two customers with the same customerid in the customers table). - A table can not have more than one primary key column. Heres an orders table where the orderid is its primary key: | orderid | customerid | totalcost | purchasedate |'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Comments'
  - 'Documentation'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

SQL tables sometimes have a column that uniquely identifies each row of that table. These special columns are called primary keys.

A primary key column has a few requirements:

- None of the values can be `NULL`.
- Each value must be unique (i.e., you can’t have two customers with the same `customer_id` in the `customers` table).
- A table can not have more than one primary key column.

Here's an `orders` table where the `order_id` is its primary key:

| order_id | customer_id | total_cost | purchase_date |
| -------- | ----------- | ---------- | ------------- |
| 1        | 1001        | 13.99      | 2022-01-01    |
| 2        | 1294        | 61.42      | 2022-01-01    |
| 3        | 1001        | 23.45      | 2022-01-02    |

## Syntax

`PRIMARY KEY` columns can be used to uniquely identify the row. Attempts to insert a row with an identical value to a row already in the table will result in a _constraint violation_ which will not allow you to insert the new row.

The statement below sets a `PRIMARY KEY` on the `students` table:

```sql
CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  name TEXT,
  grade INTEGER,
  age INTEGER
);
```

## Foreign Keys

When the primary key for one table appears in a different table, it is called a foreign key.

Why is this important? The most common types of joins will be joining a foreign key from one table with the primary key from another table. For instance, when we join the `orders` table and the `customers` table, we join on the `customer_id` column, which is a foreign key in `orders` and the primary key in `customers`.
