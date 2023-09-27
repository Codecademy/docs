---
Title: 'switch()'
Description: 'Selects one of several alternatives based on a given value or condition.'
Subjects:
  - 'Data Science'
  - 'Code Foundations'
Tags:
  - 'Conditionals'
  - 'Comparison'
  - 'Logic'
CatalogContent:
  - 'learn-r'
  - 'paths/computer-science'
---

The **`switch()`** function provides a convenient way to select one of several alternatives based on a given value or condition. It is often used as an alternative to multiple `if` statements or nested `if-else` statements when there are a limited set of options to choose from.

## Syntax

```pseudo
switch(expr, case1, case2, case3, ...)
```

In this pseudo-code:

- `expr` is the expression or value that needs to be evaluated.
- `case1`, `case2`, `case3`, and so on, are the possible cases or alternatives to be considered.

The `expr` value is compared with each case value sequentially, and when a match is found, the corresponding expression or value associated with that case is returned.

## Examples

The following example illustrates a basic implementation of the `switch()` method:

```r
day <- 3

weekday <- switch(day, "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday")

print(weekday) # Output: Wednesday
```

In this example, the `day` variable is set to `3`. The `switch()` function then compares the value of `day` with each case value. Since the third case matches, the corresponding value `"Wednesday"` is returned and assigned to the variable `weekday`.

The following example includes a default case:

```r
month <- "Janvier"

season <- switch(
  month,
  "January"   = "Winter",
  "February"  = "Winter",
  "March"     = "Spring",
  "April"     = "Spring",
  "May"       = "Spring",
  "June"      = "Summer",
  "July"      = "Summer",
  "August"    = "Summer",
  "September" = "Autumn",
  "October"   = "Autumn",
  "November"  = "Autumn",
  "December"  = "Winter",
  "Unknown month"
)

print(season) # Output: Unknown month
```

In this scenario, the value of `month` does not match any of the specified cases, so the default case `"Unknown month"` is returned and assigned to the variable `season`.
