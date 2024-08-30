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

The **`.isEmpty`** property returns `true` if an array contains no elements, and returns `false` if the array contains one or more elements.

## Syntax

```pseudo
arrayName.isEmpty
```

Where `arrayName` is the array being checked for elements.

## Example

The following example creates and array and evaluates the contents of the array with `.isEmpty` before and after adding an element:

```swift
var favoriteSongs = [String]()
print(favoriteSongs.isEmpty)

favoriteSongs.append("Stayin' Alive")
print(favoriteSongs.isEmpty)
```

This will output:

```shell
true
false
```

> **Note:** [Big-O](https://www.codecademy.com/resources/docs/general/big-o-notation) of this method is **O(1)**.
