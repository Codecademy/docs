---
Title: '.removeRange()'
Description: 'Removes a range of characters from a Kotlin string.'
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

The **`removeRange()`** method in Kotlin is used to remove a specified range of characters from a string. It returns a new string with the specified range of characters removed.

## Syntax

```pseudo
val modifiedString = originalString.removeRange(startIndex, endIndex)
```

`originalString`: The original string from which you want to remove characters.
`startIndex`: The index of the first character to be removed (inclusive).
`endIndex`: The index of the character following the last character to be removed (exclusive).

## Example

This example shows how to use the `removeRange()` method to remove a range of characters from a Kotlin string:

```kotlin
fun main() {
    val originalString = "Hello, World!"
    val startIndex = 5
    val endIndex = 12

    val modifiedString = originalString.removeRange(startIndex, endIndex)
    println("Modified String: $modifiedString")
}

```

In this example, `removeRange()` method is used to remove characters between indices 5 (inclusive) and 12 (exclusive). The result will be printed as:

```shell
Modified String: Hello!
```
