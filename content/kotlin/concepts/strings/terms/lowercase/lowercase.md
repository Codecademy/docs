---
Title: '.lowercase()'
Description: 'Compares two strings lexicographically.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.lowercase()`** method in Kotlin is changes all characters in a string to lowercase. It does not modify the original string, rather it returns a new transformed string. This is useful when case-sensitive operations are performed.

## Syntax

```pseudo
String.lowercase(): String
```

- `String`: The string to be converted to lowercase.

## Example

This example shows how to use the `.lowercase()` method on a string:

```kotlin
fun main() {
    val originalString = "Hello, World!"
    val newString = originalString.lowercase()
    println("Original: $originalString")
    println("Lowercase: $newString")
}
```

The code will return the following output:

```shell
Original: Hello, World!
Lowercase: hello, world!
```
