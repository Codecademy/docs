---
Title: '.endsWith()'
Description: 'Returns a boolean value representing wether the sequence ends with the specified suffix.' 
Subjects: 
  - 'Code Foundations'
  - 'Computer Science'
Tags: 
  - 'String'
  - 'Comparison'
  - 'Kotlin'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.endsWith()`** method compares the end of the sequence with the given suffix and returns a boolean value indicating wether they are the same or not.

## Syntax

```pseudo
String.endsWith(suffix: String, ignoreCase: Boolean = False): Boolean
```

`String`: The sequence which the suffix is to be compared with.
`suffix`: a sequence of length `n`, to be compared with the last `n` elements of `String`.

## Example
The example demonstrates the use of `.endsWith()` to compare the end of a sequence, first to the string "@gmail.com", then to the string "@hotmail.com".

```kotlin
fun main {
  val str = "JohnAppleseed@hotmail.com"
  val sfx1 = "@gmail.com"
  val sfx2 = "@hotmail.com"

  val endsWithSfx1 = str.endsWith { sfx1 }
  println(endsWithSfx1)

  val endsWithSfx2 = str.endsWith { sfx2 }
  println(endsWithSfx2)
  }
```

The output of this code will be:

```shell
false
true
```
