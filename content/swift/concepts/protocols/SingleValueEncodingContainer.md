---
Title: 'SingleValueEncodingContainer Protocols'
Description: 'A container that can support the storage and direct encoding of a single non-keyed value.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - ['Protocols']()
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

A **SingleValueEncodingContainer** protocol is a container that can support the storage and direct encoding of a single non-keyed value. It is part of Swift's `Encoder` framework.

The values you can encode will depend on the chosen encoding format (JSON, plist, etc.).

## Syntax

```psuedo
protocol SingleValueEncodingContainer {
  // Protocol body
}
```

## Example

```swift
import Foundation

struct Person: Encodable {
    let name: String
    let age: Int
    
    func encode(to encoder: Encoder) throws {
        var container = encoder.singleValueContainer()
        
        try container.encode(name) // Encoding the name
        // You can also encode the age or any other single value property here
    }
}

let person = Person(name: "Alexandria", age: 30)

let encoder = JSONEncoder()
do {
    let jsonData = try encoder.encode(person)
    if let jsonString = String(data: jsonData, encoding: .utf8) {
        print(jsonString)
    }
} catch {
    print(error)
}

```

Official Swift Documentation: https://developer.apple.com/documentation/swift/singlevalueencodingcontainer
