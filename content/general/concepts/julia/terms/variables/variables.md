---
Title: 'Variables'
Description: Stores data that can be manipulated and referenced throughout the code.'
Subjects:
  - 'Computer Science'
  - 'Data Visualization'
Tags:
  - 'Programming'
  - 'Dynamic Programming'
CatalogContent:
  - paths/code-foundations'
  - 'paths/computer-science'
---

In Julia, **variables** are used to store data. They can hold various data types and are mutable by default, allowing their values to be changed after assignment.

## Syntax

```pseudo
variable_name = value
```

- `variable_name`: This is the chosen name for the variable, following Julia's naming rules and conventions.
- `value`: Represents the data or value assigned to the variable, which can be of various types supported by Julia.

## Example

```julia
integer_variable = 10
float_variable = 3.14
string_variable = "Julia"
boolean_variable = true

println("Integer variable: ", integer_variable)
println("Float variable: ", float_variable)
println("String variable: ", string_variable)
println("Boolean variable: ", boolean_variable)
```

Output would be as following:

```shell
Integer variable: 10
Float variable: 3.14
String variable: Julia
Boolean variable: true
```

## Variable Nomenclature in Julia

When declaring a variable in Julia, the variable name goes first, optionally followed by a type annotation, and then the value.

If a variable does not need a value assigned immediately, it can be declared without a type, and a value can be assigned later.

```julia
name = value  # without type annotation
name::Type = value  # with type annotation
```

> **Variables** in Julia are dynamic and can hold values of different types, but you can optionally declare the type for performance optimization and type-checking.
