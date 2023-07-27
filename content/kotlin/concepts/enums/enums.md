---
Title: 'Enums'
Description: 'Enums are a type of class primarily used for representing predefined constants.'
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

**Enums** are a special data type that enable a variable to be a set of predefined constants.

Kotlin enums are called enum classes and they aren't just mere collections of constants, they also have properties, methods, etc. Each enum acts as a separate instance of the enum class, and the declaration begins with the keywords `enum class` followed by the class name.

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

- `ordinal`: This property stores the ordinal value of the constant, which is usually a zero-based index.
- `name`: This property stores the name of the constant.

Methods –

- `values`: This method returns a list of all the constants defined within the enum class.
- `valueOf`: This method returns the enum constant that matches the input string passed. If the constant, is not present in the enum, then an `IllegalArgumentException` is thrown.

## Example

The following example demonstrates the use of the enum class in Kotlin:

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
    for (day in DAYS.values()) {println("${day.ordinal} = ${day.name}")}
        println("${DAYS.valueOf("WEDNESDAY")}")
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
