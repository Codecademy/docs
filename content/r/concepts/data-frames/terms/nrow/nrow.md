---
Title: 'nrow()'
Description: 'Returns the number of rows in a data frame.'
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

The **`nrow()`** function returns the number of rows in a data frame.

## Syntax

```pseudo
nrow(df_object)
```

The `df_object` parameter is the data frame passed into the `nrow()` function.

## Example

The following example uses a [CSV file](https://www.codecademy.com/resources/docs/r/csv-files) named `supplies.csv` with the following information:

| Item   | Quantity Needed | Price |
| ------ | --------------- | ----- |
| Brooms | 15              | 8.5   |
| Bucket | 3               | 4     |
| Cloth  | 6               | 2     |
| Duster | 10              | 5.5   |
| Mop    | 5               | 10    |

The data within the file can be read in with the `read.csv()` function and the `nrow()` function can be used to retrieve the number of rows:

```r
# Read file
df <- read.csv("supplies.csv")

# Retrieve number of rows
nrow(df)
```

This results in the following output:

```shell
5
```
