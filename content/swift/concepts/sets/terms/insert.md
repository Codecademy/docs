---
Title: '.insert()'
Description: 'Add an element at a specified index.'
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

The **`insert()`** method inserts the given element in the set if it is not already present.

## Syntax

```pseudo
anySet.insert(element)
```

## Example

```swift
var myFruitsSet: Set<String> = ["apple"]

print(myFruitsSet.insert("banana"))
// Output: (inserted: true, memberAfterInsert: "banana")

print(myFruitsSet)
// Output: ["apple", "banana"]

print(myFruitsSet.insert("apple"))
// Output: (inserted: false, memberAfterInsert: "apple")

print(myFruitsSet)
// Output: ["apple", "banana"]
```