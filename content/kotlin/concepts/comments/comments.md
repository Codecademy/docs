---
Title: 'Comments'
Description: 'Comments are pieces of text within a program that are ignored by the compiler but provide information meant to aid with understanding the code.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'Comments'
  - 'Documenation'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

**Comments** are pieces of text within a Kotlin program that are ignored by the compiler. They can be text, symbols, or valid code meant to provide additional information to aid in understanding the program. Comments are good for a variety of reasons like explaining a code block or indicating some hints.

## Single-line Comments

In Kotlin, single-line comments are created with two consecutive forward slashes `//`:

```kotlin
// Prints text in ("...")
println("The line above is a single line comment");
```

A single-line comment can also be used inline to comment after a line of code:

```kotlin
println("This is a single line comment") // Prints text in ("...")
```

## Multi-line Comments

Multi-line comments are created by surrounding the lines with `/*` at the beginning and `*/` at the end:

```kotlin
/*
The text in ("...")
would be only code to be executed
*/
println("The line above is a multi-line comment");
```

## Example

The code in the following that is commented out will not execute when the program is run:

```kotlin
// Calculate sum of values
var operation = 100 + 50

println(operation)
// Output: 150
```
