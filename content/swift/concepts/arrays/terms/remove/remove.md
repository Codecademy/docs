---
Title: '.remove()'
Description: 'Removes an element from an array at a specified index.'
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

The **`.remove()`** method removes an element from an array at a specified index.

## Syntax

```pseudo
arrayName.remove(at: index)
```

## Example

```swift
var topBabyNames = ["Sophia", "Liam", "Riley", "Jackson", "Olivia", "Noah"]

topBabyNames.remove(at: 2)
print(topBabyNames)
```

In the example above, the element `at` index `2` is removed. This will output:

```shell
["Sophia", "Liam", "Jackson", "Olivia", "Noah"]
```
