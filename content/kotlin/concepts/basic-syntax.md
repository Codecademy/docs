---
Title: 'Basic Syntax'
Description: 'Syntax in computer programming refers to the rules that must be adhered to as regards the structure of the symbols, punctuation, and words of a programming language.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'Basic Syntax'
  - 'Documenation'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---


## What is Basic Syntax
The first step to learning a new programming language is to know and understand the syntax of the language. **Syntax** in computer programming refers to the rules that must be adhered to as regards the structure of the symbols, punctuation, and words of a programming language.

Kotlin runs on the Java Virtual Machine as a statically typed programming language. It is expressive, concise,and a great choice for Android apps development. 

Kotlin is very similar to Java in a lot of way, a major difference between the two is that ending a statement in kotlin doesnt need to be done with a **semicolon(;)**

Here is some basic syntax in Kotlin:

## Declaring a Function
Declaring a function is made possible using the `fun` keyword as seen below.

```kotlin
fun greet(name: String): String {
    return "Hello, $name!"
}

```

## Declaring a variable
Declaring a variable uses the `var` function. 

```kotlin
var a = 20
```

## Declaring a constant
Declaring a constant is done with a `val` function. 

```kotlin
val b = 19
```

## Declaring a Class

```kotlin
class Person(val name: String, var age: Int)
```

## Declaring an Object

```kotlin
object Database {
    val persons = mutableListOf<Person>()
}
```
