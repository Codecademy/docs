---
Title: 'decodeFromHexString()'
Description: 'Decodes hex-encoded strings.'
Subjects:
  - 'Mobile Development'
  - 'Web Development'
  - 'Data Science'
Tags:
  - 'Encoding'
CatalogContent:
  - 'learn-kotlin'
---

**`decodeFromHexString()`** is a method in Kotlin designed to decode hex-encoded strings. Hexadecimal encoding is used for representing binary data in a human-readable format. This method simplifies the conversion of hex-encoded strings back into their original binary form. This method is a counterpart to `encodeToHexString()`.

## Syntax

```pseudo
fun decodeFromHexString(hexString: String): ByteArray
```

- `hexString` (Type: String): This is the input parameter for the function. It is the hexadecimal-encoded string that the function will decode.
- `ByteArray`: This is the return of the function. The `decodeFromHexString()` function returns an array of bytes (ByteArray).

## Example

The example below decodes the encoded string `48656C6C6F2C20436F646541636164656D7921` and prints the decoded value.

```kotlin
import kotlinx.serialization.decodeFromHexString
import kotlinx.serialization.encodeToHexString
import kotlinx.serialization.Serializable

@Serializable
data class HexString(val message: String)

fun main() {
    val hexString = HexString("48656C6C6F2C20436F646541636164656D7921") // Hex-encoded string
    val decodedData = decodeFromHexString(hexString)

    println(decodedData.message) // Output: Hello, CodeAcademy!
}
```

Running this example produces the following result:

```shell
Hello, CodeAcademy!
```
