---
Title: '.daysUntil()'
Description: 'Returns the number of days between two Instants.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Kotlin'
  - 'Instant'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.daysUntil()`** method calculates the number of whole days between two instants and returns the result as an `Int`. If the number of days is too large to fit within the bounds of the `Int` datatype, the method will return `Int.MAX_VALUE` if the result is positive or `Int.MIN_VALUE` if the result is negative.

## Syntax

```pseudo
fun Instant.daysUntil(other: Instant, timeZone: TimeZone): Int
```

-`Instant`: A moment in time.
- `TimeZone`: This parameter is of type `TimeZone`. It indicates that the calculation should consider the time zone when determining the number of days between the two `Instant` objects.

## Example

The example demonstrates the use of `.daysUntil()` to calculate the number of days between two `Instants`.

```kotlin
fun main() {
  Instant t1 = Instant.now()

  Instant t2 = t1.plus(125, HOURS)

  Instant t3 = t2.daysUntil(t1)
  println(t3)
}
```

The output of this code will be:

```shell
-5
```
