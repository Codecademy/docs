---
Title: '.isEmpty'
Description: 'Returns true if an array contains no elements, returns false if the array contains one or more elements.'
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

The **`.isEmpty`** method returns true if an array contains no elements, returns false if the array contains one or more elements.

## Syntax

```pseudo
arrayName.isEmpty
```

## Example

```swift
var favoriteSongs = [String]()

print(favoriteSongs.isEmpty)
```
```shell
true
```
```swift
favoriteSongs.append("Stayin' Alive")
print(favoriteSongs.isEmpty)
```
```shell
false

```

> **Note:** [Big-O](https://www.codecademy.com/resources/docs/general/big-o-notation) of this method is **O(1)**.
