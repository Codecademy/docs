---
Title: '.removeAll()'
Description: 'Removes every item from a Set in Swift.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'iOS'
  - 'SwiftUI'
  - 'Sets'
  - 'Xcode'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **.removeAll()** method is used to remove every value from a [Set](https://www.codecademy.com/resources/docs/swift/sets) in Swift.

## Syntax

```pseudo
setName.removeAll()
```

- `.removeAll()` will remove all values from `setName`.
- It is not possible to use a `(where:)` condition on a set because `Set` does not currently conform to the `RangeReplaceableCollection` protocol that includes that method.

## Example

The following is an example of the `.removeAll()` method:

```swift
var weather: Set = ["spring", "summer", "autumn", "fall", "winter"]

weather.removeAll()

print(weather)
```

This will output:

```shell
[]
```
