---
Title: 'CodingKey'
Description: 'Enables the mapping of JSON object keys to the given Swift model properties.'
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

**`CodingKey`** is an extension to the Swift model when parsing a JSON data object into a Swift object. It allows for mapping JSON keys into different
properties of a Swift object.

> **Note:** JSON and Swift have different naming conventions (JSON uses _snake_case_ for its key identifiers, while Swift uses _camelCase_ for its property identifiers).

## Syntax

This protocol will work when a defined Swift object conforms to the `Codable`, `Decodable` and `Encodable` protocols. The former protocol is responsible for both _encoding_ the Swift object data into JSON format, and _decoding_ the JSON object into the Swift model, implementing both `Encodable` and `Decodable` protocols at the same time.

```pseudo
struct myStruct: Codable {
  let propertyOne: DataType
  let propertyTwo: DataType

  enum CodingKeys: String, CodingKey { case
    keyOne = "key_one",
    keyTwo = "key_two"
  }
}
```

The simple pseudo-code above demonstrates the usage of an enumerator `CodingKeys`, its cases of which refer to the keys of a given JSON object. It also specifies:

1. The raw value type of the keys (it's a `String` because all JSON keys are of a `String` type only).
2. The `CodingKey` protocol to which the enumerator has to conform in order to map the JSON keys with the properties of the Swift object.

## Syntax example with the `Codable` protocol

Below is an example of a Swift struct called `Exercises`. As it conforms to the `Codable` protocol, the model implements both encoding and decoding methods thanks to the `CodingKeys` enumerator that conforms to the `CodingKey` protocol and the relevant initializers defined.

```swift
import Foundation

struct Exercises: Codable {
  let name: String
  let repsNeeded: Int
  var durationMin: Int
  var durationSec: Int

  // The CodingKeys enum below defines JSON keys.
  enum CodingKeys: String, CodingKey {
    case name
    case repsNeeded = "reps_needed"
    case durationTime = "duration_time"
  }

  // The computed property will calculate the two Exercises' properties and store the result into the "duration_time" JSON key later.
  var durationInSeconds: Int {
    return (durationMin * 60) + durationSec
  }

  // This method is essential for the encoding to happen.
  func encode(to encoder: Encoder) throws {
    var container = encoder.container(keyedBy: CodingKeys.self)
    try container.encode(name, forKey: .name)
    try container.encode(repsNeeded, forKey: .repsNeeded)
    try container.encode(durationInSeconds, forKey: .durationTime)
  }

  // This initializer enables the creation and, later on, storing of the given struct's instance.
  init(name: String, repsNeeded: Int, durationMin: Int, durationSec: Int) {
    self.name = name
    self.repsNeeded = repsNeeded
    self.durationMin = durationMin
    self.durationSec = durationSec
  }

  // The initializer below enables the decoding functionality (all stored properties should be initialized).
  init(from decoder: Decoder) throws {
    let container = try decoder.container(keyedBy: CodingKeys.self)
    name = try container.decode(String.self, forKey: .name)
    repsNeeded = try container.decode(Int.self, forKey: .repsNeeded)
    durationSec = try container.decode(Int.self, forKey: .durationTime)

    // As durationMin and durationSec are declared as variables, their values will remain different upon the decoding or encoding process.
    durationMin = durationSec / 60
    durationSec = durationSec % 60
  }
}

// The struct instance is created and then encoded into JSON data
let exercise = Exercises(name: "Squats", repsNeeded: 30, durationMin: 1, durationSec: 15)
let encoder = JSONEncoder()
let exercisesJSON = try encoder.encode(exercise)

/* The JSON data that is instantiated will be parsed into the String type.
The defined 'exerciseJSONString' constant is force-unwrapped because in this example, its value indeed exists and is valid) */
let exercisesJSONString = String(data: exercisesJSON, encoding: .utf8)!
print(exercisesJSONString)

/* JSON decoder is defined and then implemented on the JSON object string.
The 'decodedExercise' constant stores the force-unwrapped optional value as the data is valid */
let decoder = JSONDecoder()
let decodedExercise = try! decoder.decode(Exercises.self, from: exercisesJSON)
print(decodedExercise)
```

The above code snippet implements both the encoding and decoding logic thanks to the `Codable` protocol, and the `CodingKeys` enumerator ensures that the JSON keys are mapped correctly to the Swift model's properties.

The output in the terminal should produce the following:

```shell
  {"duration_time":75,"name":"Squats","reps_needed":30}
  Exercises(name: "Squats", repsNeeded: 30, durationMin: 1, durationSec: 15)
```
