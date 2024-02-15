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

The **`.insert()`** method adds or inserts a given element in a set.

## Syntax

```pseudo
setName.insert(element)
```

Since a set must contain unique elements, the `element` parameter will only be inserted if it does not already exist in `setName`.

## Example

The following is an example of the `.insert()` method:

```swift
var myFruitsSet: Set<String> = ["apple"]
print(myFruitsSet.insert("banana"))
print(myFruitsSet)
print(myFruitsSet.insert("apple"))
print(myFruitsSet)
```

This results in the following output:

```shell
(inserted: true, memberAfterInsert: "banana")
["apple", "banana"]
(inserted: false, memberAfterInsert: "apple")
["apple", "banana"]
```

> **Note:** Sets are unordered collections, so the order of elements can vary.
