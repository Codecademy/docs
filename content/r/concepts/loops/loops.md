---
Title: 'Loops'
Description: 'A loop is used to repeat some operation a multiple number of times.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Control Flow'
  - 'Iterators'
  - 'Loops'
CatalogContent:
  - 'learn-r'
  - 'paths/computer-science'
---

A **loop** is used to repeat some operation a multiple number of times. In R, there are `while` and `for` loops.

## While Loop

The statement(s) within a `while` loop code block will continue to execute as long as a declared condition is `TRUE`.

The following example will continuously execute the statements within the `while` loop block until the condition is no longer `TRUE`:

```r
var1 <- 0

while (var1 < 100) {
  print(var1)
  var1 <- var1 + 1
}
```

## For Loop

The statement(s) within a `for` loop code block will execute once for each item in a list-like data structure like a `vector` or `list`.

The following example will execute the statement within the `for` loop block for each item in the `list`:

```r
NY <- list("Bronx", "Brooklyn", "Manhattan", "Queens", "Staten Island")

for (borough in NY) {
  print(borough)
}
```

Additional control flow statements can be used within these blocks for both types of loops.
