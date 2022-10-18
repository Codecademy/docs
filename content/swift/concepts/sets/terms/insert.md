---
Title: '.insert()'
Description: 'Adds an element at a specified index.'
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

The **`insert()`** method adds or inserts a given element in the set if it is not already present because set is a collection of unique elements.

## Syntax

```pseudo
setName.insert(element)
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

// NOTE - Set is an unordered collection so the order of elements can vary.
```