---
Title: '.encodeToHexString()'
Description: 'Encodes the given data to a hexadecimal string.'
Subjects:
  - 'Computer Science'
  - 'Mobile Development'
Tags:
  - 'Kotlin'
  - 'Methods'
  - 'Encoding'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

In Kotlin, the **`.encodeToHexString()`** method is a part of the [`kotlinx.serialization`](https://www.codecademy.com/resources/docs/kotlin/serialization) library and is used to encode the given data to a hexadecimal [string](https://www.codecademy.com/resources/docs/kotlin/strings). In this operation, it first serializes and converts the given data to a byte [array](https://www.codecademy.com/resources/docs/kotlin/arrays), then delegates it to `BinaryFormat` and finally encodes the resultant bytes to a hexadecimal string.

## Syntax

```pseudo
fun <T> BinaryFormat.encodeToHexString(value: T): String
```

- `<T>`: The data type to be encoded.
- `BinaryFormat`: The [interface](https://www.codecademy.com/resources/docs/kotlin/interfaces) to which the byte array is to be delegated.
- `value`: The data to be encoded.
- `String`: The data type to be returned.

## Example

In the following example, the `.encodeToHexString()` method encodes the `Codecademy` string to a hexadecimal string:

```kotlin
import kotlinx.serialization.*
import kotlinx.serialization.protobuf.ProtoBuf

@Serializable
data class Institution(val name: String)

fun main() {
  val institution = Institution("Codecademy")
  val institutionToHexString = ProtoBuf.encodeToHexString(institution)

  println("Codecademy in Hex String: $institutionToHexString")
}
```

The output for the above code is as follows:

```shell
Codecademy in Hex String: 0a0a436f6465636164656d79
```
