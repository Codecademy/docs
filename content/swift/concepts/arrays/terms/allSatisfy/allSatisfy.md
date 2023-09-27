---
Title: '.allSatisfy()'
Description: 'Returns a boolean expression indicating whether every element of a sequence satisfies a given condition.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'SwiftUI'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**`.allSatisfy()`** is a Swift method that checks if all the elements in an array satisfy a given condition.

## Syntax

```pseudo
array.allSatisfy(condition)
```

`condition`: An expression that is used to test the values in the array.

## Example

In the example below, an array called `numbers` is declared. Then the `.allSatisfy()` method is used to evaluate if the elements of `numbers` are all even (divisible by two).

```swift
// Create an array
let numbers = [2, 4, 6, 8]
// Specify the condition to be tested
let evenNumbers = numbers.allSatisfy({$0 % 2 == 0})
print(evenNumbers)
```

This example results in the following output:

```shell
true
```
