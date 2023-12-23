---
Title: '.removePrefix()'
Description: 'Removes a specified prefix from a Kotlin string, if present.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Data Structures'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.removePrefix()`** method in Kotlin is used to remove a specified prefix from a string if it is present. It returns a new string with the specified prefix removed if it exists. If the original string does not start with the specified prefix, the method returns the original string unchanged.

## Syntax

```pseudo
String.removePrefix(prefix)
```

- `String`: The original string from which the prefix will be removed.
- `prefix`: The prefix which will be removed from the original string.

## Example

This example shows how to use the `.removePrefix()` method to remove a prefix from a Kotlin string:

```kotlin
fun main() {
  val originalString = "HelloWorld.jpg"
  val prefix = "Hello"
  val modifiedString = originalString.removePrefix(prefix)

  println("Modified String: $modifiedString")
}
```

The result will be printed as:

```shell
Modified String: World.jpg
```
