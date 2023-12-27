---

Title: '.asTimeZone'
Description: 'Returns the fixed off-set time zone with the given UTC offset'
Subjects:
- 'Mobile Development'
- 'Web Development'
- 'Data Science'
Tags:
- 'Kotlin'
CatalogContent:
- 'learn-kotlin'
- 'paths/computer-science'

---

The **`.asTimeZone()`** function converts a `TimeZone` object to a string representation of a time zone.

## Syntax

```pseudo

fun UtcOffset.asTimeZone(): FixedOffsetTimeZone

```

`TimeZone` and `FixedOffsetTimeZone` data  can be converted between `Instant` and `LocalDate`.

## Example

In the following example a`TimeZone` object, `timeZone` with the ID `America/ Los_Angeles` is created. The `.asTimeZone()` function converts the `TimeZone` object to a string  representation of the time zone and then printed to the console.

```kotlin

val timeZone = TimeZone.getTimeZone("America/Los_Angeles")
val asString = timeZone.asTimeZone()
print(asString)

```

The output will be in the format "UTC offset +/- HH:MM.

```shell

-08:00

```
