---
Title: 'cbrt()'
Description: 'Returns the cube root of the argument.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`math.cbrt()`** method returns the cube root of the given argument.

## Syntax

```pseudo
cbrt(n)
```

- `n` refers to the number passed to the method of type `Double` or `Float`.

## Example

The following example uses `cbrt()` to return the cube roots of `-6.5`, `2`, and `-340.8`:

```kotlin
// version 1.1.2
import kotlin.math.cbrt
fun main(args: Array<String>) {
    val x = -6.5
    val y = 2.0
    val z = -340.8
    println("The cube root of $x is ${cbrt(x)}")
    println("The cube root of $y is ${cbrt(y)}")
    println("The cube root of $z is ${cbrt(z)}")
}
```

This produces the following output:

```shell
The cube root of -6.5 is -1.862518585537463
The cube root of 2.0 is 1.2599210498948732
The cube root of -340.8 is -6.928203230275508
```
