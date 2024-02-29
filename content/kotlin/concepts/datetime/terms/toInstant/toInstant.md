---
Title: '.toInstant()'
Description: 'Converts a string representing an instant in ISO-8601 format, which includes both date and time components along with the time zone offset, into an Instant value.'
Subjects:
  - 'Mobile Development'
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Android'
  - 'Kotlin'
  - 'Date'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.toInstant()`** method is a simple way to convert a date-time string into a Kotlin readable format. The conversion results in obtaining an Instant value, which is a standardized representation of time independent of time zones. Essentially, it helps transform a textual representation of a moment in time into a format that can be more easily manipulated and compared programmatically.

## Syntax

```pseudo
fun String.toInstant(): Instant
```

## Example

```kotlin
import kotlinx.datetime.toInstant

fun main() {
    val iso8601String = "2023-11-13T11:04:44+00:00"
    val instant = iso8601String.toInstant()
    println(instant)
}
```

The above code gives the following output:

```shell
2023-11-13T11:04:44Z
```
