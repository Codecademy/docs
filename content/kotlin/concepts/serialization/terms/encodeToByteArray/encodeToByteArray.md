---
Title: '.encodeToByteArray()'
Description: 'Serializes and converts the given data to byte array'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Method'
  - 'Data Structures'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.encodeToByteArray()`** function is provided by the **kotlinx.serialization** library. The function serializes and encodes the given value and returns an array of bytes. The `.encodeToByteArray()` function is the inverse of `.decodeFromByteArray()`.
## Syntax

```pseudo
fun T> BinaryFormat.encodeToByteArray(value: T): ByteArray
```
- `<T>`: the type of the data to be encoded.
- `value`: the data to be encoded.
- `BinaryFormat`: An interface  that allows conversions to and from ByteArray via `encodeToByteArray` and `decodeFromByteArray` methods. An example of `BinaryFormat` is `ProtoBuf`.

## Example

The code below gives an example on how to use `.encodeToByteArray`:

```kotlin
import kotlinx.serialization.*
import kotlinx.serialization.protobuf.ProtoBuf

@Serializable
data class Course(val name: String, val description: String)

fun main() {
    val course = Course("Introduction to Programming.", "An introductory course to programming using Kotlin.")
    val courseToByteArray = ProtoBuf.encodeToByteArray(course)

    println("My course in byte array: $courseToByteArray")
}
```

The output of the code above is:

```shell
My course in byte array: [B@21588809
```
