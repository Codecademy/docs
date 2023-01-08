---
Title: 'Strings'
Description: 'A string in Kotlin is an object that holds a sequence of characters contained within a pair of double quotes (").'
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

In Kotlin, a `string` is an immutable object that represents a sequence of characters.

## Syntax

```pseudo
val stringName: String = "string value"
```

## Example

You can also use `string` templates to include dynamic values in your strings. To do this, you enclose the dynamic value in curly braces and precede it with a dollar sign, like this:

```kotlin
val dynamicValue = 4
val stringName: String = "The value of dynamicValue is $dynamicValue"
```

Here is an example of how you might use strings in Kotlin:

```kotlin
fun main(args: Array<String>) {
    val greeting: String = "Hello, World!"
    println(greeting)
}
```

The output for the above code will be:

```
Hello, World!
```
