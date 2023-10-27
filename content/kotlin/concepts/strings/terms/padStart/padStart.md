---
Title: '.padStart()'
Description: 'Pads the start of a string with the specified character.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'String'
  - 'Padding'
  - 'Kotlin'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.padStart()`** method pads the beginning of a string with the specified fill character. The character will be used to meet the overall length specified by the first argument given. If no character is provided the padding will be whitespace by default.

## Syntax

```pseudo
String.padStart(length, padChar)
```

- `String`: The string to be modified.
- `length`: An integer that represents the total length of the string returned (with padding).
- `padChar`: The character to be used (enclosed by `''`) as padding, defaults to whitespace.

## Example

The example below demonstrates the use of `.padStart()` to pad a string.

```kotlin
fun main() {
  val str = "codecademydocs"

  val str2 = str.padStart(14)
  println(str2)

  val str3 = str.padStart(18, '-')
  println(str3)
}
```

The output of this code will be:

```shell
'codecademydocs'
'----codecademydocs'
```
