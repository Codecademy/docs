---
Title: 'DayOfWeek'
Description: 'Returns the name of the weekday based on the integer given, Monday is set as 1.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Date'
  - 'Method'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`DayOfWeek`** method is used to return the `DayOfWeek` instance for the weekday number, starting with `1` as `Monday`.

## Syntax

```pseudo
DayOfWeek(isoDayNumber)
```

- `isoDayNumber`: An integer value that must correspond to one of the seven days in the `DayOfWeek` enumeration class. The numbering follows the ISO-8601 weekday number, where `Monday` is `1` and `Sunday` is `7`.
- The enumeration class entries have two properties: `Name`, which is represented by a `string`, and the `Ordinal`, which is represented as an integer.

## Example

Here is an example of how to call the `DayOfWeek` method:

```kotlin
import kotlinx.datetime.*

fun main() {
    val day = DayOfWeek.of(3)
    println(day)
}
```

The output will be:

```shell
Wednesday
```
