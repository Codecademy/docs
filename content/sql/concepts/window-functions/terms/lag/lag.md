---
Title: 'LAG()'
Description: 'Accesses data from previous rows without the need for self join.'
Subjects: 
  - 'Data Science'
Tags: 
  - 'SQL Server'
CatalogContent: 
  - 'data-science-foundations'
  - 'catalog/subject/data-science'
---

The **LAG()** window function facilitates access to previous rows based on the offset argument. It can be particularly useful when a comparison of a previous value is necessary without the use of a self join. There is a similarity to the `LEAD()` function with the difference being the accessible rows. `LEAD()` accesses subsequent rows while `LAG()` accesses previous rows.

## Syntax

```pseudo
LAG (expression [, offset] [, default])  
OVER ( [ partition_by ] order_by )
```
**expression** - the column value which will be referenced.

**offset** - A positive numeric indicator of the previous row to access that is relative to the current row. If not specified the default is 1.

**default** - The value that will be return if the `offset` is out of range. This is an optional argument, and if not specified will return NULL.

**partition_by** - Allows the result set to be grouped based on a column. This is optional argument, and if not specified will treat the result set as a single group.

**order_by** - Determines the order of the result set. If `partition_by` is specified, it will order the grouped data instead.

## Example

Asumming the Users table has the following entries, let us use the `LAG()` function to use data from the previous record and append it to the current record.

Users Table

| first_name | last_name | age |
| --- | --- | --- |
| chris | smith | 30 |
| dave | james | 19 |
| jenna | black | 35 |
| kyle | xy | 60 |
<br>

Here we access the previous record and taget the `age` column to complete the new column `previous_age`.

```sql
SELECT *,
    LAG(age, 1) OVER (
	ORDER BY age ASC) AS previous_age
FROM Users;
```

The output illustrates the results with a new column `previous_age` which now holds the value evaluated from the previous record. The first record is null because a default was not specified and previous row would be out of range.

Output

| first_name | last_name | age | previous_age |
| --- | --- | --- | --- |
| kyle | xy | 60 | null |
| jenna | black | 35 | 60 |
| chris | smith | 30 | 35 |
| dave | james | 19 | 30 |