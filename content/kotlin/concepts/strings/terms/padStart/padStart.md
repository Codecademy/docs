---
Title: '.padStart()'
Description: 'Pads the start of a character sequence with a string of the specified character and length.' 
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

The **`.padStart()`** method will pad the start of the sequence with the desired fill character to the specified length, returning the new character sequence. **`.padStart()`** is also used for left padding.

## Syntax

```pseudo
String.padStart(length: Int, padChar: String): String
```

`length`: The amount of padding to be added, in number of characters.
`padChar`: Character to be used as padding, defaults to ' '.

## Examples

The example demonstrates the use of `.padStart()` to pad a string.

```kotlin
fun main {
  val str = "codecademydocs"

  val str2 = str.padStart(3)
  println(str2)

  val str3 = str.padStart(4, "-")
  println(str3) 
  }
```

The output of this code will be:

```shell
'   codecademydocs'
'----codecademydocs'
```
