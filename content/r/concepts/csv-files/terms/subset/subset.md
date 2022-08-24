---
Title: 'subset()'
Description: 'Returns a subset of an object that matches the specified conditions.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Logical'
CatalogContent:
  - 'learn-r'
  - 'paths/computer-science'
---

The `subset()` function returns a subset of an object that matches the specified conditions.

## Syntax

```pseudo
subset(object, subset)
```

- `object`: The object to retrieve the subset from.
- `subset`: Expression that indicates the values to keep from the `object`.

## Example

Suppose there is a "inventory.csv" file with the following information in it:

| Item     | Quantity | Cost |
| -------- | -------- | ---- |
| Hoodies  | 58       | 25   |
| Pens     | 80       | 1.5  |
| Pencil   | 75       | 0.88 |
| T-shirts | 100      | 15   |

The `subset()` function can be used to get the subset of items where the `Cost` is greater than 10:

```r
# Read in file
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
