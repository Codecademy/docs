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

The **`.map()`** method executes a function passed as a parameter when calling itself and returns the result. All types that follow Swift's Sequence and Collection protocols can use maps. Using the map, each value contained in the container is applied to the function received through the parameter, then packaged in the container again and returned. The value of the existing container is not changed and a new container is created and returned.

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

In the example above, each element in the `name` array is going to get lower-cased and placed into a new array named `lowerCaseNames`. Then, the `name` array is mapped over again and a new array is returned with the count of each element. This will output:

```shell
["gaeun", "river", "minkyeong", "dani"]
[5, 5, 9, 4]
```
