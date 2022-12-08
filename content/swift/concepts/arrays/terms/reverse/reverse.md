---
Title: '.reverse()'
Description: 'Reverses the elements within an array so that the first element becomes the last element and vice versa.'
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

The **`.reverse()`** method reverses an array in place, mutating the original array, and returns the elements within it so that the first element becomes the last element and vice versa.

## Syntax

```pseudo
arrayName.reverse()
```

## Example

```swift
var topBabyNames = ["Jackson", "Liam", "Noah", "Olivia", "Riley", "Sophia"]

topBabyNames.reverse()
print(topBabyNames)
// Output: ["Sophia", "Riley", "Olivia", "Noah", "Liam", "Jackson"]
```
