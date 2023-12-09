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

**Serialization** is the process of converting a complex object to a format that can be transferred over a network, used by an application, stored in a database or file.

## Kotlin Serialization

In Kotlin, serialiazation tools are made availible in `kotlinx.serialization`. It consists of a few components, the `org.jetbrains.kotlin.plugin.serialization` Gradle plugin, runtime libraries and compiler plugins.

Kotlin serialization libraries belong to the `org.jetbrains.kotlinx:` group and begin with `kotlinx-serialization-` with suffixes that reflect the serialization format, such as `json`.

## Formats

Included libraries in `kotlinx.serialization` for various serialization formats:

 - CBOR: `kotlin-serialization-cbor`
 - HOCON: `kotlin-serialization-hocon`
 - Properties: `kotlin-serialization-properties`
 - Protocol buffers: `kotlin-serialization-protobuf`
 - JSON: `kotlin-serialization-json`

All libraies besides JSON serialization are experimental, for detailed information about serialization formats refer to the [Kotlin Serialization Documents](https://github.com/Kotlin/kotlinx.serialization/blob/master/formats/README.md)
