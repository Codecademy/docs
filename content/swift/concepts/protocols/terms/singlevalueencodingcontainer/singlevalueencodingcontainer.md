---
Title: 'SingleValueEncodingContainer'
Description: 'Supports the storage and direct encoding of a single non-keyed value.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Swift'
  - 'iOS'
  - 'Protocols'
CatalogContent:
  - 'learn-swift'
---

A **`SingleValueEncodingContainer`** protocol is a component of Swift's encoding system, designed for encoding single, non-collection values. It is particularly useful within the `encode(to:)` method of the `Encodable` protocol, enabling types to encode themselves as single values without keys.

## Syntax

A type that needs to encode a single value will conform to `Encodable` and implement the required `encode(to:)` method. Within this method, the type can access a `SingleValueEncodingContainer` from the provided `Encoder` to encode its value.

```pseudo
struct SomeValue: Encodable {
  var value: SomeType
  func encode(to encoder: Encoder) throws {
    var container = encoder.singleValueContainer()
    try container.encode(value)
  }
}
```

- `SomeValue` struct conforms to `Encodable`enabling it to encode the `value` property.
- The `singleValueContainer()` method is called on the encoder to obtain a `SingleValueEncodingContainer`.
- The `encode(_:)` method is called on the container to encode the value.

## Example

In the following example, an `int` value is encoded using `SingleValueEncodingContainer`:

```swift
import Foundation
struct SingleInteger: Encodable {
    let value: Int
    func encode(to encoder: Encoder) throws {
        var container = encoder.singleValueContainer()
        try container.encode(value)
    }
}
let intValue = SingleInteger(value: 42)
let encoder = JSONEncoder()
let jsonData = try? encoder.encode(intValue)
let jsonString = String(data: jsonData!, encoding: .utf8)!
print(jsonString)
```

This example defines a struct `SingleInteger` with a `value` that conforms to `Encodable`. Within `encode(to:)`, an `Encoder` is used to obtain a `SingleValueEncodingContainer`. The integer `value` is then encoded into this container. An instance of `JSONEncoder` takes the `SingleInteger` instance and encodes it into JSON data. The JSON data is then turned into a string using UTF-8 encoding for printing.

The output will display a single number in JSON format:

```shell
42
```
