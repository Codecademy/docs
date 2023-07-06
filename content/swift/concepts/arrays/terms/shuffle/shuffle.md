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

The syntax of the **`.shuffle()`** method is as follows:

```pseudo
arrayName.shuffle()
```

The **`arrayName`** is the name of the array to shuffle.

## Example

Consider an array of numbers represented by the variable `numbers` on which The **`.shuffle()`** method can be used to randomly shuffle the elements in the array:

```swift
var numbers = [1, 2, 3, 4, 5]
numbers.shuffle()
print(numbers)

```

In this example, the **`.shuffle()`** method is called on the `numbers` array. After shuffling, the elements of the array will be rearranged randomly.

The output will be:

```shell
[4, 1, 2, 5, 3]
```

Each time the code is executed, the output will be different since the elements are shuffled randomly.

The **`.shuffle()`** method provides a convenient way to introduce randomness into the order of elements in an array, which can be useful for various scenarios like randomizing game elements, shuffling a playlist, or generating random sequences.

> **Note:** The `.shuffle()` method is available in Swift 4.2 and later versions.
