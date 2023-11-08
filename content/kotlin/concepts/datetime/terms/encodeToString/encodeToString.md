---
Title: 'encodeToString()'

Description: 'Serializes data to a string representation using the Kotlin Serialization library.'

Subjects:
  -'Kotlin'
  -'Serialization'

Tags:
  -'Kotlin Serialization'
  -'Serialization Library'
  -'JSON Serialization'

Catalog Content: 
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **'encodeToString()'** function is provided by the Kotlin Serialization library. It is used for serializing data to a string representation (commonly in JSON format).

## Syntax

```kotlin
fun <T> encodeToString(serializer: SerializationStrategy<T>, value: T): String
```

serializer: An instance of SerializationStrategy that defines how the data should be serialized.
value: The object or data to be serialized to a string.

## Example

```kotlin
// Import the necessary libraries
import kotlinx.serialization.Serializable
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json

// Define a Kotlin data class
@Serializable
data class Person(val name: String, val age: Int)

fun main() {
    // Create an instance of the data class
    val person = Person("Johnny", 30)

    // Serialize the data class to a JSON string using encodeToString()
    val jsonString = Json.encodeToString(person)

    // Print the JSON string
    println(jsonString)
}
```