---
Title: '.symmetricDifference()'
Description: 'Returns a new set with the elements.'
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

The **`.symmetricDifference()`** method returns a new set with the elements that are either in the set or in the given sequence, but not in both.

## Syntax

```pseudo
func symmetricDifference<S>(_other: S) -> Set<Element> where Element == S.Element, S:Sequence
```

Available when _Element_ conforms to _Hashable_

## Example

The following example shows the elements that aren't common to each set.

```swift
let food: Set = ["Apple", "Banana", "Orange", "Peach"]
let colors = ["Green", "Blue", "Orange", "Peach"]
let eitherFoodOrColor = food.symmetricDifference(colors)
```

This will display the following:

```psuedo
["Banana", "Green", "Apple", "Blue"]
```
