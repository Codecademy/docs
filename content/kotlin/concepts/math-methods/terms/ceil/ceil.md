---
Title: 'ceil()'
Description: 'Rounds a floating-point number up to the nearest integer.'
Subjects:
  - 'Computer Science'
  - 'Mobile Development'
Tags:
  - 'Android'
  - 'Math'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`ceil()`** method in Kotlin's `math` library rounds a floating-point number up to the nearest integer.

## Syntax

```pseudo
kotlin.math.ceil(x)
```

- `x`: A value of type `Double` or `Float` to be rounded up.

## Example

The following code demonstrates a basic implementation of the `ceil()` method.

```kotlin
val myDouble: Double = 7.5
val myFloat: Float = 6.3f
val myInt: Int = 4

val resultDouble: Double = ceil(myDouble)
val resultFloat: Float = ceil(myFloat)
val resultInt: Double = ceil(myInt.toDouble())

fun main() {
  println(resultDouble)
  println(resultFloat)
  println(resultInt)
}
```

This will return the following output:

```shell
8.0
7.0
4.0
```
