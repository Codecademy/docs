---
Title: '.union()'
Description: 'Returns a new set containing all elements of one set combined with the elements of a given set.'
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

The **`.union()`** method returns a new set containing all elements of one set combined with the elements of a given set.

## Syntax

```pseudo
firstSet.union(secondSet)
```

Sets `firstSet` and `secondSet` must have countable number of members.

## Example

```swift
let friends: Set = ["Pam", "Jim", "Andy", "Darryl"]
let colleagues = ["Dwight", "Michael", "Ed"]
let friendsAndColleagues = friends.union(colleagues)
print(friendsAndColleagues)

let luckyNumbers: Set = [12, 13]
let luckySequence = (4...8)
let goodNumbers = luckyNumbers.union(luckySequence)
print(goodNumbers)
```

This will output:

```shell
["Darryl", "Pam", "Jim", "Ed", "Andy", "Michael", "Dwight"]
[12, 4, 5, 6, 7, 8, 13]
```

> **Note:** A set is an unordered data structure, so output elements may be ordered differently.
