---
Title: '.asTimeZone()'
Description: 'Convert a UtcOffset object to a time zone with a fixed offset.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Date'
  - 'Time'
  - 'Kotlin'
  - 'Methods'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.asTimeZone()`** method in Kotlin Convert a UtcOffset object to a time zone with a fixed offset(FixedOffsetTimeZone). This function is part of the `kotlinx.datetime` library. It is particularly useful in scenarios where working with fixed time zones is required within applications that handle multiple time zones.

## Syntax

```psuedo
fun UtcOffset.asTimeZone(): FixedOffsetTimeZone
```

- `UtcOffset`: Represents the UTC offset for which the fixed-offset time zone is created.
- `FixedOffsetTimeZone`: The return type of the function, representing the fixed-offset time zone with the specified UTC offset.

## Example

```kotlin
// Importing the kotlinx.datetime library, which provides a modern date and time API for Kotlin.
import kotlinx.datetime.*

fun main() {

    // Converting a UtcOffset to a fixed-offset TimeZone.
    val timeZone = UtcOffset(hours = 5, minutes = 25).asTimeZone()

    // Printing a header to indicate information about the converted time zone will follow.
    println("Converted Time Zone:")

    // Printing the ID (name/identifier) of the converted time zone.
    println("  ID: ${timeZone.id}")

    // Printing the offset of the converted time zone from UTC.
    println("  Offset: ${timeZone.offset}")
}
```

The above example code block converts an `UtcOffset` to a `fixed-offset TimeZone` using Kotlin's `kotlinx.datetime` library, it sets the offset to `5` hours and `25` minutes and then prints the information about the converted time zone. It produces the following output:

```shell
Converted Time Zone:
  ID: +05:25
  Offset: +05:25
```
