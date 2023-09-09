---
Title: 'Decodable'
Description: 'A Swift protocol that enables the conversion of data.'
Subjects: 
  - 'iOS'
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'Swift'
  - 'iOS'
  - 'JSON'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

`Decodable` is a type in Swift that can convert itself into a structure that conforms to the **`Decodable protocol`**. The `Decodable protocol` is used to easily decode JSON or similar data formats like XML. The required initializer is `init(from: Decoder)` which creates a new instance by decoding from the given decoder. The `Decodable protocol` is often used with the `JSONDecoder` class. `Decodable` should be used if you only need to read data. 

## Syntax
Create a structure to represent the data to decode, followed by `Decodable` using the standard syntax of a Swift protocol.   

```pseudo
struct DataName: Decodable {
  // Properties that conform to Decodable
}
```

## Example
In the example below, a structure called User is created and the `Decodable` protocol is used with `JSONDecoder` to convert JSON stored as a data object.

```swift
struct User: Decodable {
  var name: String
  var age: Int
  var location: String
}

let json = """ {
  "name": "Charlotte Lucas"
  "age": 27
  "location": "England"
}
""".data(using: .utf8)!

let decoder = JSONDecoder()
let user = try decoder.decode(User.self, from: json)
print(user.name) // Prints "Charlotte Lucas"

```



