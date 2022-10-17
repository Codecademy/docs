---
Title: '.map()'
Description: 'Returns an array containing the results of mapping the given closure over the sequence’s elements.'
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

The **`.map()`** A map is a function that executes a function passed as a parameter when calling itself and returns the result. All types that follow Swift's Sequence and Collection protocols can use maps. Using the map, each value contained in the container is applied to the function received through the parameter, then packaged in the container again and returned. The value of the existing container is not changed and a new container is created and returned.

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

In the example above, circulating the array entered in the name, each element is either made into a lower case or returned to a new array by counting the number of characters in the element. This will output:

```shell
["gaeun", "river", "minkyeong", "dani"]
[5, 5, 9, 4]
```
