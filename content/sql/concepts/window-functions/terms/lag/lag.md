---
Title: 'LAG()'
Description: 'Accesses previous rows data without the need for self join.'
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
expression - 
offset - 
default -

partition_by - 
order_by - 
## Example
Users

| first_name | last_name | age |
| --- | --- | --- |
| chris | smith | 30 |
| dave | james | 19 |
| jenna | black | 35 |
| kyle | xy | 60 |


```sql
SELECT *,
    LAG(age, 1) OVER (
	ORDER BY age ASC) AS previous_age
FROM Users;
```

Output

| first_name | last_name | age | previous_age |
| --- | --- | --- | --- |
| chris | smith | 30 | null |
| dave | james | 19 | 30 |
| jenna | black | 35 | 19 |
| kyle | xy | 60 | 35 |