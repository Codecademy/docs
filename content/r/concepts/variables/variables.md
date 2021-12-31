---
Title: 'Variables'
Description: 'A variable is used to store data that can be accessed later by subsequent code.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Variables'
  - 'Integers'
  - 'Booleans'
  - 'Strings'
CatalogContent:
  - 'learn-r'
  - 'paths/computer-science'
---

A variable is used to store data that can be accessed later by subsequent code. In `R` there are no variable "declaration" commands.
Variables are instead created with the assignment operator, `<-`. (The more familiar assignment operator, `=`, can be used instead, but is discouraged.)

```r
# this creates a variable containing the string "value"
variable <- "value"
```

The assignment operator can be chained together to initialize multiple variables at once:

```r
var1 <- var2 <- var3 <- 0
```

In `R`, putting a variable name by itself on a line has the effect of printing the value of that variable:

```r
score <- 100

# This line:
score # Output 100

# Has the same effect as this line:
print(score) # Output 100
```

## Variable Naming Rules

The name of an `R` variable must adhere to the following constraints:

- The name is a combination of letters, digits, period(.) and underscore(\_).
- It must start with a letter or a period.
- If it starts with a period, the second character cannot be a number.
- It cannot start with a number or an underscore.
- Variable names are case-sensitive.
- Reserved words (TRUE,FALSE,print...) cannot be used for variable names.

```r
# Examples of valid variable names in R

foo <- 1
Foo <- 2 # a different variable from "foo" above
.bar <- TRUE
foo_bar <- "value"
Foo123.4 <- 3.5
```
