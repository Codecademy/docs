---
Title: 'sqrt()'
Description: 'Returns the square root of the number'
Subjects:
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Methods'
  - 'Sqrt'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`sqrt()`** function takes a value and returns the square root of the number.

The result returns a value type of `float`.

## Syntax

```pseudo
import kotlin.math.*
sqrt(x)
```

Where `x` is the number of type int or double which is square rooted to a double value.

## Example

The following example demonstrates a basic implementation of the `sqrt()` method.

```kotlin
import kotlin.math.*
println(sqrt(25.0))
```

This will output:

```shell
5.0
```

The result will be a float value of `5` as the function returns the square root of `25.0` which is `5.0`.
