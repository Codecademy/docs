---
Title: 'ln()'
Description: 'Calculates the natural logarithm of a number.'
Subjects:
  - 'Code Foundation'
  - 'Computer Science'
Tags:
  - 'Math'
  - 'Functions'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`ln()`** method in Kotlin's `math` class is used to calculate the natural logarithm of a number.

## Syntax

```pseudo
ln(n)
```

- `n`: The number of type `Double` for which the logarithm is to be calculated.

The `ln()` method returns a value of type `Double`, the logarithm of `n` to _e_. The following values represent special cases:

- `ln(NaN)` is `NaN`
- `ln(n)` is `NaN` if `n < 0.0`
- `ln(+Inf)` is `+Inf`
- `ln(0.0)` is `-Inf`

## Example

This example shows how to use the `ln()` method to calculate the natural logarithm of `6`:

```kotlin
import kotlin.math.*

fun main(){
    println(ln(6.0))
}
```

The output of this code will be:

```shell
1.791759469228055
```
