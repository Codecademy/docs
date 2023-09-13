---
Title: 'Decoder'
Description: 'Enables values to be decoded from a native format to a custom format.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Protocols'
Catalog Content:
  - 'learn-swift'
  - 'paths/ios-developer'
---

**`Decoder`** is a type that allows the decoding of values from a native format such as JSON or XML  into an in-memory representation like a struct, class, or enum.

> **Note:** If you are also looking to encode values into a native representation, it would be beneficial to use the `Codable` protocol as it supports the use of both `Encodable` and `Decodable`.


## Syntax
In order to `Decode` values, they must conform to the `Decodable` protocol as it initializes from a decoder
```pseudo 
struct someStruct: Decodable {
	// Properties that conform to Decodable
}
```
In the syntax above, all struct properties will be decoded

## Example
In this example a `Dog`
`struct` is declared as well as a `dogData` JSON string. It is then converted from JSON to a `Dog` object.
```swift
import Foundation

struct Dog : Decodable {
  let name: String
  let age: Int
  let breed: String
}

// JSON string to be decoded
let dogData = """
{
  "name": "Clifford",
  "age": 10,
  "breed": "Big Red"
}
""".data(using: .utf8)!

// Converting the JSON String to a Dog object
let decoder = JSONDecoder()
let dogString = try decoder.decode(Dog.self, from: dogData)
print(dogString)
```

This will output `dogData` as a `Dog` object:
```shell
Dog(name: "Clifford", age: 10, breed: "Big Red")
```

## Example using Codable
As mentioned above, using the `Codable` protocol over `Decodable` or `Encodable` is beneficial in scenarios in which you want to both `Encode` and `Decode` objects. 

In the below example a `Car`
`struct` is declared and an instance `car` is created. It's data is `encoded` to a JSON string, then `decoded` back to a Swift object.
```swift
import Foundation

struct Car : Codable {
  let make: String
  let model: String
  let year: Int
}

let car = Car(make: "Toyota", model: "Corolla", year: 2023)

// Converting car to JSON string
let encoder = JSONEncoder()
let jsonData = try encoder.encode(car)
let jsonString = String(data: jsonData, encoding: .utf8)!
print(jsonString)

// Converting JSON string back to car object
let decoder = JSONDecoder()
let decodedData = try decoder.decode(Car.self, from: jsonData)
print(decodedData)
```

This will first output `car` as a JSON string, then again as a swift object:

```shell
{"make":"Toyota","year":2023,"model":"Corolla"}
Car(make: "Toyota", model: "Corolla", year: 2023)
```