---
Title: 'truncate()'
Description: 'Rounds a number to the next whole value towards zero.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Numbers'
  - 'Methods'
  - 'Kotlin'
  - 'Math'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`truncate()`** method rounds a `Double` or `Float` argument to the next whole value towards zero. If the value is positive, it will be rounded _down_ towards zero. If the value is negative, it will be rounded _up_ towards zero.

> **Note:** `truncate()` does not return an integer value, rather it returns a `Double` or `Float` that equals an integer value.

## Syntax

```pseudo
truncate(arg)
```

Where `arg` is a `Double` or `Float` number to be rounded.

## Example

The following example demonstrates the behavior of `truncate()`:

```kotlin
import kotlin.math.*
//Imports the entire Kotlin Math library

fun main() {
  println(truncate(2.3))
  println(truncate(0.54))
  println(truncate(-6.8))
}
```

This outputs:

```shell
2.0
0.0
-6.0
```
