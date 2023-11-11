---
Title: 'toInstant()'
Description: 'Converts a string representing an instant in ISO-8601 format including date and time components and the time zone offset to an Instant value.'
Subjects:
  - 'Mobile Development'
Tags:
  - 'Android'
  - 'Kotlin'
  - 'Date'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

**toInstant** converts a string representing an instant in ISO-8601 format including date and time components and the time zone offset to an Instant value.

## Syntax

```pseudo
fun String.toInstant(): Instant
```
Converts this string representing an instant in ISO-8601 format including date and time components and the time zone offset to an Instant value.


## Example

```kotlin
expect fun LocalDateTime.toInstant(timeZone: TimeZone): Instant
```
Returns an instant that corresponds to this civil date/time value in the specified timeZone.

Note that the conversion is not always unambiguous. There can be the following possible situations:

* There's only one instant that has this date/time value in the timeZone. In this case the conversion is unambiguous.

* There's no instant that has this date/time value in the timeZone. Such situation appears when the time zone experiences a transition from a lesser to a greater offset. In this case the conversion is performed with the lesser offset.

* There are two possible instants that can have this date/time components in the timeZone. In this case the earlier instant is returned.

---

```kotlin
fun Duration.toDateTimePeriod(): DateTimePeriod
```
Constructs a DateTimePeriod from a Duration.

If the duration value is too big to be represented as a Long number of nanoseconds, the result will be Long.MAX_VALUE nanoseconds.

---