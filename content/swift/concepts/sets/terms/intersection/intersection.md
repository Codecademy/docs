---
Title: '.intersection()'
Description: 'Returns a new set of elements with the overlapping elements of two sets.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'Data Types'
  - 'Variables'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.intersection()`** method returns a new set containing all elements of the set that also belong to the given sequence.

## Syntax

```pseudo
newSet = mySet.intersection(mySequence)
```

Sets `mySet` and sequence `mySequence` must have a countable number of members.

## Example

```swift
let friends: Set = ["Pam", "Jim", "Andy", "Darryl"]
let colleagues = ["Dwight", "Michael", "Kelly", "Andy", "Darryl"]
let workFriends = friends.intersection(colleagues)
print(workFriends)

let groupAges: Set = [12, 22, 17, 45, 64, 6]
let minorAges = (0...17)
let children = groupAges.intersection(minorAges)
print(children)
```

This will output:

```shell
["Darryl", "Andy"]
[17, 6, 12]
```

> **Note:** A set is an unordered data structure, so elements may be ordered differently when outputted.
