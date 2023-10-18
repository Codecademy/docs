---
Title: 'min()'
Description: 'Returns the smallest number in between the two numbers.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Methods'
  - 'Min'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`min()`** function takes two values and returns the smaller value in among them.

The result returns a value type of `min`.

## Syntax

```pseudo
import kotlin.math.*
min(x)
```

Where `x & y` is the numbers of type int or double to be compared and return the smaller number.

## Example

The following example demonstrates a basic implementation of the `min()` method.

```kotlin
import kotlin.math.*
println(min(3.4, 5.7))
```

This will output:

```shell
3.4
```

The result will be a double value of `3.4` as the function returns the smaller value among `3.4` & `5/7` which is `3.4`.
