---
Title: '.decodeFromByteArray()'
Description: 'Decodes data from a byte array into an object.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Functions'
  - 'Data Structures'
  - 'Time'
  - 'Date'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.decodeFromByteArray()`** function is used to deserialize (decode) data from a byte array into an object. Useful for when there is an object serialized into a byte array to be reverted back into its original form. 

## Syntax

```pseudo
fun LocalDate.decodeFromByteArray(ByteArray): Instant
```

- ``

## Example

The following example demonstrates how to use `.decodeFromByteArray`.

```kotlin
import kotlinx.serialization.*

@Serializable
data class Person(val name: String, val age: Int)

fun main() {
    val person = Person("Alice", 25)

    val byteArray: ByteArray = Json.encodeToByteArray(person)

    val deserializedPerson: Person = Json.decodeFromByteArray(byteArray)

    println("Original Person: $person")
    println("Deserialized Person: $deserializedPerson")
}

```

The output of the example above is:

```shell
Start of the day November 18th, 2023 in UTC is: 2023-11-18T00:00Z
```
