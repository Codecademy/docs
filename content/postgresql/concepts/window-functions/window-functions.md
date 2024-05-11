---
Title: 'Window Functions'
Description: 'A window function performs a calculations across sets of rows related to the current query row. Unlike aggregate functions, window functions do not cause rows to become grouped into a single output row. They maintain the individual row identities when performing calculations. Window functions are defined using an OVER clause that specifies the partitioning and ordering of rows for the function to operate on. 
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Window Functions'
  - 'PostgreSQL'
CatalogContent:
  - 'learn-postgresql'
  - 'paths/docs/content/postgresql/concepts/window-functions'
---

Window functions in PostgreSQL provide an amazing feature that enables computining calculations across sets of rows related to the current row in query. These functions empower you to define rows to operate on based on specific criteria, such as a specific range or grouping.
Window functions are defined using an `OVER` clause that specifies how to partition and order rows for the function to operate on, this clause is what makes the window function different from normal aggregate function.

In a simple syntax, you can perform a window function over a given column, as seen below:

`SELECT employee_id, row_number() OVER (ORDER BY employee_id) AS row_num FROM employees;`

This query uses the employee_id to calculate a unique row number for each employee, `ORDER BY` within `OVER` controls the order in which rows are processed by window function. The generated row number is assigned the column name `row_num` by the `AS row_num` part of the syntax.

Bellow is a table of window functions in PostgreSQL:

|        Function        |      Syntax      |      Description     |
|          ---           |       ---        |         ----         |
|Rank() |`SELECT column_name1, column_name2, column_nameN, rank() OVER (PARTITION BY column_name ORDER BY column_name DESC) FROM table_name;`|Returns the ranking of the current row.|
|Row_number()|`SELECT column_name1, column_name2, column_nameN, row_number () OVER (PARTITION BY column_name ORDER BY column_name DESC) FROM table_name;`|Returns the number of the current row within its partion, counting from 1.|
| Dense rank()|`SELECT column_name1, column_name2, column_nameN, dense_rank () OVER (PARTITION BY column_name ORDER BY column_name DESC) FROM table_name;`| Returns the rank of the current row, this function effectively counts groups.|
| Ntile()| `SELECT column_name1, column_name2, column_nameN, ntile (Argument) OVER (PARTITION BY column_name ORDER BY column_name DESC) FROM table_name;`|Returns an integer ranging from 1 to the argument value.|
|Cume dist()| `SELECT column_name1, column_name2, column_nameN, cume_dist () OVER (PARTITION BY column_name ORDER BY column_name ASC) FROM table_name;`|Returns the cumulative distribution.|  
| Percent rank()| `SELECT column_name1, column_name2, column_nameN, percent_rank () OVER (PARTITION BY column_name ORDER BY column_name ASC) FROM table_name;`|Returns the relative rank of the current row, that is the total partition rows - 1.|
| First Value()|`SELECT column_name1, column_name2, column_nameN, first_value (value) OVER (PARTITION BY column_name ORDER BY column_name ASC) FROM table_name;`|Returns the -value- of the first row in a window frame.|
|Last value()|`SELECT column_name1, column_name2, column_nameN, last_value (value) OVER (PARTITION BY column_name ORDER BY column_name ASC) FROM table_name;`|Returns the -value- of the last row in a window frame.|

## Example

To understand the `Rank()` and `Row_number()` functions, let's consider the following _staff_ table as an example to demonstrate how these window functions work:

| id | employee | adrress | contact | salary | 
|--- | -----    | -----   | -----   | ----   |
| 01 | John     | Tokyo   | +81     | 5500   |
| 02 | Kate     | Beijing | +186    | 5000   |
| 03 | Tad      | Mumbai  | +91     | 2500   |
| 04 | Martha   | Tokyo   | +727    | 3500   |
| 05 | Will     | paris   | +33     | 4000   |
| 06 | Ruth     | Dubai   | +971    | 2500   |
| 07 | Kaka     | Mumbai  | +213    | 4500   |
| 08 | Tolf     | Tokyo   | +44     | 2000   |

From the above _staff_ table, to rank the employees using the `Rank()` function, we select the id, salary, and address columns from the _staff_ table, and then use the `RANK()` window function to assign a rank to each row based on the _salary_ column within each partition defined by the _address_ column.

#Syntax:

`SELECT id, salary, address, Rank() OVER (PARTITION BY address ORDER BY salary DESC) FROM staff;`

Breaking down the syntax:
- The clause `SELECT`, selects the id, salary, and address colums from the staff table.
- The `Rank() OVER` part computes the row number of each row.
- The `(PARTITION BY address ORDER BY salary DESC)` clause actively defines how the window function partitions the data.
- The statement ends with `FROM staff`, signifying that it operates on the staff table.

#Output:

| id | salary | adrress | rank | 
|--- | -----  | -----   | ---- |
| 01 |  5500  | Tokyo   |  1   |
| 04 |  3500  | Tokyo   |  2   |
| 08 |  2000  | Tokyo   |  3   |
| 07 |  4500  | Mumbai  |  1   |
| 03 |  2500  | Mumbai  |  2   |
| 02 |  5000  | Beijing |  1   |
| 05 |  4000  | Paris   |  1   |
| 06 |  2500  | Dubai   |  1   |


In PostgreSQL, the `row_number` window function plays a useful role by defining the row number of a column. Let's use the _staff_ table to assign a row number to each row based on the `salary` column, within each group of rows that have the same `address`, ordering the rows by `salary` in descending order within each group.

#Syntax:

`SELECT id, salary, address, row_number() OVER (PARTITION BY address ORDER BY salary DESC) FROM staff`

Breaking down the syntax:
- The clause `SELECT`, selects the id, salary, and address colums from the staff table.
- The `Row_number() OVER` part computes the row number of each row.
- The `(PARTITION BY address ORDER BY salary DESC)` clause actively defines how the window function partitions the data.
- The statement ends with `FROM staff`, signifying that it operates on the staff table.

#Output:

| id | salary | adrress | row_number | 
|--- | -----  | -----   | ---- |
| 01 |  5500  | Tokyo   |  1   |
| 04 |  3500  | Tokyo   |  2   |
| 08 |  2000  | Tokyo   |  3   |
| 07 |  4500  | Mumbai  |  1   |
| 03 |  2500  | Mumbai  |  2   |
| 02 |  5000  | Beijing |  1   |
| 05 |  4000  | Paris   |  1   |
| 06 |  2500  | Dubai   |  1   |
