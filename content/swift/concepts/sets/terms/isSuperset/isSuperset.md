---
Title: '.isSuperset()'
Description: 'Checks if a set contains every element of another set.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Sets'
  - 'Methods'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.isSuperset()`** method returns a boolean telling whether every element of a given set exists in another set.

## Syntax

```pseudo
setOne.isSuperset(of: setTwo)
```

The `isSuperset()` method returns `true` if `setOne` is a superset of `setTwo`, `false` otherwise.

## Example

```swift
let setOne: Set = ["Apple", "Orange", "Banana", "Kiwi", "Tomato"]
let setTwo: Set = ["Orange", "Banana"]

if setOne.isSuperset(of: setTwo) {
  print("setOne is a superset of setTwo.")
} else {
  print("setOne is not a superset of setTwo.")
}
```

In the example above, the first block after the `if` statement will run if `setOne` is a superset of `setTwo`. This will output:

```shell
setOne is a superset of setTwo.
```
