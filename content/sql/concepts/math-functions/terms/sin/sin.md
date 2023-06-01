---
Title: 'SIN()'
Description: 'Returns the sine of an angle.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'SQL'
  - 'MySQL'
  - 'PostgreSQL'
  - 'SQLite'
  - 'Math Functions'
  - 'Trigonometric Functions'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`SIN()`** function in SQL is a mathematical function that returns the sine of an angle. It is compatible with various SQL database systems such as MySQL, PostgreSQL, Oracle, and SQL Server.

## Syntax

```sql
SELECT SIN(angle)
FROM table_name;
```

## Example

In this example, we have a table called angles that contains the angles in degrees:

|angle|
| ----------- | 
| 30           |
| 45           |
| 60          |

We can use the **`SIN()`** function to calculate the sine of each angle:

```sql
SELECT angle, SIN(angle) AS sine_value
FROM angles;
```
The output will be:
| angle | sine_value    |
|-------|---------------|
| 30    | 0.5           |
| 45    | 0.70710678    |
| 60    | 0.8660254     |

The **`SIN()`** function calculates the sine of each angle in degrees and returns the corresponding sine values.

You can use the **`SIN()`** function in SQL for various trigonometry calculations and mathematical operations involving angles.

For more information on SQL and learning SQL syntax, you can explore the [Learn SQL](https://www.codecademy.com/learn/learn-sql?g_network=g&g_productchannel=&g_adid=624951457642&g_locinterest=&g_keyword=codecademy%20sql&g_acctid=243-039-7011&g_adtype=&g_keywordid=kwd-352193271727&g_ifcreative=&g_campaign=account&g_locphysical=9302241&g_adgroupid=128133970708&g_productid=&g_source={sourceid}&g_merchantid=&g_placement=&g_partition=&g_campaignid=1726903838&g_ifproduct=&utm_id=t_kwd-352193271727:ag_128133970708:cp_1726903838:n_g:d_c&utm_source=google&utm_medium=paid-search&utm_term=codecademy%20sql&utm_campaign=INTL_Brand_Exact&utm_content=624951457642&g_adtype=search&g_acctid=243-039-7011&gclid=CjwKCAjwg-GjBhBnEiwAMUvNW6x0Y9-AmxMg_wS8sXeg8wh8ZwM7woGpkuSIlLGwAH4ydc7lqEYsGRoCRpgQAvD_BwE) course. If you are interested in analyzing data with SQL, check out the [Analyzing Data with SQL](https://www.codecademy.com/learn/paths/analyze-data-with-sql) learning path.

If you want to use SQL databases like MySQL, PostgreSQL, SQLite, or SQL Server, make sure to refer to their respective documentation for more details on the SIN() function implementation and compatibility.
