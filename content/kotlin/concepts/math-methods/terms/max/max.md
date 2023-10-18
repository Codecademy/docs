---
Title: 'max()'
Description: 'Returns the greatest number in between 2 values'
Subjects:
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Methods'
  - 'Max'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`max()`** function takes two value and returns the greater value between the two values.

The result returns a value type of the numbers provided in the parameters.

## Syntax

```pseudo
import kotlin.math.*
max(x, y)
```

Where `x, y` are the numbers of either integer or float data type and they are compared!.

## Example

The following example demonstrates a basic implementation of the `max()` method.

```kotlin
import kotlin.math.*
println(max(3.4, 5.7))
```

This will output:

```shell
5.7
```

The result will be  `5.7` as the function compares the values  `3.4` & `5.7` and finds that `5.7` is greater.
