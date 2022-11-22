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

**Variables** are used to store values with specific [data types](https://www.codecademy.com/resources/docs/go/data-types) (e.g., numbers, strings, or booleans) in memory for later use.

## Difference From Constants

Unlike constants, variables can be reassigned after declaration, but its data type must remain the same as it was when first initialized. For example, an `int` variable can start with a value of 2 and be reassigned to 0 (another `int`), but it can't be reassigned as "Codecademy" (a `string`).

## Syntax

```pseudo
var name type
```

Variable statements begin with the `var` keyword, followed by its `name`, and then the variable `type`.

Variable names begin with a letter and are case-sensitive. They must not contain special characters, only letters and digits. They must also not be a reserved Go keyword such as `if` or `for`.

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
