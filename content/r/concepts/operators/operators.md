---
Title: 'Operators'
Description: 'Operators are used to perform various operations on variables and values.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Operators'
  - 'Arithmetic'
  - 'Comparison'
  - 'Logical'
CatalogContent:
  - 'learn-r'
  - 'paths/computer-science'
---

Operators are used in R to perform various operations on variables and values. Among the most commonly used ones are arithmetic and assignment operators.

The following bit of R code uses a multiplication operator, `*`, to calculate the product of two numbers,
and the assignment operator, `<-` to store the result in the variable `x`.

```r
# Store five times three in variable x
x <- 5 * 3
```

Operators in R can be organized into the following groups:

- Arithmetic operators for traditional mathematical evaluations such as addition and subtraction.
- Assignment operators for assigning values to variables.
- Comparison operators for testing equality between values.
- Logical operators for evaluating the "truthiness" of values against one another.
- Miscellaneous operators for various tasks including vectors and sequencing.

## Arithmetic operators

R has the following arithmetic operators:

- `+`: Addition, returns the sum of two numbers.
- `-`: Subtraction, returns the difference of two numbers.
- `*`: Multiplication, returns the product of two numbers.
- `/`: Division, returns the quotient of two numbers.
- `^`: Exponent, returns the value of one number raised to the power of another.
- `%%`: Modulus, returns the remainder of one number divided by another.
- `%/%`: Integer Division, returns integer quotient of two numbers.

## Assignment operators

R has the following assignment operators:

- `<-`: Assigns value on right to variable on left.
- `->`: Assigns value on left to variable on right.
- `<<-`: Global version of `<-`.
- `->>`: Global version of `->`.
- `=` : Same as `<-`, but use is discouraged.

## Comparison operators

R has the following comparison operators:

- `==`: Equal, `TRUE` if two values are equal.
- `!=`: Not equal, `TRUE` if two values are not equal.
- `<`: Less than, `TRUE` if left value less than right value.
- `<=`: Less than or equal to, `TRUE` if left value is less than or equal to right value.
- `>`: Greater than, `TRUE` if left value greater than right value.
- `>=`: Greater than or equal to, `TRUE` if left value greater than or equal to right value.

## Logical operators

R has the following logical operators:

- `&`: Element-wise AND, compares each element and returns `TRUE` if both elements are `TRUE`.
- `&&`: Logical AND, `TRUE` if both values are `TRUE`, only evaluates as many elements as necessary.
- `|`: Element-wise OR, compares each element and returns `TRUE` if either element is `TRUE`.
- `||`: Logical OR, `TRUE` if either value is `TRUE`, only evaluates as many elements as necessary.
- `!`: Logical NOT, `TRUE` if following statement is `FALSE`.

Note: The long form is preferred for `if` statements as the short form can produce a vector value.

## Miscellaneous operators

R has the following miscellaneous operators:

- `:`: Creates a sequence of numbers from the left argument to the right one.
- `%in%`: `TRUE` if the left argument is in the vector to the right.
- `%*%`: Performs matrix multiplication on two matrices.
