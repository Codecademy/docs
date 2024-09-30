---
Title: '.mapValues()'
Description: 'Transforms the values of a dictionary while keeping the keys unchanged.'
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

In Swift, the **`mapValues()`** method is used to transform the values of a dictionary while keeping the keys unchanged. This method is part of the [Dictionary](https://www.codecademy.com/resources/docs/swift/dictionaries) structure and is useful for modifying or mapping only the values without altering the keys.

## Syntax

```pseudo
dictionaryName.mapValues { transformation }
```

- `dictionaryName`: The instance of a `Dictionary` whose values are transformed.
- `mapValues`: The method returns a new dictionary with the same keys, but with the values transformed based on the provided closure.
- `transformation`: A closure that defines how each value in the dictionary should be transformed.

The `mapValues()` function return a new dictionary with the same keys, but the values are transformed based on the provided closure.

> **Note:** `mapValues()` does not modify the original dictionary but returns a new dictionary with the same keys and values that are transformed based on the provided closure.

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

> **Note:** The closure passed to `mapValues()` can apply any transformation to the values.
