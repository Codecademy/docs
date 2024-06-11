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

- `UtcOffset`: Represents the UTC offset for which the fixed-offset time zone is created.
- `FixedOffsetTimeZone`: The return type of the function, representing the fixed-offset time zone with the specified UTC offset.

## Example

``` kotlin
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

This code block converts an `UtcOffset` to a `fixed-offset TimeZone` using Kotlin's `kotlinx.datetime` library, it sets the offset to 5 hours and 25 minutes then prints the information about the converted time zone. It produces the following output:

```shell
Converted Time Zone:
  ID: +05:25
  Offset: +05:25
```
