---
Title: '.mapValues()'
Description: 'Transforms the values of a dictionary while keeping the keys unchanged.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'iOS'
Tags:
  - 'Swift'
  - 'Dictionary'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

In Swift, the **`.mapValues()`** method transforms the values of a dictionary while keeping the keys unchanged. This method is part of the [Dictionary](https://www.codecademy.com/resources/docs/swift/dictionaries) structure and is useful for modifying or mapping only the values without altering the keys. This method returns a new dictionary with the same keys but with values transformed based on the provided closure, leaving the original dictionary unmodified.

## Syntax

```pseudo
dictionaryName.mapValues ({ transform })
```

- `dictionaryName`: The instance of a `Dictionary` whose values are to be transformed.
- `transformation`: A closure that defines how each value in the dictionary should be transformed.

## Example

In the following example, the `mapValues()` method is used to increase each student's grade by `10` points while keeping the keys unchanged in the `studentGrades` dictionary:

```swift
var studentGrades = ["Jon": 65, "Nic": 77, "Mary": 80]

// Increase each student's grade by 10 points
let updatedGrades = studentGrades.mapValues { grade in
    grade + 10
}

print(updatedGrades)
```

The output for the above code is:

```shell
["Jon": 75, "Nic": 87, "Mary": 90]
```

In this example, `mapValues()` increases each grade by 10 points, while the keys (`"Jon"`, `"Nic"`, and `"Mary"`) remain unchanged.
