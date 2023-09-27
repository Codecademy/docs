---
Title: '.contains()'
Description: 'Returns true if an array contains a specified element, false otherwise.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Arrays'
  - 'Methods'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.contains()`** method returns true if an array contains a specified element, false otherwise.

## Syntax

```pseudo
arrayName.contains(element)
```

## Example

```swift
var topBabyNames = ["Sophia", "Liam", "Riley", "Jackson", "Olivia", "Noah"]

print(topBabyNames.contains("Olivia"))
// Output: true
```

> **Note:** [Big-O](https://www.codecademy.com/resources/docs/general/big-o-notation) of this method is **O(n)**.
