---
Title: '.asTimeZone()'
Description: 'This function is provided by the kotlinx-datetime library, it is used to convert a datetime object from one time zone to another which makes it perfect for handling date and time operations. It returns the fixed-offset time zone with the given UTC offset'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Methods'
  - 'Data Structures'
  - 'Time'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

**`.asTimeZone()`** in Kotlin is used to convert a datetime object from one time zone to another. However this is not a direct function in Kotlin dateTime class, but you can achieve the effect by converting a UtcOffset object to a fixed-offset TimeZone object. This function returns the fixed-offset time zone with the given UTC offset and is provided by the kotlinx-datetime library and is used for handling date and time operations. 

Direct function mentioned above refers to a function that is available directly on an object without the need for extension functions or additional classes. In this case, `.asTimeZone()` is not a direct function because it is implemented as an extension function on the datetime class.

## Syntax

``` kotlin
import kotlinx.datetime.*
import kotlinx.datetime.format.*
import kotlin.test.*
fun main() { 

    // Converts a UtcOffset to a fixed-offset TimeZone
    UtcOffset(hours = 5, minutes = 25).asTimeZone().let { timeZone ->
        check(timeZone.id == "+05:25")
        check(timeZone.offset == UtcOffset(hours = 5, minutes = 25))
    } 
}
```

The code block below is a conversion of an `UtcOffset` to a `fixed-offset TimeZone` using Kotlin's kotlinx datetime library. It sets the offset to 5 hours and 25 minutes and then checks if the conversion was successful by verifying the `id` and `offset` properties of the resulting TimeZone.

To break it down further: 

- Import.
  - `import kotlinx.datetime.*`: This line imports all classes and functions from the kotlinx-datetime library, which provides a modern date and time API for Kotlin.
  - `import kotlinx.datetime.format.*`: This line imports formatting functions for date and time.
  - `import kotlin.test.*`: This line imports all classes and functions from the `kotlin.test` package.
- `UtcOffset(hours = 5, minutes = 25)`: This part creates a UtcOffset object representing an offset of +5 hours and +25 minutes from UTC.
- `.asTimeZone()`: This calls the `asTimeZone()` extension function on the UtcOffset object. This function then converts the `UtcOffset` to a `FixedOffsetTimeZone`, which represents a time zone with a fixed offset from UTC.
- `.let { timeZone ->`: The `let` function is a scoping function that executes the given block of code with `timeZone` as its argument.
- `check(timeZone.id == "+05:25")`: This line performs a check to verify that the `id` property of the `timeZone` object is equal to the string `"+05:25"`.
- `check(timeZone.offset == UtcOffset(hours = 5, minutes = 25))`: This line checks to verify that the offset property of the timeZone object is equal to an UtcOffset object representing a time difference of 5 hours and 25 minutes.

`.asTimeZone` is useful for converting time zone ids into TimeZone objects, making it easier to handle zone-specific date and time operations in applications that need to support multiple time zones or perform time zone-aware calculations.
