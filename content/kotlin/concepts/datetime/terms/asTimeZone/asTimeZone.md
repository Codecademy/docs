---
Title: '.asTimeZone()'
Description: 'Produces a time zone with a constant offset corresponding to the specified UTC offset.'
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

The **`.asTimeZone()`** method in Kotlin is used to convert a `ZoneId` object to a `TimeZone` object. This function does not directly convert a datetime object from one time zone to another. Instead, it converts a `ZoneId` to a `TimeZone`, which can then be used for various date and time operations. This function is part of the Kotlin standard library.
The direct function mentioned above refers to a function that is available directly on an object without the need for extension functions or additional classes. In this case, `.asTimeZone()` is an extension function and not a direct member function of the `ZoneId` 

## Syntax

``` psuedo
fun UtcOffset.asTimeZone(): FixedOffsetTimeZone
```

## Example

``` kotlin
import kotlinx.datetime.*

fun main() {
	 // Converting a UtcOffset to a fixed-offset TimeZone.
  val timeZone = UtcOffset(hours = 5, minutes = 25).asTimeZone()
  println("Converted Time Zone:")
  println("  ID: ${timeZone.id}")
  println("  Offset: ${timeZone.offset}")
}
```

This code block is a conversion of an `UtcOffset` to a `fixed-offset TimeZone` using Kotlin's kotlinx datetime library, it sets the offset to 5 hours and 25 minutes then prints the information about the converted time zone.

Output:
```
Converted Time Zone:
	ID: +05:25
	Offset: 05:25:00
```
From the above Code block:
-  `import kotlinx.datetime.*`: This line imports all classes and functions from the kotlinx-datetime library, which provides a modern date and time API for Kotlin.
- `UtcOffset(hours = 5, minutes = 25)`: This part creates a UtcOffset object representing an offset of +5 hours and +25 minutes from UTC.
- `.asTimeZone()`: This calls the `asTimeZone()` extension function on the UtcOffset object. This function then converts the `UtcOffset` to a `FixedOffsetTimeZone`, which represents a time zone with a fixed offset from UTC.
- `println`: These lines print information about the converted timeZone object.

`.asTimeZone` is useful for converting time zone ids into TimeZone objects, making it easier to handle zone-specific date and time operations in applications that need to support multiple time zones or perform time zone-aware calculations.
