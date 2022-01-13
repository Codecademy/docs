---
Title: 'Data Types'
Description: 'R supports many data types, each with different uses and characteristics.'
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

- The `numeric` type for whole numbers or decimals. (5.12, 16)
- The `integer` type for whole numbers followed by an `L`. (100L)
- The `complex` type for numbers with an imaginary part, denoted by an `i`. (5 + 7i)
- The `character` type for strings of characters. ("Hello World!")
- The `logical` for Boolean values. (`TRUE` or `FALSE`)

The `class()` function can be used to determine the data type of a variable.

```r
x <- 3 + 2i
class(x) # Output: "complex"

x <- 100
class(x) # Output: "numeric"

x <- 100L
class(x) # Output: "integer"
```
