---
Title: 'DEGREES()' 
Description: 'The DEGREES() function converts a value in radians to degrees.' 
Subjects: 
  - 'Data Science'
  - 'Computer Science'
  - 'Data Visualization'
Tags: 
  - 'SQL'
  - 'MySQL'
  - 'PostgreSQL'
  - 'SQLite'
  - 'Functions'
CatalogContent: 
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---


The **`DEGREES()`** function in SQL is a mathematical function used to convert a value expressed in radians to its equivalent in degrees. This function is available in various SQL dialects, including SQL Server, MySQL, and Oracle.

> **Note:** Functions **`RADIANS()`** and **`PI()`** are closely related to `DEGREES()`.


## Syntax

```pseudo
 DEGREES(number)
```

- _number_ paramenter is mandatory and represented by a numeric value.

## Example #1

This example converts a specific radian value to degrees:

```sql
    Select DEGREES(1.0) as degrees_value;
```

The output:

| <center>degrees_value</center> |
| ----------------- |
| <center>57.29577951308232</center> |



## Example #2

This query converts PI*2 radians to degrees:

```sql
    SELECT DEGREES(PI()*2) as degrees_off_of_pi; 
```

The output:

| <center>degrees_off_of_pi</center> |
| ----------------- |
| <center>360</center> |





## misc.
<details>
<summary>In case you're interested in the subject here's a wiki excerpt</summary>

A **degree** (in full, a **degree of arc**, **arc degree**, or **arcdegree**), usually denoted by ° (the degree symbol), is a measurement of a plane angle in which one full rotation is 360 degrees.

It is not an SI unit—the SI unit of angular measure is the radian—but it is mentioned in the SI brochure as an accepted unit. Because a full rotation equals 2π radians, one degree is equivalent to ⁠π/180⁠ radians. 

[Source](https://en.wikipedia.org/wiki/Degree_%28angle%29)

</details>