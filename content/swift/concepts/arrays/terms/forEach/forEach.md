---
Title: '.forEach()'
Description: 'Loops over an array and performs some action on each element within it.'
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

The **`.forEach()`** method loops over the array, calling the closure function on each element in the array. As each element is iterated over, some action can be performed on it.

This method will operate on all elements of the array and cannot be escaped using a `break` or `continue` call. Returning a value in the body of the closure will only return that value out of the body and not the declaring method body. The `.forEach()` method is commonly used when all elements are to be manipulated by the loop or to display the purpose of the loop to others reading the code.

## Syntax

```pseudo
arrayName.forEach(body)
```

## Example

```swift
var topBabyNames = ["Liam", "Jackson"]

topBabyNames.forEach { name in
  print("\(name) is the coolest name.")
}
// Output:
// Liam is the coolest name.
// Jackson is the coolest name.
```
