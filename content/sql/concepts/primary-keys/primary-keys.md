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

**Primary keys** are special columns that are used to uniquely identify each row of a table in SQL.

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

## Composite Keys

Sometimes, having one primary key per table is not enough to uniquely identify a row. In such cases, multiple columns would work as composite keys for the table. This requirement should be detected during the designing phase of a database.

For example, a database of car parts will have to uniquely identify a row of parts. You could use either the `engine_ID` or  `body_ID`; however, this may create ambiguity as cars could get their engines swapped.

Depending on local regulations, a car may require an engine part ID and a body ID to be associated with a license plate. One solution might be adding more row information about the car, such as `left_door_ID`, `gearbox_ID`, etc. But then a specific car would have to be identified by two different aspects: its body and its engine.

A composite key would be useful in this case. This is how a `vehicle_registry` table might look (extra parts/columns omitted for brevity):

| engine_id | body_id | gearbox_id | purchase_date |
| -------- | ----------- | ---------- | ------------- |
| 500        | abc        | 001      | 2022-01-01    |
| 600        | def        | 002      | 2022-01-01    |
| 700        | ghi        | 003      | 2022-01-02    |

In the case above, `purchase_date` would also be part of the composite primary key, along with `engine_id` and `body_id`—this car could be registered many times after reselling to new owners, and each of these rows should be distinguished from each other as unique tuples. 

The statement below creates the `vehicle_registry` table with a composite key:

```sql
CREATE TABLE vehicle_registry (
  engine_id INTEGER,
  body_id TEXT,
  gearbox_id INTEGER,
  purchase_date DATE,
  PRIMARY KEY(engine_id, body_id, purchase_date)
);
```