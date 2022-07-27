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

my_function(parameters)
```

- `my_function`: The name of the function. It is a [variable](https://www.codecademy.com/resources/docs/r/variables) and obeys the naming convention for variables.
- `parameters`: Zero or more comma-separated variables that will be passed on to the code block when the function is called.
- `code to execute`: The code that executes when the function is called.

A function is called by using its name, followed by parenthesis enclosing any parameters the function expects:
### Arguments

Arguments can be passed to a function by position or by name. By position passes arguments in the order they were defined in the function. By name specifies the name of the parameter given by the function.

```pseudo
my_function <- function(arg1, arg2, arg3) {
  print((arg1 + arg2) * arg3)
}

# Passing arguments by position:
my_function(value1, value2, value3)

# Passing arguments by name:
my_function(arg1 = value1, arg2 = value2, arg3 = value3)
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
odd_or_even(15)
```

The output of the above will be:

```shell
[1] "Even."
[2] "Odd."
```

### The `return()` Function

The `return()` function stops execution of the function and returns a result value. Unlike other languages, `return()` in R is a function and the result being returned must be enclosed in parenthesis.

```r
my_function <- function() {
  x <- 1
  x <- x + 1
  return (x)
  # The following lines are never executed.
  x <- 15
  print(x)
}

y <- my_function()
print(y)
```

The output of the above will be:

```shell
[1] 2
```

### Default Parameter Values

R functions can be defined with default values for arguments that are omitted when the function is called. This is done with the following syntax:

```r
default10 <- function(x = 10) {
  return(x)
}

print(default10(5))
print(default10())
```

The output of the above looks like this:

```shell
[1] 5
[1] 10
```
