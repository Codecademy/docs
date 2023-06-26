---
Title: '.allSatisfy()'
Description: 'Returns a Boolean expression indicating whether every element of a sequence satisfies a given condition.'
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

**`.allSatisfy()`** is a Swift method that checks if all the elements in an array satisfies a given condition. 

## Syntax

```pseudo
array.allSatisfy(condition)
```

`condition` runs a true/false test on an array or set of given input values.

## Example

In the example below, an array was created called numbers with the values of 2, 4, 6, 8. We want to know if all the values in our array is even so we use the .allSatisfy method to check each value against a condition of our choosing. The condition in this example confirms if a value is even by verifying it is divisble by 2. If all values in the array satsify this condition the output will be true. 

```swift
//create array
let numbers = [2, 4, 6, 8]
//create condition
let evenNumbers = numbers.allSatisfy({$0 % 2 == 0})
print(evenNumbers)
```

This example results in the following output:

```shell
true
```
