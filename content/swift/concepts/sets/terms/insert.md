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

The **`.insert()`** method adds or inserts a given element in the set if it is not already present since a set must contain unique elements.

## Syntax

```pseudo
setName.insert(element)
```

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
["apple", "banana"]
(inserted: false, memberAfterInsert: "apple")
["apple", "banana"]
```

Note: Sets are unordered collections, so the order of elements can vary.