---
Title: 'CodingKey'
Description: 'Enables the mapping of JSON's keys to different Swift's struct / class properties.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Protocols'
  - 'APIs'
  - 'Enum'
  - 'JSON'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**`CodingKey`** is an extension to the Swift model when parsing the JSON data object into a Swift object. It allows us to map JSON's data keys into different 
property names in the Swift object.

> **Note:** JSON and Swift have different naming conventions (JSON uses *snake_case* for its key identifiers, while Swift uses *camelCase* for its property identifiers)
## Syntax
This protocol will work when a Swift object conforms to either an `Encodable` or `Decodable` protocol.

```pseudo
struct myStruct: Decodable {
  enum CodingKeys: String, CodingKey { case 
    key_one, key_two
  }

  let propertyOne: <DataType>
  let propertyTwo: <DataType>
}
```

The above demonstrates the usage of an enumerator 'CodingKeys', its cases of which refer to the JSON's object keys. It also specifies:
1. the raw value type of the keys (it's a String because all JSON keys are of a String type only),
2. the `CodingKey` protocol to which the enumerator has to conform in order to map the JSON keys with the Swift object's properties
## Example

[Text, code, images, etc. about example 1]

## Codebyte Example (if applicable)

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
```