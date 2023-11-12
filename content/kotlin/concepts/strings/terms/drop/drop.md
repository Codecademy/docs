---
Title: '.drop()'
Description: 'Returns a string where the characters have been removed from the start to the nth index given.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Kotlin'
  - 'Strings'
  - 'Function'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.drop()`** method removes characters from the start (0th index) of a given string to the nth index element.

## Syntax

```pseudo
String.drop(nth-index)
```

- `String`: The string to be modified. The method will return a new string with the specified values missing.
- `nth-index`: The method will remove characters up to this value.

## Example

The example demonstrates the use of `.drop()` to remove characters from the beginning of the string.

```kotlin
fun main() {
  val str = "This is new"
  val str2 = "I'm a string"

  println(str.drop(8))   // Drops 'This is '
  println(str2.drop(6)) // Drops 'I'm a '
}
```

The output of the code above will be:

```shell
new
string
```
