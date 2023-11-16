---
Title: '.decodeFromHexString()'
Description: 'Exploring the decodeFromHexString method in Kotlin, a tool to handle hex-encoded strings.' 
Subjects: 
  - 'Mobile Development'
  - 'Web Development'
  - 'Data Science'
Tags:
  - 'Kotlin'
  - 'Encoding'
CatalogContent: 
  - 'learn-kotlin'
---

**`.decodeFromHexString()`** is a method in Kotlin designed to decode hex-encoded strings. Hexadecimal encoding is used for representing binary data in a human-readable format. This method simplifies the conversion of hex-encoded strings back into their original binary form. This method is a counterpart to encodeToHexString.


## Syntax

```pseudo
fun decodeFromHexString(hexString: String): ByteArray
```

## Example

The example given below decodes encoded string **48656C6C6F2C20436F646541636164656D7921** and prints the decoded value - **Hello, CodeAcademy!**

```kotlin
fun main() {
    val hexString = "48656C6C6F2C20436F646541636164656D7921" // Hex-encoded string
    val decodedBytes = decodeFromHexString(hexString)
    
    println(String(decodedBytes)) // Output: Hello, CodeAcademy!
}
```

