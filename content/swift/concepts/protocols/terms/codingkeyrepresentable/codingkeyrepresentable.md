---
Title: 'CodingKeyRepresentable'
Description: 'A protocol that dictates the use of a key type that can encode and decode from a KeyedContainer.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Protocols'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The `CodingKeyRepresentable` protocol provides the flexibility to covert between a `CodingKey` type and a personalized type. This protocol enables the use of dictionaries that are not a `String` or `Int`(non-standard keys) to be encoded using organized 'keyed' containers instead of 'unkeyed' containers.

## Syntax

```pseudo
protocol CodingKeyRepresentable
```

> **Note:** CodingKeyRepresentable allows for the creation of methods to convert data into a string format that function as a key. This is particularly useful when implementing custom structs as keys.

## Example

In the following example, an enum named `NewSettings` is declared, and it contains two options: `name` and `instagram`. This list can be used to organize data (e.g. settings for a profile). Then, a dictionary named `newDict` is created, and it uses `NewSettings` as keys to be associated with new string values.

Then a tool called `JSONEncoder` is used to convert this dictionary into a special format called [JSON](https://www.codecademy.com/resources/docs/general/json). The JSON data is turned into readable text and the output is shown in an object format.

```swift
enum NewSettings: String, Codable, CodingKeyRepresentable {
   case name
   case instagram
}


let newDict: [NewSettings: String] = [.name: "Jay", .instagram: "@CelticsfanJay"]
let newData = try! JSONEncoder().encode(newDict)
print(String(decoding: newData, as: UTF8.self))
```

This code returns the following output:

```shell
Output: {"instagram":"@CelticsfanJay","name":"Jay”}
```
