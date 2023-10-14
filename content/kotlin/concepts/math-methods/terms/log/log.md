---
Title: 'log()'
Description: 'Calculates the logarithm of a number with respect to base.'
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

The **`.log()`** method in Kotlin's `math` class is used to calculate the logarithm of a number with respect to base.

## Syntax

```pseudo
log(n, base)
```

- n: The number of type `double` for which the logarithm is to be calculated.
- base: The number of type `double` that specifies the logarithm base.

The `.log()` method returns a value of type `double`, the logarithm of `n` to `base`. The following are the special cases:

- `log(n, base)` is `NaN` if either `n` or `base` are `NaN`.
- `log(n, base)` is `NaN` when `n < 0` or `base <= 0` or `base == 1.0`.
- `log(+Inf, +Inf)` is `NaN`.
- `log(+Inf, base)` is `+Inf` for `base > 1` and `-Inf` for `base < 1`.
- `log(0.0, base)` is `-Inf` for `base > 1` and `+Inf` for `base < 1`.

## Example

This example shows how to use the `.log()` method to calculate the logarithm of `12` with base `2`:

```kotlin
import kotlin.math.*

fun main(){
    println(log(12.0,2.0))
}
```

The output of this code will be:

```shell
3.5849625007211565
```

## Codebyte Example

The following example is runnable and uses the `.log()` function to return the base `10` logarithm of numbers from `1` to `10`:

```codebyte/kotlin
import kotlin.math.*

fun main(){
    for(i in 1..10){
        val log = log(i.toDouble(),10.0)
        println("The log base 10 of $i is $log.")
    }
}
```
