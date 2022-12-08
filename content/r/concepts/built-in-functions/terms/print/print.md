---
Title: 'print()'
Description: 'Prints out the specified argument.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Output'
  - 'Print'
CatalogContent:
  - 'learn-r'
  - 'paths/computer-science'
---

The **`print()`** function prints out the specified argument.

## Syntax

```pseudo
print(argument)
```

The `argument` to be printed is of a valid [data type](https://www.codecademy.com/resources/docs/r/data-types).

## Example

The following example prints out a [data frame](https://www.codecademy.com/resources/docs/r/data-frames) with the `print()` function:

```r
school_teams <- data.frame(Sport = c("Basketball", "Baseball", "Football", "Track", "Tennis", "Swim"), Coach = c("Tyler", "Blake", "Stephanie", "Jordan", "Taylor","Brooklyn"), Player_Count = c(15, 24, 22, 20, 12, 29))

print(school_teams)
```

This outputs the following:

```shell
       Sport     Coach Player_Count
1 Basketball     Tyler           15
2   Baseball     Blake           24
3   Football Stephanie           22
4      Track    Jordan           20
5     Tennis    Taylor           12
6       Swim  Brooklyn           29
```
