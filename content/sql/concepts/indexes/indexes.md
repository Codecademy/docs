---
Title: 'Indexes'
Description: 'Indexes are specialized data structures that organize a table ahead of time to improve the speed of database searches. This is accomplished through a balanced tree structure that allows the server to only search a subset of relevant rows instead of every row sequentially. While an index organizes the values of an entire table, the organization is based on the value of a specific column. This column should ideally be frequently searched and have a varied set of data to best realize the improved performance of the sorting provided by the index. Columns that are not often used in queries should be avoided. Similarly, columns with many identical values, such as binary columns or columns with a high number of NULL values, should not be indexed. Indexes are best used on large tables where a small subset of the data is commonly searched. If instead, all the rows are frequently accessed (perhaps to calculate a sum), the extra organization of the index will be irrelevant. Also, on smaller tables the speed improvements will be less noticeable, as most rows may have to be searched anyways. The index also needs to be maintained on each INSERT, UPDATE, and DELETE event, possibly making these actions slower. Therefore, tables that feature frequent writes and large updates should avoid indexes. As an index is built over time, it is possible for the data to be fragmented across a disk, lowering the performance. This can be avoided by removing and recreating the index, although the implementation differs by database version. Indexes are commonly created alongside the table that it describes: sql'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'SQLite'
  - 'MySQL'
  - 'PostgreSQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/design-databases-with-postgresql'
---

Indexes are specialized data structures that organize a table ahead of time to improve the speed of database searches. This is accomplished through a balanced tree structure that allows the server to only search a subset of relevant rows instead of every row sequentially.

While an index organizes the values of an entire table, the organization is based on the value of a specific column. This column should ideally be frequently searched and have a varied set of data to best realize the improved performance of the sorting provided by the index. Columns that are not often used in queries should be avoided. Similarly, columns with many identical values, such as binary columns or columns with a high number of `NULL` values, should not be indexed.

Indexes are best used on large tables where a small subset of the data is commonly searched. If instead, all the rows are frequently accessed (perhaps to calculate a sum), the extra organization of the index will be irrelevant. Also, on smaller tables the speed improvements will be less noticeable, as most rows may have to be searched anyways.

The index also needs to be maintained on each `INSERT`, `UPDATE`, and `DELETE` event, possibly making these actions slower. Therefore, tables that feature frequent writes and large updates should avoid indexes.

As an index is built over time, it is possible for the data to be fragmented across a disk, lowering the performance. This can be avoided by removing and recreating the index, although the implementation differs by database version.

## Syntax

Indexes are commonly created alongside the table that it describes:

```sql
CREATE TABLE table_name (
  column_name datatype,
  column_name datatype,
  ...
  INDEX index_name (index_column_name)
);
```

However, they can also be created for existing tables:

```sql
CREATE INDEX index_name
ON table_name (column_name);
```

## Examples

To create an index named `id_index` for the frequently searched `student_id` column in the `students` table, use the following query:

```sql
CREATE INDEX id_index
ON students (student_id);
```

## Creating a Unique Index

Due to indexes performing better with more varied data, it is encouraged to enforce unique indexes that disallow duplicates. This works best with columns that happen to be the `PRIMARY KEY` as well.

To create a unique index for the `student_id` that does not allow duplicate values, use the following query:

```sql
CREATE UNIQUE INDEX unique_id_index
ON students (student_id);
```

## Removing an Index

The following query can be used to remove the original index placed on `student_id`:

```sql
DROP INDEX id_index;
```
