---
Title: '.decodeFromByteArray()'
Description: 'Decodes data from a byte array into an object.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Method'
  - 'Data Structures'
  - 'Time'
  - 'Date'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.decodeFromByteArray()`** method is a part of the `kotlinx.serialization` library and is used to deserialize/decode (convert) byte array into a Kotlin object. Commonly used when data in byte array format is transmitted and needs to be reverted back into a Kotlin object. 

## Syntax

```pseudo
fun <T> BinaryFormat.decodeFromByteArray(ByteArray)
```

- `<T>`: the type of the object to be deserialized
- `BinaryFormat`: an interface in `kotlinx.serialization` library that provides methods for serializing and deserializing Kotlin objects in binary formats
- `ByteArray`: the byte array containing the binary representation of the serialized object

## Example

The following example demonstrates how to use `.decodeFromByteArray`.

```kotlin
import kotlinx.serialization.*

@Serializable
data class Person(val name: String, val age: Int)

fun main() {
    val person = Person("Alice", 25)
    val personToByteArray = ProtoBuf.encodeToByteArray(person)
    val deserializedPerson = ProtoBuf.decodeFromByteArray(personToByteArray)
    println("Original Person: $person")
    println("Deserialized Person: $deserializedPerson")
}
```

The output of the example above is:

```shell
Original Person: Person(name=Alice, age=25)
Deserialized Person: Person(name=Alice, age=25)
```
