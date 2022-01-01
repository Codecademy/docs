---
Title: 'Data Types'
Description: 'R has a number of different data types with different uses and characteristics.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Types'
  - 'Integers'
  - 'Booleans'
  - 'Strings'
CatalogContent:
  - 'learn-r'
  - 'paths/computer-science'
---

R supports many data types, each with different uses and characteristics. Variables can hold different data types, and are not limited to storing the data type they were initially assigned.

```r
# This is legal in R

# Assign an integer data type
var1 <- 1L

# Assign a string data type
var1 <- "Hello world!"
```

R supports the following basic data types:

- `numeric`: A whole or decimal number. (i.e. 5.12, 16)
- `integer`: A whole number followed by `L`. (i.e. 100L)
- `complex`: A number with an imaginary part. (i.e. 5 + 7i, `i` denoting the imaginary part)
- `character`: A string of characters, (i.e. "Hello World!")
- `logical`: A Boolean value. (i.e. `TRUE` or `FALSE`)

The `class()` function can be used to determine the data type of a variable.

```r
x <- 3 + 2i
class(x) # Output: "complex"

x <- 100
class(x) # Output: "numeric"

x <- 100L
class(x) # Output: "integer"
```
