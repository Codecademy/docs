---
Title: 'Serialization'
Description: 'The process of converting data into a format that can be stored or transmitted.'
Subjects:
  - 'Mobile Developement'
  - 'Web Developement'
  - 'Data Science'
Tags:
  - 'Kotlin'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer science'
---

**Serialization** is the process of converting a complex object to a format that can be transferred over a network, used by an application, or stored in a database or file.

In Kotlin, serialization tools are made available in `kotlinx.serialization`. It consists of a few components, the `org.jetbrains.kotlin.plugin.serialization` Gradle plugin, runtime libraries, and compiler plugins.

## Libraries

Kotlin serialization libraries belong to the `org.jetbrains.kotlinx:` group and begin with `kotlinx-serialization-` with suffixes that reflect the serialization format, such as `json`.

Included libraries in `kotlinx.serialization` for various serialization formats:

- CBOR: `kotlin-serialization-cbor`
- HOCON: `kotlin-serialization-hocon`
- Properties: `kotlin-serialization-properties`
- Protocol buffers: `kotlin-serialization-protobuf`
- JSON: `kotlin-serialization-json`

## Implementation

```pseudo
@Serializable
class Project(val name: String, val language: String)
```

An object is first serialized to its primitive values and then encoded to the desired output format. In Kotlin classes must be explicitly marked `@Serializable`. Below is an example of JSON encoding using `json.encodeToString`.

```kotlin
import kotlinx.serialization.*
import kotlinx.serialization.json.*

@Serializable
class Project(val name: String, val language: String)

fun main() {
    val data = Project("kotlinx.serialization", "Kotlin")
    println(Json.encodeToString(data))
}
```

The output will be:

```shell
{"name":"kotlinx.serialization","language":"Kotlin"}
```

To decode, `json.decodeFromString` is used:

```kotlin
import kotlinx.serialization.*
import kotlinx.serialization.json.*

@Serializable
data class Project(val name: String, val language: String)

fun main() {
    val data = Json.decodeFromString<Project>("""
        {"name":"kotlinx.serialization","language":"Kotlin"}
    """)
    println(data)
}
```

The output will be:

```shell
Project(name=kotlinx.serialization, language=Kotlin)
```

All libraries ,besides JSON serialization, are experimental, for detailed information about serialization formats refer to the [Kotlin Serialization Documents](https://github.com/Kotlin/kotlinx.serialization/blob/master/formats/README.md) and the [Kotlin Serialization Guide](https://github.com/Kotlin/kotlinx.serialization/blob/master/docs/basic-serialization.md#basics)
