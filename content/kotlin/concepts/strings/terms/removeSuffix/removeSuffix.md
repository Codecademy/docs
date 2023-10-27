---
Title: '.removeSuffix()'
Description: 'Removes a specified suffix from a Kotlin string, if present.'
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

The **`.removeSuffix()`** method in Kotlin is used to remove a specified suffix from a string if it is present. The `.removeSuffix()` method returns a new string with the specified suffix removed if it exists. If the original string does not end with the specified suffix, the method returns the original string unchanged.

## Syntax

```pseudo
String.removeSuffix(suffix)
```

- `String`: The original string from which the suffix will be removed.
- `suffix`: The suffix that will be removed from the original string.

## Example

This example shows how to use the `.removeSuffix()` method to remove a suffix from a Kotlin string:

```kotlin
fun main() {
  val originalString = "HelloWorld.jpg"
  val suffix = ".jpg"

  val modifiedString = originalString.removeSuffix(suffix)
  println("Modified String: $modifiedString")
}
```

The result will be printed as:

```shell
Modified String: HelloWorld
```
