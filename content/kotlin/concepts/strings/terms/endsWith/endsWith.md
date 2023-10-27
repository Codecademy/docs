---
Title: '.endsWith()'
Description: 'Returns a boolean value representing whether the sequence ends with the specified suffix.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Comparison'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.endsWith()`** method compares the end of the sequence with the given suffix and returns a boolean value indicating whether they are the same or not.

## Syntax

```pseudo
String.endsWith(suffix, ignoreCase)
```

- `String`: The sequence which the suffix is to be compared with.
- `suffix`: A sequence of length `n`, to be compared with the last `n` elements of `String`.
- `ignoreCase`: A boolean value dictating whether function is to be case insensitive. Defaults to false.

## Example

The example demonstrates the use of `.endsWith()` to compare the end of a sequence, first to the string "@gmail.com", then with the string "@hotmail.com".

```kotlin
fun main() {
  val str = "JohnAppleseed@Hotmail.com"
  val sfx1 = "@gmail.com"
  val sfx2 = "@hotmail.com"

  val endsWithSfx1 = str.endsWith(sfx1)
  println(endsWithSfx1)

  val endsWithSfx2 = str.endsWith(sfx2, true)
  println(endsWithSfx2)
}
```

The output of this code will be:

```shell
false
true
```
