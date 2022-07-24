---
Title: 'Functions'
Description: 'Functions are blocks of code that can be repeatedly called by other code.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Parameters'
  - 'Arguments'
CatalogContent:
  - 'learn-r'
  - 'paths/computer-science'
---

Functions are blocks of code that can be repeatedly called by other code. A function is not called when it is defined, but only when another part of the code executes the function.

## Syntax

The syntax for a function in R is slightly different than in other programming languages.

```r
my_function <- function(parameters) {
  # Code to execute.
}
```

- `my_function`: The name of the function. It is a [variable](https://www.codecademy.com/resources/docs/r/variables) and obeys the naming convention for variables.
- `parameters`: Zero or more comma-separated variables that will be passed on to the code block when the function is called.
- `code to execute`: The code that executes when the function is called.

A function is called by using its name, folowed by parenthesis enclosing any parameters the function expects:

```r
my_function(parameters)
```

## Example

The following takes a numeric argument and prints a string saying if it is even or odd:

```r
odd_or_even <- function(num) {
  if (num %% 2 == 1) {
    print("Odd.")
  } else {
    print("Even.")
  }
}

odd_or_even(20)
# Output: Even.

odd_or_even(15)
#Output: Odd.
```
