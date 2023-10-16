---
Title: '.ceil()'
Description: 'The `.ceil()` method in Kotlin is used to round a floating-point number up to the nearest integer.'
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

## Syntax

```pseudo
  kotlin.math.ceil(x: Double)
```

## Example:

```kotlin
val myDouble: Double = 7.5
val myFloat: Float = 6.3f
val myInt: Int = 4

val resultDouble: Double = ceil(myDouble)
val resultFloat: Double = ceil(myFloat.toDouble())
val resultInt: Double = ceil(myInt.toDouble())

println(resultDouble) // Outputs: 8.0
println(resultFloat)  // Outputs: 7.0
println(resultInt)    // Outputs: 4.0
```
