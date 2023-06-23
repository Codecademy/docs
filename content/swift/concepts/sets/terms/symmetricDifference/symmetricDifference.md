---
Title: '.symmetricDifference()'
Description: 'Returns a new set with all the elements from two sets that do not overlap.'
Subjects:
  - 'Software Development'
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'Sets'
  - 'Methods'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.symmetricDifference()`** method returns a new set with the elements that are either in the set or in the given sequence, but not in both. In other words, it returns a new set with all the elements from two sets that do not overlap.

## Syntax

```pseudo
setName.symmetricDifference(otherSetName)
```

The `otherSetName` parameter is a finite sequence of elements.

## Example

The following example shows the elements that aren't common to each set:

```swift
let food: Set = ["Apple", "Banana", "Orange", "Peach"]
let colors = ["Green", "Blue", "Orange", "Peach"]
let eitherFoodOrColor = food.symmetricDifference(colors)
```

This will display the following:

```shell
["Banana", "Green", "Apple", "Blue"]
```
