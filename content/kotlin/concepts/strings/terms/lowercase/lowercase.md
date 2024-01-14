---
Title: '.lowercase()'
Description: 'Converts a string to lowercase.'
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

The **`.lowercase()`** method in Kotlin changes all characters in a string to lowercase. It does not modify the original string, rather it returns a new transformed string. This is useful when case-sensitive operations are performed.

## Syntax

```pseudo
String.lowercase()
```

- `String`: The string to be converted to lowercase.

## Example

The following example shows how to use the `.lowercase()` method on a string:

```kotlin
fun main() {
  val originalString = "Hello, World!"
  val newString = originalString.lowercase()
  println("Original String: $originalString")
  println("Lowercased String: $newString")
}
```

The above code will return the following output:

```shell
Original String: Hello, World!
Lowercased String: hello, world!
```
