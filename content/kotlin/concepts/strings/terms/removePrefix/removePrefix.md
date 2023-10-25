---
Title: 'removePrefix()'
Description: 'Removes a specified prefix from a string, if present.'
Subjects:
  - 'Programming'
  - 'Software Development'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Data Structures'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/software-development'
---

The **`removePrefix()`** method in Kotlin is used to remove a specified prefix from a string if it is present.

## Syntax

```pseudo
val modifiedString = originalString.removePrefix(prefixToRemove)
```

`originalString`: The original string from which the prefix will be removed.
`prefix`: The prefix which will be removed from the original string.


## Example

This example shows how to use the `removePrefix()` method to remove a prefix from a Kotlin string:

```kotlin
fun main() {
    val originalString = "HelloWorld"
    val prefix = "Hello"

    val modifiedString = originalString.removePrefix(prefix)
    println("Modified String: $modifiedString")
}
```

In this example, the `removePrefix()` method is used to remove the "Hello" prefix from the original string. The result will be printed as:

```shell
Modified String: World
```
