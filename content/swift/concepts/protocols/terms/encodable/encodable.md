---
Title: 'Encodable'
Description: 'Enables object data to be encoded for use with Application Programming Interfaces.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Protocols'
  - 'APIs'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**`Encodable`** is a protocol that enables a type's data to be encoded and for use with Application Programming Interfaces ([APIs](https://www.codecademy.com/resources/docs/general/api)). If data also needs to be decoded, it's convenient to use the `Codable` protocol because it includes both the `Encodable` and `Decodable` protocols.

The protocol is related to the following protocols:

- `Codeable` includes both `Decodeable` and `Encodeable`
- [`Decodeable`](https://www.codecademy.com/resources/docs/swift/protocols/decodable)
- `CodingKey`
- `CodingKeyRepresentable`
- [CodingUserInfoKey](https://www.codecademy.com/resources/docs/swift/protocols/codingkeyrepresentable)

## Syntax

In a basic case, for a type to conform to `Encodable`, all of its properties must also conform to `Encodable`:

```pseudo
struct myStruct: Encodable {
  // Properties that conform to Encodable
}
```

For the syntax above, all properties will be encoded.

## Syntax using `CodingKeys`

When only specific properties need to be included, or some of the properties don't conform to `Encodable`, then a custom specification for data can be used. The following syntax implements the protocol with a `CodingKeys` [enum](https://www.codecademy.com/resources/docs/swift/enums) and `encode(to:)` [function](https://www.codecademy.com/resources/docs/swift/functions) to specify which properties to encode:

```pseudo
struct myStruct: Encodable {
  // Properties

  private enum CodingKeys: String, CodingKey {
    // Enumeration cases for keys for the API data.
  }

  func encode(to encoder: Encoder) throws {
    // Encodes the struct using the custom coding keys
  }

}
```

## Example

In the example below a `Book` `struct` is declared and an instance `book` is created. Its data is then converted to JSON:

```swift
import Foundation

struct Book: Encodable {
  var title: String
  var author: String
  var price: Int
}

let book = Book(title: "Four Quartets", author: "T. S. Elliot", price: 9)

print("\(book)")

let jsonEncoder = JSONEncoder()
let bookJson = try jsonEncoder.encode(book)
let bookJsonString = String(data: bookJson, encoding: .utf8)

print("\(bookJsonString!)")
```

This will output `book` as a Swift object and then as a JSON string:

```shell
Book(title: "Four Quartets", author: "T. S. Elliot", price: 9)
{"title":"Four Quartets","author":"T. S. Elliot","price":9}
```

## Example using `CodingKeys`

In the example below a `Book` `struct` is declared with a computed property `description`, `Codingkeys` and `encode(to:)` to specify how to encode the data to JSON. An instance `book` is then created and the specified data converted to JSON.

```swift
import Foundation

struct Book: Encodable {
  var title: String
  var author: String
  var price: Int

  var description: String {
    return "\(title), by \(author)"
  }

  private enum CodingKeys: String, CodingKey {
    case description, price
  }

  func encode(to encoder: Encoder) throws {
    var container = encoder.container(keyedBy: CodingKeys.self)
    try container.encode(description, forKey: .description)
    try container.encode(price, forKey: .price)
  }
}

let book = Book(title: "Four Quartets", author: "T. S. Elliot", price: 9)

print("\(book)")

let jsonEncoder = JSONEncoder()
let bookJson = try jsonEncoder.encode(book)
let bookJsonString = String(data: bookJson, encoding: .utf8)

print("\(bookJsonString!)")
```

This will output `book` as a Swift object and then as a JSON string using only the specified keys:

```shell
Book(title: "Four Quartets", author: "T. S. Elliot", price: 9)
{"price":9,"description":"Four Quartets, by T. S. Elliot"}
```
