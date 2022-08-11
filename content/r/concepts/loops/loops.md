---
Title: 'Loops'
Description: 'In R, a loop is used to perform some operation given that a declared condition is truthy.'
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

A loop is used to perform some operation given that a declared condition is truthy. In R, there are `while` and `for` loops.

## While Loop

The statement(s) within a `while` loop code block will continue to execute given that a declared condition is `TRUE`.

```r
var1 <- 0

while (var1 < 100) {
  print(var1)
  var1 <- var1 + 1
}
```

This `while` loop will continuously execute the statements within the block until the condition is no longer `TRUE`.

## For Loop

The statement(s) within a `for` loop code block will execute once for each item in a list-like data structure like a `vector` or `list`.

```r
NY <- list("Bronx", "Brooklyn", "Manhattan", "Queens", "Staten Island")

for (borough in NY) {
  print(borough)
}
```

This `for` loop will execute the statment within the block for each item in the `list`.

Additional control flow statments can be used within these blocks for both types of loops.
