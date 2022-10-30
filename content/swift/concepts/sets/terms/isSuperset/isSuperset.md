---
Title: '.isSuperset()'
Description: 'Checks whether a set contains every element of another set.'
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

The **`.isSuperset()`** method returns `true` if a set has every element of another set (passed as an argument), `false` otherwise.

## Syntax

```pseudo
setName.isSuperset(of: otherSetName)
```

The `isSuperset()` method returns `true` if `setName` is a superset of `otherSetName`, `false` otherwise.

## Example

```swift
let set1: Set = ["Apple", "Orange", "Banana", "Kiwi", "Tomato"]
let set2: Set = ["Orange", "Banana"]

if set1.isSuperset(of: set2) {
  print("set1 is a superset of set2.")
} else {
  print("set1 is not a superset of set2.")
}
```

In the example above, the first block after the `if` statement will run if `set1` is a superset of `set2`. This will output:

```shell
set1 is a superset of set2.
```
