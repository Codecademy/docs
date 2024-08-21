---
Title: 'SUBSTRING'
Description: 'A SUBSTRING is a SQL function that allows you to take a slice of a complete string that can be analyzed and organized as you need in your dataset.' 
Subjects: 
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Azure'
  - 'Data'
  - 'Database'
  - 'Functions'
  - 'MySQL'
  - 'PostgreSQL'
  - 'SQLite'
  - 'SQL Server'
  - 'Strings'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---


## Definition

The `SUBSTRING` function in [SQL](https://www.codecademy.com/resources/docs/sql) takes a slice from a string, the string could be from text and image data and allows you to SELECT this substring and manipulate it according to the data type. The data type is the same as the original input except for the next expressions.

- char/varchar/text = varchar
- nchar/nvarchar/ntext = nvarchar
- binary/varbinary/image = varbinary

As you can see the substring you take in SQL is similar to the slice of string you can take in Python.

## Syntax
```
SUBSTRING (string, start, length)
```

- `string`: string to extract from.
- `start`: starting index from which the substring will start, minimum possible value is 1.
- `length`: number of characters to extract.
  
> **Note:** Be aware that not all services support this function, Oracle and SQLite use a different one to accomplish the same goal, and the function is written as SUBSTR.

## Examples

We will use an SQL server where we manage data about customers, prices, shipping and products.
<br />
Feel free to practice in this [data set](https://www.w3schools.com/sql/trysqlserver.asp?filename=trysql_func_sqlserver_substring2).
<br />

This is a correct and functional code using `SUBSTRING` for this table:
<br />
`SELECT CustomerID, SUBSTRING(CustomerName, 4, 5) AS alias, SUBSTRING(City, 1, 3) FROM Customers;`
<br />

As you can see we selected the CustomerID column, and the CustomerName column but in this one we used the `SUBSTRING` function slicing it since the fourth character and taking a total of five characters from LEFT to RIGHT, notice that blank spaces are included and we named this column “alias”, we used `SUBSTRING` with the City column taking the first three characters of each row, but we did not use the AS function so it does not have a column_name, be aware to always name your column when using the `SUBSTRING`.
<br />
