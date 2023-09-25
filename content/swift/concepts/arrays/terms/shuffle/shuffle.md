---
Title: '.shuffle()'
Description: 'Randomly shuffles the elements of an array.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'Random'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.shuffle()`** method in Swift is used to randomly shuffle the elements of an array. It reorders the elements in a random order, providing a different arrangement of the elements each time it is called.

## Syntax

The syntax of the `.shuffle()` method is as follows:

```pseudo
arrayName.shuffle()
```

The `arrayName` is the name of the array to shuffle. The method will shuffle the elements of the array in place: it modifies the original array in lieu of returning a copy.

## Example

A basic implementation of the `.shuffle()` method is demonstrated below:

```swift
var numbers = [1, 2, 3, 4, 5]
numbers.shuffle()
print(numbers)
```

The output will be something similar to:

```shell
[4, 1, 2, 5, 3]
```

Each time the code is executed, the output will be different since the elements are shuffled randomly.

The `.shuffle()` method provides a convenient way to introduce randomness into the order of elements in an array, which can be useful for various scenarios like randomizing game elements, shuffling a playlist, or generating random sequences.

> **Note:** The `.shuffle()` method is available in Swift 4.2 and later versions.
