---
Title: '.keys'
Description: 'Returns a collection containing the keys of a dictionary.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'iOS'
Tags:
  - 'Dictionary'
  - 'Swift'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

In Swift, the **`.keys`** property of a [dictionary](https://www.codecademy.com/resources/docs/swift/dictionaries) returns an unordered collection containing all the keys within the dictionary. Since this collection is unordered, the order of the keys may vary each time they are accessed. This property is part of the `Dictionary` structure and is useful when iterating through or manipulating only the keys of a dictionary.

## Syntax

```pseudo
dictionaryName.keys
```

- `dictionaryName`: The instance of a dictionary from which the keys are to be accessed.

> **Note:** The `keys` property returns a collection, not an array, however, it can be converted to an array using the [Array()](https://www.codecademy.com/resources/docs/swift/arrays) initializer if needed.

## Example

In the following example, the `keys` property is used to access and print all the keys in the `studentGrades` dictionary:

```swift
var studentGrades = ["Jon": 84, "Nic": 95, "Mary": 88]

// Print the keys as a Dictionary.Keys collection
print(studentGrades.keys)

// Convert the keys collection to an array for index-based access
let keysArray = Array(studentGrades.keys)

// Access the first key in the array
print(keysArray[0])
```

The output for the above code is:

```shell
["Jon", "Nic", "Mary"]
Jon
```
