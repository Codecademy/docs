```shell
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
```

**`CodingKey`** is an extension to the Swift model when parsing the JSON data object into a Swift object. It allows us to map JSON's data keys into different 
property names in the Swift object.

> **Note:** JSON and Swift have different naming conventions (JSON uses *snake_case* for its key identifiers, while Swift uses *camelCase* for its property identifiers)
## Syntax
This protocol will work when a Swift object conforms to either an `Decodable` or `Encodable` protocol.

```pseudo
struct myStruct: Decodable {
  enum CodingKeys: String, CodingKey { case 
    key_one, key_two
  }

  let propertyOne: <DataType>
  let propertyTwo: <DataType>
}
```

```pseudo
struct myStruct: Encodable {
  let propertyOne: <DataType>
  let propertyTwo: <DataType>

  enum CodingKeys: String, CodingKey { case 
    key_one, key_two
  }
}
```

The above demonstrates the usage of an enumerator 'CodingKeys', its cases of which refer to the JSON's object keys. It also specifies:
1. the raw value type of the keys (it's a String because all JSON keys are of a String type only),
2. the `CodingKey` protocol to which the enumerator has to conform in order to map the JSON keys with the Swift object's properties

## Syntax example using `Decodable`

The example below will decode a JSON object array of famous musicians into a Swift model using the enumerator that conforms to the `CodingKey` protocol, and
list each musician's names and active years using a `.forEach` function

```swift
import Foundation

let musiciansJSON = """
[
    {
        "name": "Michael Jackson",
        "years_active": "1971-2009"
    },
    {
        "name": "Madonna",
        "years_active": "1983-present" 
    },
    {
        "name": "Prince",
        "years_active": "1978-2016"
    } 
]
"""

struct Musicians: Decodable {
    enum CodingKeys: String, CodingKey { case
        name,
        yearsActive = "years_active"
    }

    let name: String
    let yearsActive: String
}

let musiciansData = Data(musiciansJSON.utf8)
let decoder = JSONDecoder()
let musicians = try! decoder.decode([Musicians].self, from: musiciansData)

musicians.forEach {
    print("\($0.name) was famous during \($0.yearsActive)")
}
```

> **Note:** *Notice how we managed to use the newly-created `yearsActive` property in the Swift model when JSON's key was written as `years_active`.*


The output on the console with be a string-interpolated version of each of the `Musicians`' array element thanks to the `.forEach` function.
> Note that we only used a trailing closure in the invoked functon to simplify the code.

```shell
    Michael Jackson was famous during 1971-2009
    Madonna was famous during 1983-present
    Prince was famous during 1978-2016
```

## Syntax example using `Encodable`

Following the workflow of [encoding](https://www.codecademy.com/resources/docs/swift/protocols/encodable) the Swift model into a JSON data structure, let's create an
example of displaying the **Exercises** struct parsed into JSON.

```swift
import Foundation

struct Exercises: Encodable {
    let name: String
    let repsNeeded: Int
    let durationMin: Int
    let durationSec: Int
    
    // we create the CodingKeys enum to define our JSON keys
    enum CodingKeys: String, CodingKey { case
        name,
        repsNeeded = "reps_needed",
        durationTime = "duration_time"
    }
    
    // this computed property will calculate the two Exercises' properties and store the result into our "duration_time" JSON key later
    var durationInSeconds: Int {
        return (durationMin * 60) + durationSec
    }
    
    // this method is essential for the encoding to happen
    func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(name, forKey: .name)
        try container.encode(repsNeeded, forKey: .repsNeeded)
        try container.encode(durationInSeconds, forKey: .durationTime)
    }
}

// we instantiate the struct and encode the instance into JSON data
let exercise = Exercises(name: "Push-ups", repsNeeded: 30, durationMin: 1, durationSec: 30)
let encoder = JSONEncoder()
let exercisesJSON = try encoder.encode(exercise)

/* the JSON data we have just instantiated will be parsed into the String type 
(the 'exerciseJSONString' is force-unwrapped because we know the data in there is valid) */
let exercisesJSONString = String(data: exercisesJSON, encoding: .utf8)!
print(exercisesJSONString)
```

The above code snippet follows a similar idea to the one of `decoding` the JSON object into a Swift model, but we do observe some additional functionality implemented for the task to be executed.


The output in the terminal will produce the following:
```shell
    {"name":"Push-ups","reps_needed":30,"duration_time":90}
```