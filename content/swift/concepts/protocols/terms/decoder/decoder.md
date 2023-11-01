---
Title: 'Decoder'
Description: 'A Swift protocol that converts external data into Swift types.'
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

The **`Decoder`** protocol in Swift translates data from external formats such as JSON or XML into native Swift types. All data intended for decoding should conform to the `Decodable` protocol. Although it's feasible to craft custom decoders, Swift's native classes, like `JSONDecoder` and `PropertyListDecoder`, accommodate the majority of scenarios, rendering custom decoders uncommon.

## Syntax

```pseudo
struct SomeStruct: Decodable {
  // properties that are Decodable

  init(from decoder: Decoder) throws {
    // Custom decoding logic, if needed
  }
}

let decoder = JSONDecoder()
let itemInstance = try decoder.decode(SomeStruct.self, from: itemData)
```

- The `Decodable` protocol signifies that `SomeStruct` can be decoded from an external format.
- If needed, the `init(from:)` initializer is used to provide custom decoding logic.
- The `JSONDecoder` class decodes JSON data into a Swift type that conforms to the `Decodable` protocol.
- JSON data gets transformed into the `SomeStruct` Swift type via the `decode(_:from:)` method.

## Example

In the following example, a JSON representation of a book is translated into a `Book` instance which conforms to the `Decodable` protocol.

```swift
import Foundation

struct Book: Decodable {
   let title: String
   let author: String
   let publicationYear: Int
}

// JSON data for a book
let bookData = """
{
   "title": "Journey to the Center of the Earth",
   "author": "Jules Verne",
   "publicationYear": 1864
}
""".data(using: .utf8)!

// Decode the JSON data into a Book instance
let decoder = JSONDecoder()
let bookInstance = try decoder.decode(Book.self, from: bookData)
print(bookInstance)
```

In this example, a `Book` struct has three properties, `title`, `author`, and `publicationYear`, that match the keys in the JSON data. The `init(from:)` initializer is not implemented because the property labels match the JSON data keys. The JSON data is then decoded into a `Book` instance using the `decode(_:from:)` method of the `JSONDecoder` class.

This will output the following:

```shell
Book(title: "Journey to the Center of the Earth", author: "Jules Verne", publicationYear: 1864)
```
