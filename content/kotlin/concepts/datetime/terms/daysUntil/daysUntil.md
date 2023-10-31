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

The **`.daysUntil()`** method returns an Int of whole days between two instants. if the number is too large to fit in an Int datatype, the method will return Int.MAX_VALUE or Int.MIN_VALUE depending on the sign of the result.

## Syntax

```pseudo
Instant.daysUntil(Instant)
```

-`Instant`: A moment in time.

## Example

The example demonstrates the use of `.daysUntil()` to calculate the number of days between two Instants.

```kotlin
fun main() {
  Instant t1 = Instant.now()

  Instant t2 = t1.plus(amountToAdd = 125, Unit = HOURS)

  Instant t3 = t2.daysUntil(t1)
  println(t3)
}
```

The output of this code will be:

```shell
-5
```
