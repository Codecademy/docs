---
Title: '.isSuperset()'
Description: 'Returns a boolean telling whether every element of a given set exists in another set.'
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

The `.isSuperset()` method returns `true` if `setOne` is a superset of `setTwo`, `false` otherwise.

## Example

In the following example, the `.isSuperset()` method is used with a [conditional expression](https://www.codecademy.com/resources/docs/swift/conditionals) to print a phrase:

```swift
let setOne: Set = ["Apple", "Orange", "Banana", "Kiwi", "Tomato"]
let setTwo: Set = ["Orange", "Banana"]

if setOne.isSuperset(of: setTwo) {
  print("setOne is a superset of setTwo.")
} else {
  print("setOne is not a superset of setTwo.")
}
```

This will output the following:

```shell
setOne is a superset of setTwo.
```
