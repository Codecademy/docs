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

**`.toInstant()`** is a simple way to convert a date and time string into a format that can be easily used by Kotlin programs. The conversion results in obtaining an Instant value, which is a standardized representation of time that is independent of time zones. Essentially, it helps transform a textual representation of a moment in time into a format that can be more easily manipulated and compared programmatically.

## Syntax

```pseudo
fun String.toInstant(): Instant
```
* String: This is the type of the receiver object for the function.
* toInstant(): This is the name of the function.
* Instant: This is the return type of the function.

## Example

```kotlin
import java.time.Instant
import java.time.LocalDateTime
import java.time.OffsetDateTime
import java.time.format.DateTimeFormatter
import java.time.format.DateTimeParseException

fun main() {
    val iso8601String = "2023-11-13T11:04:44+00:00"

    // Define the formatter for the ISO-8601 date-time format
    val formatter = DateTimeFormatter.ISO_OFFSET_DATE_TIME

    // Parse the ISO-8601 string into a LocalDateTime object
    val localDateTime = LocalDateTime.parse(iso8601String, formatter)

    // Convert the LocalDateTime to Instant
    val instant = localDateTime.toInstant(OffsetDateTime.now().offset)

    // Print the Instant value
    println(instant)
}
```

Output:

```shell
2023-11-13T11:04:44Z
```
