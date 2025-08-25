---
Title: 'dropFirst()'
Description: 'Returns a subsequence by skipping the first element or first n elements from a Swift collection.'
Subjects:
  - 'Computer Science'
  - 'Mobile Development'
Tags:
  - 'Arrays'
  - 'Collections'
  - 'Swift'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

In Swift, the **`dropFirst()`** method is used on collections like [arrays](https://www.codecademy.com/resources/docs/swift/arrays), strings, and other sequences to return a subsequence with the first element (or first _n_ elements) removed. It doesn’t mutate the original collection, but returns a new subsequence starting from the dropped position.

## Syntax

```pseudo
collection.dropFirst(n)
```

**Parameters:**

- `n` (Optional): An `Int` representing the number of elements to skip. If omitted, it defaults to 1.

**Return value:**

Returns a `SubSequence` meaning a view into the original collection with the specified number of leading elements removed.

## Example 1: Removing the First Element from an Array

This example drops the first item in an array of numbers:

```swift
let scores = [90, 85, 80, 75]
let updatedScores = scores.dropFirst()

print(updatedScores)
```

The output of this code is:

```shell
[85, 80, 75]
```

## Example 2: Dropping the First 3 Names from a List

This example skips the first three values in an array of strings:

```swift
let names = ["Alice", "Bob", "Charlie", "Dana", "Eve"]
let remaining = names.dropFirst(3)

print(remaining)
```

The output of this code is:

```shell
["Dana", "Eve"]
```

## Example 3: Converting Result Back to an Array

Since `dropFirst()` returns a `SubSequence`, use `Array()` to convert the result when you need an actual array:

```swift
let data = [1, 2, 3, 4, 5]
let trimmed = Array(data.dropFirst(2))

print(trimmed)
```

The output of this code is:

```shell
[3, 4, 5]
```

## Frequently asked questions

### 1. What is the type of an array in Swift?

In Swift, arrays are generic collections. This means the type of array depends on the type of elements it holds. For example:

- `let numbers: [Int] = [1, 2, 3]` is an array of integers (`[Int]`)
- `let names: [String] = ["Alice", "Bob"]` is an array of strings (`[String]`)

### 2. Are Swift arrays dynamic?

Yes, Swift arrays are dynamic. This means they can grow or shrink in size:

- You can append new elements using `.append()` or `+=`
- You can remove elements using `.remove(at:)`, `.removeFirst()`, etc.

### 3. What is the difference between `dropFirst()` and `removeFirst()` in Swift?

- `dropFirst()` returns a new array after skipping the first element (or a specified number of elements) without modifying the original array.
- `removeFirst()` removes and returns the first element (or first `n` elements) from the original array, modifying it in place.
