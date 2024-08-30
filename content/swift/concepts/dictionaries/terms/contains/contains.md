---
Title: '.contains'
Description: 'Returns a Boolean value indicating whether the sequence contains the given element.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'Dictionaries'
  - 'Properties'
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

In the example below, `.contains()` is checking to see if a favorite actor is in an array storing a movie’s cast.

```swift
let cast = ["Vivien", "Marlon", "Kim", "Karl"]
print(cast.contains("Marlon"))
```

This example results in the following output:

```shell
// Prints "true"
```
