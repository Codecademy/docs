---
Title: 'Decoder'
Description: 'Converts external data into Swift types.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Classes'
  - 'Protocols'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`Decoder`** protocol in Swift translates data from external formats such as JSON or XML into native Swift types. All data intended for decoding should conform to the `Decodable` protocol. While creating custom decoders is possible, existing classes like `JSONDecoder` and `PropertyListDecoder` cover a wide range of use cases, making the need for custom decoders relatively rare.

## Syntax

```pseudo
struct SomeStruct: Decodable {
  // Define properties that match the data structure
  init(from decoder: Decoder) throws {
    // Custom decoding logic, if needed
  }
}
let decoder = JSONDecoder()
let someData: Data
let someInstance = try decoder.decode(SomeStruct.self, from: someData)
```

- `SomeStruct` conforms to the `Decodable` protocol indicating it can decode an external data source.
- The `init(from:)` initializer is optional and provides a way to implement custom decoding logic.
- Instantiate a decoder class, such as `JSONDecoder`, to convert the encoded data into the desired Swift type.
- `someData` is a `Data` object containing the data to decode.
- The `decode(_:from:)` method transforms the data into an instance of `SomeStruct`.

## Example

In the following example, a JSON object is decoded into a `Book` struct.

```swift
import Foundation
struct Book: Decodable {
   let title: String
   let author: String
   let publicationYear: Int
}
// JSON data for a book
let bookJson = """
{
   "title": "Journey to the Center of the Earth",
   "author": "Jules Verne",
   "publicationYear": 1864
}
"""
let bookData = Data(bookJson.utf8)
let jsonDecoder = JSONDecoder()
let book = try jsonDecoder.decode(Book.self, from: bookData)
print("\(book.title) by \(book.author)")
```

In this example, a `Book` struct has three properties, `title`, `author`, and `publicationYear`, that match the keys in the JSON data. The `init(from:)` initializer is not implemented because the property labels match the JSON data keys. The JSON data is then decoded into a `Book` instance using the `decode(_:from:)` method of the `JSONDecoder` class.

This will output the following:

```shell
Journey to the Center of the Earth by Jules Verne
```
