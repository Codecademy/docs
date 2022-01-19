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

## Syntax

The following R code uses an arithmetic operator for multiplication, `*`, to calculate the product of two numbers, along with the assignment operator, `<-` to store the result in the variable `x`.

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

R supports the following arithmetic operators:

- Addition, `+`, which returns the sum of two numbers.
- Subtraction, `-`, which returns the difference between two numbers.
- Multiplication, `*`, which returns the product of two numbers.
- Division, `/`, which returns the quotient of two numbers.
- Exponents, `^`, which returns the value of one number raised to the power of another.
- Modulus, `%%`, which returns the remainder of one number divided by another.
- Integer Division, `%/%`, which returns the integer quotient of two numbers.

## Assignment operators

R uses the following assignment operators:

- `<-` assigns a value to a variable from right to left.
- `->` assigns a value to a variable left to right.
- `<<-` is a global version of `<-`.
- `->>` is a global version of `->`.
- `=` works the same way as `<-`, but its use is discouraged.

## Comparison operators

R has the following comparison operators:

- Equal, `==`, which returns `TRUE` if two values are equal.
- Not equal, `!=`, which returns `TRUE` if two values are not equal.
- Less than, `<`, which returns `TRUE` if left value is less than right value.
- Less than or equal to, `<=`, which returns `TRUE` if left value is less than or equal to right value.
- Greater than, `>`, which returns `TRUE` if left value is greater than right value.
- Greater than or equal to, `>=`, which returns `TRUE` if left value is greater than or equal to right value.

## Logical operators

R has the following logical operators:

- Element-wise AND, `&`, for comparing each element and returning `TRUE` if both elements are `TRUE`.
- Logical AND, `&&`, which returns `TRUE` if both values are `TRUE`, only evaluates as many elements as necessary.
- Element-wise OR, `|`, for comparing each element and returning `TRUE` if either element is `TRUE`.
- Logical OR, `||`, which returns `TRUE` if either value is `TRUE`, only evaluates as many elements as necessary.
- Logical NOT, `!`, which returns `TRUE` if the associated statement is `FALSE`.

Note: The long form of AND and OR (`&&` and `||`) are preferred for `if` statements as the short form can produce a vector value.

## Miscellaneous operators

R uses the following miscellaneous operators:

- The `:` operator creates a sequence of numbers from the left argument to the right one.
- The `%in%` operator returns `TRUE` if the left argument is in the vector to the right.
- The `%*%` operator performs matrix multiplication on two matrices.
