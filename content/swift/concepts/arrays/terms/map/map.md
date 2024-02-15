---
Title: '.map()'
Description: 'Returns a new array with the results of calling a function for every element in the array.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Arrays'
  - 'Methods'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.map()`** method returns a new array containing the transformed values from calling the passed-in [closure](https://www.codecademy.com/resources/docs/swift/closures) on each element of the given collection. It can be used on types that follow Swift's `Sequence` and `Collection` protocols such as [arrays](https://www.codecademy.com/resources/docs/swift/arrays), [sets](https://www.codecademy.com/resources/docs/swift/sets), and [dictionaries](https://www.codecademy.com/resources/docs/swift/dictionaries).

> **Note:** The original container is not modified, only the new array will contain the modified values.

## Syntax

```pseudo
arrayName.map()
```

## Example

```swift
let name = ["Gaeun", "River", "Minkyeong", "Dani"]
let lowercaseNames = name.map { $0.lowercased() }
print(lowercaseNames)

let letterCounts = name.map { $0.count }
print(letterCounts)
```

In the example above, each element in the `name` array is lower-cased and placed into a new array named `lowerCaseNames`. Then, the `name` array is mapped over again and a new array is returned with the count of each element. This will output:

```shell
["gaeun", "river", "minkyeong", "dani"]
[5, 5, 9, 4]
```
