---
Title: '.isSubset()'
Description: 'Checks whether all elements of a set are present in another set.'
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

The **`.isSubset()`** method returns `true` if all elements of a set are present in another set (passed as an argument), `false` otherwise.

## Syntax

```pseudo
setName.isSubset(of: otherSetName)
```

The `isSubset()` method returns `true` if `setName` is a subset of `otherSetName`, `false` otherwise.

## Example

```swift
let set1: Set = [2, 4, 6, 8, 10]
let set2: Set = [4, 10]

if set2.isSubset(of: set1) {
  print("set2 is a subset of set1.")
} else {
  print("set2 is not a subset of set1.")
}
```

In the example above, the first block after the `if` statement will run if `set2` is a subset of `set1`. This will output:

```shell
set2 is a subset of set1.
```
