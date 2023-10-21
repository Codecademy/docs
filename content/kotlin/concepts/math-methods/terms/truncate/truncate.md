---
Title: 'truncate()'
Description: 'Rounds a double or float argument towards zero.'
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

The **`truncate()`** method takes a double or float argument and rounds the value to equal the closest integer towards zero. If the value is positive, it will be rounded *down* towards zero. If the value is negative, it will be rounded *up* towards zero.

> **Note:** `truncate()` does not return an integer value, rather it returns a double or float that equals an integer value.

## Syntax

```psuedo
truncate(arg)
```

Where `arg` is a double or float number to be rounded.

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