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

The **`.minus()`** method subtracts an `Instant` or `Duration` from an `Instant`, returning an `Instant` if passed a `Duration` and vice versa.

## Syntax

```pseudo
fun Instant.minus(other: Instant): Duration
fun Instant.minus(duration: Duration): Instant
```

- `Instant`: A moment in time.
- `Duration`: A duration of time.

## Example

The example demonstrates the use of `.minus()` to subtract a `DateTimePeriod` and an `Instant` from an `Instant`.

```kotlin
import java.time.Instant
import java.time.Duration
fun main() {
  val t1 = Instant.parse("2008-09-29T12:00:00Z")
  val t2 = t1.plus(Duration.ofDays(125))
  val p1 = t2.minus(t1)
  println(p1.toHours())

  val t3 = t2.minus(p1)
  println(t3)
  println(t1)
}
```

The output of this code will be:

```shell
3000
"2008-09-29T12:00:00Z"
"2008-09-29T12:00:00Z"
```