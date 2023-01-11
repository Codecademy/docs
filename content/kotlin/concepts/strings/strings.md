---
Title: 'Strings'
Description: 'Strings are immutable objects that are sequences of characters contained within a pair of double quotes.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Data Types'
  - 'Characters'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

**Strings** are immutable objects that represent a sequence of characters contained within double quotes (`""`).

## Syntax

```pseudo
val stringName: String = "string value"
```

In Kotlin, string values are always defined as instances of the `String` class.

### String Templates

Templates can also be used to dynamically produce string values. Dynamic values don't have to start as strings, and can either be directly referenced with a dollar sign (`$`) or evaluated as a string with additional curly braces (`{}`).

## Example

The following example showcases the various ways strings are used in Kotlin:

```kotlin
fun main(args: Array<String>) {
  // String literals
  val greeting: String = "Hello, World!"
  println(greeting)
  
  // String templates
  val dynamicValue = 4
  val stringOne: String = "The value of dynamicValue is $dynamicValue"
  System.out.println(stringOne)
  
  val a = dynamicValue
  val b = 5
  val stringTwo: String = "The sum of a and b is ${a + b}"
  System.out.println(stringTwo)
}
```

The output for the above code will be:

```shell
Hello, World!
The value of dynamicValue is 4
The sum of a and b is 9
```

## String Templates

Templates can also be used to dynamically produce string values. Dynamic values don't have to start as strings, and can either be directly referenced with a dollar sign (`$`) or evaluated as a string with additional curly braces (`{}`). The following showcases both techniques:

```kotlin
val dynamicValue = 4
val stringOne: String = "The value of dynamicValue is $dynamicValue"
System.out.println(stringOne)

val a = 4
val b = 5
val stringTwo: String = "The sum of a and b is ${a + b}"
System.out.println(stringTwo)
```

This will print the following output:

```shell
The value of dynamicValue is 4
The sum of a and b is 9
```
