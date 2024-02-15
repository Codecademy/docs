---
Title: 'Functions'
Description: 'Functions are blocks of code that perform specific tasks and can be repeatedly called within other parts of the code.'
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

**Functions** are blocks of code that perform specific tasks and can be repeatedly called within other parts of the code. A function is not called when it is defined, but only when another part of the code executes the function.

## Syntax

```pseudo
my_function <- function(parameters) {
  # Code to execute.
}

my_function(parameters)
```

Other than being defined with a `function` keyword, the syntax for R functions is slightly different compared to other programming languages:

- `my_function`: The name of the function. It is a [variable](https://www.codecademy.com/resources/docs/r/variables) and obeys the naming convention for variables.
- `<-`: The operator that assigns the function definition to the `my_function` variable.
- `parameters`: Zero or more comma-separated variables that will be passed on to the code block when the function is called.
- `# Code to execute`: The code inside curly brackets `{}` that executes when the function is called.

A function is called with its name, followed by any parameters that are expected in the parentheses.

### Arguments

Arguments can be passed to a function by position or by name. Positional arguments are passed in the order they were defined in the function. Named arguments specify the name of the parameter given by the function.

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

The following example defines an `odd_or_even()` function that takes a `num` argument. When called, it prints a message saying if `num` is even or odd:

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

The `return()` function stops execution of the function and returns a result value. Unlike other languages, `return()` in R is a function and the result argument must be enclosed in parentheses:

```r
my_function <- function() {
  x <- 1
  x <- x + 1
  return(x)

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
