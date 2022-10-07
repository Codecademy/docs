---
Title: 'ncol()'
Description: 'Returns the number of columns in a data frame.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Data Structures'
  - 'Methods'
  - 'Tables'
CatalogContent:
  - 'learn-r'
  - 'paths/computer-science'
---

The **`ncol()`** function returns the number of columns in a data frame.

## Syntax

```pseudo
ncol(df_object)
```

The `df_object` parameter is the data frame passed into the `ncol()` function.

## Example

The following example uses a [CSV file](https://www.codecademy.com/resources/docs/r/csv-files) named `patients.csv` with the following information:

| First Name | Last Name | DOB        |
| ---------- | --------- | ---------- |
| Kiercen    | Tremboly  | 06/24/1992 |
| Phaedra    | Blackborn | 08/19/1972 |
| Toby       | Spencer   | 11/16/1953 |
| Sandra     | Speller   | 07/05/1989 |

The data within the file can be read in and the `ncol()` function can be used to retrieve the number of columns:

```r
# Read file
df <- read.csv("patients.csv")

# Retrieve number of columns
ncol(df)
```

This results in the following output:

```shell
3
```
