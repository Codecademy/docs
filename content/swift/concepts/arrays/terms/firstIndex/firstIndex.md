---
Title: '.firstIndex()'
Description: 'Returns the index of the first element in an array that satisfies the given condition.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'Search'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.firstIndex()`** method in Swift returns the index of the first element in an array that fulfills a specified condition. If no element satisfies the condition, it returns `nil`.

## Syntax

```pseudo
arrayName.firstIndex{ condition }
```

The `.firstIndex()` method takes a single parameter, which is a closure representing the condition that an element must satisfy. The closure returns a boolean value indicating whether a particular element meets the condition.

## Example

Consider an array of integers representing the temperatures in Celsius:

```swift
let temperatures = [23, 18, 25, 20, 22, 21]
```

The `.firstIndex()` method is used below to find the index of the first temperature that exceeds a certain threshold, such as 25 degrees:

```swift
let threshold = 25

if let index = temperatures.firstIndex(where: { $0 > threshold }) {
    print("The first temperature exceeding \(threshold) degrees is at index \(index).")
} else {
    print("No temperature exceeds \(threshold) degrees.")
}
```

The output will be:

```shell
No temperature exceeds 25 degrees.
```

In this case, there are no temperatures that exceed 25. So, the `else` message is printed.

The `.firstIndex()` method returns an optional value, so optional binding (if let) is used to safely unwrap the result.

> **Note:** The `.firstIndex()` method is available in Swift 4.2 and later versions.
