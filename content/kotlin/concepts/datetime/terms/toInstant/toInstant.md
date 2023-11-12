---
Title: 'toInstant()'
Description: 'Converts a string representing an instant in ISO-8601 format, which includes both date and time components along with the time zone offset, into an Instant value.'
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

**toInstant** converts a string representing an instant in ISO-8601 format, which includes both date and time components along with the time zone offset, into an Instant value.

## Syntax

```pseudo
fun String.toInstant(): Instant
```
Converts the given string, representing an instant in ISO-8601 format with date, time, and time zone offset, into an Instant value.


## Example

* Parsing Date and Time from String:

```kotlin
val dateTimeString = "2023-11-12T15:30:00Z"
val instant = dateTimeString.toInstant()
println("Parsed Instant: $instant")
```
---