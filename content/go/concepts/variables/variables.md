---
Title: 'Variables'
Description: 'Variables are used to store values of specific data types in memory for later use.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Variables'
  - 'Booleans'
  - 'Strings'
  - 'Integers'
CatalogContent:
  - 'learn-go'
  - 'paths/back-end-engineer-career-path'
---

**Variables** are used to store values with specific [data types](https://www.codecademy.com/resources/docs/go/data-types) (e.g. numbers, strings, or booleans) in memory for later use.

## Variables Versus Constants

Unlike constants, variables can be reassigned after declaration, but its data type must remain the same as it was when first initialized. For example, an `int` variable can start with a value of 2 and be reassigned to 0 (another `int`), but it can't be reassigned as "Codecademy" (a `string`).

> **Note:** In Go, constants can not be declared from calculated values, in other words, the value cannot be the result of an expression (e.g. the sum of two values or variables).

<!--linebreak-->

> **Note:** In many languages constants are named using all capitals or beginning with a capital. This convention is not utilized in Go because capitalization is reserved to designate a package as public or private.

## Syntax

```pseudo
var name type
```

Variable statements begin with the `var` keyword, followed by its `name`, and then the variable `type`.

Variable names can begin with a letter, or underscore, and are case-sensitive. Although the use of underscores is permitted, it's not recommended. Camel case is the idiomatic convention for variable naming. Variable names can be composed of letters and digits (in GO letters may include a range of symbols, however it is not recommended to use these). Additionally, they must also not be a reserved Go keyword such as `if` or `for`.

## Declaration

There are multiple ways to declare a variable. The syntax is similar to other programming languages.

### Initializing After Declaring

This way is used if a group of variables is needed but will be assigned values later in the program:

```go
var numbers int
var nameOfProgrammer string
numbers = 100
nameOfProgrammer = "Codecademy Learner"
```

### Initializing With Declaring

This way is used to assign values directly when defining a variable:

```go
var state bool = true
var nameOfProgrammer string = "Codecademy Learner"
```

> **Note:** If a value is not declared Go will assign a zero value by default (`0` or `false` for bools).

### Initializing Using Type Inference

This way lets the compiler assign the type for the input without declaring it:

```go
var piNumber = 3.14
var myName = "Abdulrahman"
```

### Fast Initializing

This way skips almost all of the syntax and only needs the name of the variable followed by `:=`:

```go
dontMove := false
```

### Multiple Variable Initializing

This way is used to declare multiple variables on the same line. Variables are separated with a comma (`,`):

```go
var numbers, name = 100, "Codecademy User"
user, activeState := "Abdulrahman", true
```

> **Note:** In Go, all variables must be utilized, or 'read'. If a variable is not utilized it will result in a compile-time error.
