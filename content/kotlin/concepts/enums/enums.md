---
Title: 'Enums'
Description: 'Enums are a special data type that enable a variable to be a set of predefined constants.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Enums'
  - 'Data Types'
  - 'Data Structures'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

**Enums** are special data types that enable a variable to be a set of predefined constants.

Kotlin enums are called enum classes and they aren't just mere collections of constants because they have properties, methods etc. Each acts as separate instances of the class and separated by commas.

## Syntax

```pseudo
enum class <enum_class_name> {
  constant1,
  constant2,
  constant3
}
```

Enums properties and methods –

Properties –

`ordinal`: This property stores the ordinal value of the constant, which is usually a zero-based index.
`name`: This property stores the name of the constant.

Methods –

`values`: This method returns a list of all the constants defined within the enum class.
`valueOf`: This methods returns the enum constant defined in enum, matching the input string. If the constant, is not present in the enum, then an IllegalArgumentException is thrown.

## Example

The following example demonstrates enum class in kotlin:

```kotlin
enum class DAYS {
    SUNDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY
}
fun main()
{
    // A simple demonstration of properties and methods
    for (day in DAYS.values()) {
        println("${day.ordinal} = ${day.name}")
        }
        println("${DAYS.valueOf(" WEDNESDAY ")}")
}
```

This prints the following output:

```shell
0 = SUNDAY
1 = MONDAY
2 = TUESDAY
3 = WEDNESDAY
4 = THURSDAY
5 = FRIDAY
6 = SATURDAY
WEDNESDAY
```
