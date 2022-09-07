---
Title: 'colnames()'
Description: 'Returns or sets the names of the columns in a data frame.'
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

The **`colnames()`** function returns or sets the names of the columns in a data frame.

## Syntax

The column names can be retrieved using the following syntax:

```pseudo
colnames(object)
```

Column names can be set with this syntax:

```pseudo
colnames(df) <- value
```

- `df`: A data frame.
- `value` : Vector containing column names, must be the same length as the amount of columns in the original data frame.

## Example

Suppose there is a "transactions.csv" file with the following information in it:

| Date       | Time  | Total  | Card |
| ---------- | ----- | ------ | ---- |
| 15-08-2022 | 9:20  | 120.83 | Yes  |
| 08-08-2022 | 19:17 | 73.4   | No   |
| 30-07-2022 | 13:05 | 15.93  | Yes  |
| 22-07-2022 | 11:30 | 6.99   | Yes  |

The column names can be retrieved by reading in the [CSV file](https://www.codecademy.com/resources/docs/r/data-types) and using the `colnames()` function:

```r
df <- read.csv("transactions.csv")

colnames(df)
```

The above returns:

```shell
[1] "Date"         "Time"         "Total"        "Card"
```

The column names can be changed as follows:

```r
# Reading in CSV file
df <- read.csv("transactions.csv")

# Change column names
colnames(df) <- c("day", "hour", "subamount", "member")

# Retrieve column names
colnames(df)
```

The above yields the data with the new column names:

```shell
[1] "day"       "hour"      "subamount"   "member"
```
