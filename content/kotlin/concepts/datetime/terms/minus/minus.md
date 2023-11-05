---
Title: '.minus()'
Description: 'General method for performing subtraction operation on an Instant.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Kotlin'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.minus()`** method subtracts an `Duration` from an `Instant`, returning the resulting `Instant`.

## Syntax

```pseudo
fun Instant.minus(amountToSubtract: Long, unit: TemporalUnit): Instant
fun Instant.minus(amountToSubtract: TemporalUnit): Instant
```

- `Instant`: A moment in time.
- `TemporalUnit`: A unit of time.

## Example

The example demonstrates the use of `.minus()` to subtract a `Duration` from an `Instant`.

```kotlin
import java.time.Instant
import java.time.Duration
import java.time.temporal.ChronoUnit
fun main() {
    val t1 = Instant.parse("2008-09-29T12:00:00Z")
    val t2 = t1.minus(Duration.ofDays(125))
    val t3 = t1.minus(125, ChronoUnit.DAYS)
    println(t2)
    println(t3)
}
```

The output of this code will be:

```shell
"2008-05-27T12:00:00Z"
"2008-05-27T12:00:00Z"
```