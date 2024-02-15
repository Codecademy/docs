---
Title: 'subset()'
Description: 'Returns a subset of an object that matches the specified conditions.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Data Structures'
  - 'Methods'
  - 'Objects'
CatalogContent:
  - 'learn-r'
  - 'paths/computer-science'
---

The **`subset()`** function returns a subset of a data frame that matches the specified conditions.

## Syntax

```pseudo
subset(df_object, expression)
```

- The `df_object` parameter is the data frame to retrieve the subset from.
- The `expression` specifies the subset conditions.

## Example

The following example uses a [CSV file](https://www.codecademy.com/resources/docs/r/csv-files) named `inventory.csv` with the following information in it:

| Item     | Quantity | Cost |
| -------- | -------- | ---- |
| Hoodies  | 58       | 25   |
| Pens     | 80       | 1.5  |
| Pencil   | 75       | 0.88 |
| T-shirts | 100      | 15   |

The `subset()` function can be used to get the subset of items where the `Cost` is greater than 10:

```r
# Read file
df <- read.csv("inventory.csv")

# Retrieve subset
subset(df, Cost > 10)
```

The example returns the following:

```shell
      Item Quantity Cost
1  Hoodies       58   25
4 T-shirts      100   15
```
