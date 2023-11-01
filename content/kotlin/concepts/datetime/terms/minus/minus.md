---
Title: '.minus()'
Description: 'General method for performing subtraction operation on Instants.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Kotlin'
  - 'Instant'
  - 'Datetime'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.minus()`** method subtracts an `Instant` or `DateTimePeriod` from an `Instant`, returning an `Instant` if passed a `DateTimePeriod` and vice versa.

## Syntax

```pseudo
fun Instant.minus(other: Instant, unit: DateTimeUnit, timeZone: TimeZone): DateTimePeriod
fun Instant.minus(other: DateTimePeriod, unit: DateTimeUnit, timeZone: TimeZone): Instant
```

- `Instant`: A moment in time.
- `DateTimeUnit`: A unit of time.
- `DateTimePeriod`: The difference in time between two `Instants`.
- `TimeZone`: This parameter is of type `TimeZone`. It indicates that the calculation should consider the time zone when determining the number of days between the two `Instant` objects.

## Example

The example demonstrates the use of `.minus()` to subtract a `DateTimePeriod` and an `Instant` from an `Instant`.

```kotlin
fun main() {
  val t1 = Instant.parse("2008-09-29T12:00:00Z")

  val t2 = t1.plus(125, DateTimeUnit.DAYS)

  val p1 = t2.minus(t1, unit = DateTimeUnit.HOURS)
  println(p1)

  val t3 = t2.minus(p1)
  println((t3, t1))
}
```

The output of this code will be:

```shell
3000
("2008-09-29T12:00:00Z", "2008-09-29T12:00:00Z")

```