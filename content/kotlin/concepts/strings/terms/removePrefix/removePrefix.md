---
Title: 'removePrefix()'
Description: 'Removes a specified prefix from a string, if present.'
Subjects:
  - 'Programming'
  - 'Software Development
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
import kotlin.text.*
val modifiedString = originalString.removePrefix(prefix)
```

`originalString`: The original string from which you want to remove the prefix.
`prefix`: The prefix you want to remove from the original string.

The `removePrefix()` method returns a new `string` with the specified prefix removed if it exists. If the original string does not start with the specified prefix, the method returns the original string unchanged.

## Example

This example shows how to use the `removePrefix()` method to remove a prefix from a Kotlin string:

```kotlin
import kotlin.text.*

fun main() {
    val originalString = "HelloWorld"
    val prefix = "Hello"

    val modifiedString = originalString.removePrefix(prefix)
    println("Modified String: $modifiedString")
}
```

In this example, the `removePrefix()` method is used to remove the "Hello" prefix from the original string. The result will be printed as:

````shell
Modified String: World```
````
