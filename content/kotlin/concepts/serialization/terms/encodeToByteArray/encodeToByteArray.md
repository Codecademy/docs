---
Title: '.encodeToByteArray()'
Description: 'Serializes and converts the given data to a byte array'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Methods'
  - 'Data Structures'
  - 'Kotlin'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.encodeToByteArray()`** method is provided by the [`kotlinx.serialization`](https://www.codecademy.com/resources/docs/kotlin/serialization) library and is used to serialize and convert the given data to a byte [array](https://www.codecademy.com/resources/docs/kotlin/arrays). This method is the inverse of the [`.decodeFromByteArray()`](https://www.codecademy.com/resources/docs/kotlin/serialization/decodeFromByteArray) method.

## Syntax

```pseudo
fun T> BinaryFormat.encodeToByteArray(value: T): ByteArray
```
- `<T>`: The type of data to be converted
- `value`: The data to be converted
- `BinaryFormat`: An [interface](https://www.codecademy.com/resources/docs/kotlin/interfaces) that allows conversions to and from `ByteArray` via the `.encodeToByteArray()` and `.decodeFromByteArray()` methods. An example of `BinaryFormat` is `ProtoBuf`.

## Example

The code below gives an example on how to use `.encodeToByteArray`:

```kotlin
import kotlinx.serialization.*
import kotlinx.serialization.protobuf.ProtoBuf

@Serializable
data class Course(val name: String, val description: String)

fun main() {
    val course = Course("Learn Kotlin", "The expressive, open-source programming language developed by JetBrains.")
    val courseToByteArray = ProtoBuf.encodeToByteArray(course)
    
    println("My course in byte array: $courseToByteArray")
}
```

The output of the code above is:

```shell
My course in byte array: [B@21588809
```
