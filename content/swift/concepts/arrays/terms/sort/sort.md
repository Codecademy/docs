---
Title: '.sort()'
Description: 'Sorts elements of any mutable collection in ascending order.'
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

The **`.sort()`** method is called on any mutable collection and returns its elements sorted in ascending order by default. This means that the element at index zero is less than (`<`) that at index one, the elements at index one is `<` that at index two, and so on.

## Syntax

```pseudo
arrayName.sort()

arrayName.sort(by: predicate)
```

Using the `by` parameter, the sorting order can be altered.

## Example

```swift
var topBabyNames = ["Sophia", "Liam", "Riley", "Jackson", "Olivia", "Noah"]

topBabyNames.sort()
print(topBabyNames)

topBabyNames.sort(by: >)
print(topBabyNames)
```

In the example above, the `topBabyNames` array is first sorted in ascending order. Then, the greater-than operator, `>`, is passed as the predicate, which will result in the array being sorted in descending order. This will output:

```shell
["Jackson", "Liam", "Noah", "Olivia", "Riley", "Sophia"]
["Sophia", "Riley", "Olivia", "Noah", "Liam", "Jackson"]
```
