---
Title: '.decodeFromString()'
Description: 'Deserializes a string representation into data using the Kotlin Serialization library'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Kotlin'
  - 'Libraries'
  - 'JSON'
  - 'Strings'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.decodeFromString()`** function is provided by the Kotlin Serialization library, used for deserializing data from a string representation (in JSON format) into a Kotlin object.

## Syntax

```pseudo
fun <T> decodeFromString(deserializer: DeserializationStrategy<T>, string: String): T
```

- `deserializer:` An instance of DeserializationStrategy that defines how the string should be deserialized into data.
- `string:` The string representation (e.g. JSON) of the data to be deserialized.

## Example

Here is an example of how to use `.decodeFromString()` to deserialize data from a JSON string into a Kotlin object:

```kotlin
import kotlinx.serialization.*
import kotlinx.serialization.json.Json

@Serializable
data class Person(val name: String, val age: Int)

fun main() {
  val jsonString = """
  {
    "name": "Johnny",
    "age": 30
  }
  """
  // Deserialize the JSON string into a Person object using decodeFromString()
  val person = Json.decodeFromString<Person>(jsonString)
  println(person)
}
```

The above example will result in the following output:

```shell
Person(name=Johnny, age=30)
```
