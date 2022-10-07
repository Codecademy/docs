---
Title: 'colnames()'
Description: 'Returns or sets the names of the columns in a data frame.'
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

The **`colnames()`** function returns or sets the names of the columns in a data frame.

## Syntax

The column names can be retrieved and set using the following syntax:

```pseudo
# Retrival
colnames(df_object)

# Setting
colnames(df_object) <- value
```

- The `df_object` parameter is the object passed into the `colnames()` function.
- The `value` is a vector containing column names; its length must be equal to the amount of columns in the original `df_object`.

## Example

The following example uses a [CSV file](https://www.codecademy.com/resources/docs/r/csv-files) named `"transactions.csv"` file with the following information in it:

| Date       | Time  | Total  | Card |
| ---------- | ----- | ------ | ---- |
| 15-08-2022 | 9:20  | 120.83 | Yes  |
| 08-08-2022 | 19:17 | 73.4   | No   |
| 30-07-2022 | 13:05 | 15.93  | Yes  |
| 22-07-2022 | 11:30 | 6.99   | Yes  |

The column names can be retrieved by reading the file and using the `colnames()` function:

```r
df <- read.csv("transactions.csv")

colnames(df)
```

This returns the following:

```shell
[1] "Date"         "Time"         "Total"        "Card"
```

The column names can be changed as follows:

```r
# Reading CSV file
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
