---
Title: 'Comments'
Description: 'A comment is a piece of text within a program that is not executed but provides additional information to aid in understanding the code.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'Comments'
  - 'Documenation'
Codecademy Hub Page: 'https://www.codecademy.com/catalog/language/kotlin'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

**Comments** are pieces of text within a Kotlin program that are usually alternate code not to be executed but mostly exist for code testing. They provide additional information to aid in understanding the code.

## Single-line Comments

In Kotlin, Single-line comments are created with two consecutive forward slashes `//`:

```kotlin
// Prints text in ("...")
println("The line above is a single line comment");
```

A single-line comment can also be used inline to comment after a line of code:

```kotlin
println("This is a single line comment") // Prints text in ("...")
```

## Multi-line Comments

Multi-line comments are created by surrounding the lines with `/*` at the beginning and `*/` at the end. Comments are good for a variety of reasons like explaining a code block or indicating some hints, etc.

```kotlin
/*  
The text in ("...")
would be only code to be executed
*/
println("The line above is a double line comment");
```

## Example

The code in the following that is not commented out will execute when the program is run:

```kotlin
/*
Arithmetic Operation
Written by Ebube
*/


// Calculate sum of values
var operation = 100 + 50 

// Output operation
  println(operation)
```
