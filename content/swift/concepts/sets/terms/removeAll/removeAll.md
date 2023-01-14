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

## Example

The following is an example of the `.removeAll()` method:

```swift block
var weather: Set = ["spring", "summer", "autumn", "fall", "winter"]

weather.removeAll()

print(weather)
```

This will output:

```shell block
[]
```

- A `condition` is optional. If not declared, all values within the set will be removed. If it is declared, either `true` or `false` will be returned and if it evaluates to `true` for a specific value, that value within the set will be removed.
- It is not possible to include the `(where:)` condition on a set because Set cannot conform to the `RangeReplaceableCollection` protocol.
