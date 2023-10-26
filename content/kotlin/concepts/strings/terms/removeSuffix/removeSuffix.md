---
Title: 'removeSuffix()'
Description: 'Removes a specified suffix from a Kotlin string, if present.'
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

The **`removeSuffix()`** method in Kotlin is used to remove a specified suffix from a string if it is present.The `removeSuffix()` method returns a new `string` with the specified suffix removed if it exists. If the original string does not end with the specified suffix, the method returns the original string unchanged.

## Syntax

```pseudo
fun String.removeSuffix(suffix: CharSequence): String
```

- `String`: The original string from which the suffix will be removed.
- `suffix`: The suffix that will be removed from the original string.

## Example

This example shows how to use the `removeSuffix()` method to remove a suffix from a Kotlin string:

```kotlin
fun main() {
    val originalString = "HelloWorld.jpg"
    val suffix = ".jpg"

    val modifiedString = originalString.removeSuffix(suffixToRemove)
    println("Modified String: $modifiedString")
}
```

In this example, `removeSuffix()` method is used to remove the ".jpg" suffix from the original string. The result will be printed as:

```shell
Modified String: HelloWorld
```
