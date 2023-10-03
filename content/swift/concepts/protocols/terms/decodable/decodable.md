---
Title: 'Decodable'
Description: 'A Swift protocol that enables the conversion of data.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Swift'
  - 'iOS'
  - 'JSON'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`Decodable`** protocol is used to easily decode JSON or similar data formats like XML. The required initializer is `init(from: Decoder)` which creates a new instance by decoding from the given decoder. The `Decodable` protocol is often used with the `JSONDecoder` class. `Decodable` should be used when there's only a need to read data, when reading and writing are required the `Codable` protocol should be implemented.

## Syntax

Create a structure to represent the data to decode, followed by `Decodable` using the standard syntax of a Swift protocol.

```pseudo
struct DataName: Decodable {
  // Properties that conform to Decodable
}
```

## Example

In the example below, a `User` struct is defined and the `Decodable` protocol is used with `JSONDecoder` to convert stored JSON into a data object.

```swift
import Foundation
struct User: Decodable {
   var name: String
   var age: Int
   var location: String
 }

 let userJson = """
 {
   "name": "Charlotte Lucas",
   "age": 27,
   "location": "England"
 }
 """

 let userData = Data(userJson.utf8)

 let decoder = JSONDecoder()
 let user = try decoder.decode(User.self, from: userData)
 print(user.name)
```

This will result in the following output:

```shell
Charlotte Lucas
```
