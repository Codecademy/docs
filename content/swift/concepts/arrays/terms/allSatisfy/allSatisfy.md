---
Title: '.allSatisfy()'
Description: 'Returns a Boolean expression indicating whether every element of a sequence satisfies a given condition.'
Subjects:
  - 'IOS'
  - 'Mobile Development'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'SwiftUI'
CatalogContent:
  - 'learn-Swift'
  - 'paths/build-ios-apps-with-swiftui'
---
** .allSatisfy() ** is a Swift method that checks if all the elements in an array satisfies a given condition. 

## Syntax
```pseudo
array.allSatisfy(condition)
```

## Example
```swift
//create array
let numbers = [2, 4, 6, 8]
//create condition
let evenNumbers = numbers.allSatisfy({$0 % 2 == 0})
print(evenNumbers)
// output: true
```
