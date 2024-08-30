---
Title: 'floor()'
Description: 'Returns the nearest integer that is lower than or equal to the value passed.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Methods'
  - 'Floor'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`floor()`** function takes a value and returns the nearest integer that is lower than or equal to the value given.

The result returns a value type of `float`.

## Syntax

```pseudo
import kotlin.math.*
floor(x)
```

Where `x` is the number of type double to be rounded down to the nearest integer.

## Example

The following example demonstrates a basic implementation of the `floor()` method.

```kotlin
import kotlin.math.*
println(floor(3.4))
```

This will output:

```shell
3.0
```

The result will be a float value of `3` as the function rounds `3.4` down to `3`.
