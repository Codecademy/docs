---
Title: '.keys()'
Description: 'Returns a collection containing the keys of a dictionary.'
Subjects:
  - 'Computer Science'
  - 'iOS'
  - 'Code Foundations'
Tags:
  - 'Swift'
  - 'Dictionary'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

In Swift, the `keys` property of a dictionary returns an unordered collection containing all the keys within the dictionary. Since this collection is unordered, the order of the keys may vary each time it is accessed. This property is part of the `Dictionary` structure and is useful when iterating through or manipulating just the keys of a dictionary.

## Syntax

```swift
dictionaryName.keys
```

- `dictionaryName`: The instance of a `Dictionary` whose keys you want to access.
- The `keys` property returns a `Dictionary.Keys` collection, which contains all the keys in the dictionary.

> **Note:** The `keys` property returns a collection, not an array, but it can be converted to an array if needed using [`Array`](https://www.codecademy.com/resources/docs/swift/arrays)(dictionary.keys).

## Example

In the following example, the `keys` property is used to access and print all the keys in the `studentGrades` dictionary:

```swift
var studentGrades = ["Jon": 84, "Nic": 95, "Mary": 88]

print(studentGrades.keys)

// Convert keys to an array for better manipulation
let keysArray = Array(studentGrades.keys)
print(keysArray)
```

The output for the above code is:

```shell
["Jon", "Nic", "Mary"]
["Jon", "Nic", "Mary"]
```

> **Note:** Converting the keys to an array is optional but can be useful when performing further operations on the keys.
