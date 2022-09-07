---
Title: 'nrow()'
Description: 'Returns the number of rows in a data frame.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Data Structures'
CatalogContent:
  - 'learn-r'
  - 'paths/computer-science'
---

The **`nrow()`** function returns the number of rows in a data frame.

## Syntax

```pseudo
nrow(df)
```

- `df`: The data frame to call the function on.

## Example

Suppose a `supplies.csv` exists with the following information:

| Item   | Quantity Needed | Price |
| ------ | --------------- | ----- |
| Brooms | 15              | 8.5   |
| Bucket | 3               | 4     |
| Cloth  | 6               | 2     |
| Duster | 10              | 5.5   |
| Mop    | 5               | 10    |

The data within the [CSV file](https://www.codecademy.com/resources/docs/r/data-types) can be read in and the `nrow()` function can be used to retrieve the number of rows:

```r
# Read in file
df <- read.csv("supplies.csv")

# Retrieve number of rows
nrow(df)
```

This results in the following output:

```shell
5
```
