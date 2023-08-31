---
Title: 'Protocols'
Description: 'A protocol type that gives you the ability to convert it into a coding key and vice versa.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Protocols'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---


The `CodingKeyRepresentable` protocol allows you to covert a CodingKey type between a personalized type. This protocol enables you to use dictionaries that are not a string or Int(non-standard keys) to be encoded using organized 'keyed' containers instead of 'unkeyed' containers.


## Syntax
```pseudo
protocol CodingKeyRepresentable
```


> **Note:** CodingKeyRepresentable lets you create methods to convert your data into a string format that works as a key. This is particularly useful when using your own custom structs as keys




## Example
In the following example, a special list called an “enum” named `NewSettings` which has two options: “name” and “instagram”. This list helps to organize data(for e.g. settings for a profile). A dictionary named `newDict` is created, it uses the special list as keys and strings as values. Then a tool called “JSONEncoder” is used to convert this dictionary into a special format called JSON(which is often used to share data between programs). The JSON data is turned into readable text and the output is shown in an object format.




 ```
 enum NewSettings: String, Codable, CodingKeyRepresentable {
    case name
    case instagram
}


let newDict: [NewSettings: String] = [.name: "Jay", .instagram: "@CelticsfanJay"]
let newData = try! JSONEncoder().encode(newDict)
print(String(decoding: newData, as: UTF8.self))
```


This code returns the following output:

```
Output: {"instagram":"@CelticsfanJay","name":"Jay”}
```
