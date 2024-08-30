---
Title: '.padEnd()'
Description: 'Pads a string using specified characters.'
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

The **`.padEnd()`** method in Kotlin is used to pad a string to a specific length by adding a specific character, sequence of characters, or space at the end of the original `string`. It returns a string of length equal to the specified length, appended as many times as necessary with the specified character to reach the specified length.

## Syntax

```pseudo
String.padEnd(length, padChar): String
```

- `String`: The string to be padded.
- `length`: The desired length of the resulting string after padding.
- `padChar`: The character that will be added to the end of the string if the original string length is less than the desired length. Space is used by default.

## Example

This example shows how to use the `.padEnd()` method to append characters to different `strings`:

```kotlin
fun main() {
  val padWithSpace = "Hello".padEnd(8)
  println("'$padWithSpace'")

  val padWithCharacter = "Hello".padEnd(8, '!')
  println("'$padWithCharacter'")

  val noPad = "Hello".padEnd(3)
  println("'$noPad'")
}
```

The code will return the following output:

```shell
'Hello   '
'Hello!!!'
'Hello'
```
