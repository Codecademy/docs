---
Title: '.contains()'
Description: 'Returns a Boolean value indicating whether the sequence contains the given element.'
Subjects:
  - 'Computer Science'
  - 'Mobile Development'
Tags:
  - 'Dictionary'
  - 'Properties'
  - 'Arrays'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.contains()`** method returns `true` if an array contains a specified element, and `false` otherwise.

## Syntax

```pseudo
dictionaryInstance.contains(element)
```

- `element`: The item to check for in the array. It returns `true` if the item is present, and `false` otherwise.

To check if a dictionary contains a specific key-value pair, the following is used:

```pseudo
dictionaryInstance.contains{check}
```

- `check`: A closure that takes a key-value pair `(key, value)` and returns `true` if the pair satisfies the specified condition, and `false` otherwise.

## Example

In the example below, `.contains()` is checking if a particular actor is in an array storing a movie’s cast:

```swift
let cast = ["Vivien", "Marlon", "Kim", "Karl"]
print(cast.contains("Marlon"))
```

This example results in the following output:

```shell
true
```
