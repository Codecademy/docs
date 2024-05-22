---
Title: '.partition()'
Description: 'Returns two strings from the characters in the parameter string that satisfy a given predicate.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'Kotlin'
  - 'Booleans'
  - 'Strings'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

**`.partition()`** takes a string parameter and returns two new strings. The first new string contains those characters that satisfy a supplied predicate, and the second new string contains those that do not satisfy that predicate.

A predicate takes an argument and returns a boolean `true` or `false`. If `true` is returned, the argument is said to _satisfy_ the predicate. Otherwise, the argument does not satisfy the predicate.

## Syntax

```pseudo
xString.partition(xPredicate)
```

- **`xString`**: Supplies the string to be partitioned.
- **`xPredicate`**: Supplies the predicate that partitions the value of `xString`.

## Example

The following example uses the character method `.isUpperCase()` as the predicate within `.partition()` to partition a string into uppercase letter characters and other characters:

```kotlin
fun main () {
  val sampleString = "AbCd12/"
  println(sampleString.partition(){it.isUpperCase()})
}
```

The above example results in the following output:

```shell
(AC, bd12/)
```
