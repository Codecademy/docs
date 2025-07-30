---
Title: '.count'
Description: 'Returns the number of elements in an array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Properties'
  - 'Swift'
  - 'Values'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The Swift `.count` property is used to calculate the number of elements in an array. It's a built-in feature of Swift’s `Array` type and returns an `Int` that represents the number of elements in the array.

## Swift `.count` Syntax

```pseudo
arrayName.count
```

**Parameters:**

The Swift `.count` property takes no parameters.

**Return value:**

Returns an `Int` that represents the number of elements in the array.

## Example 1: Using Swift `.count` on an Array

In this example, the Swift `.count` property is used to find the number of elements in the `fruits` array:

```swift
let fruits = ["Apple", "Banana", "Mango"]
print("Number of fruits: \(fruits.count)")
```

Here is the output:

```shell
Number of fruits: 3
```

## Example 2: Using Swift `.count` in a Conditional Statement

In this example, Swift `.count` is used to check if the array is non-empty before performing calculations:

```swift
let scores = [95, 88, 76]

if scores.count > 0 {
  print("Scores available.")
} else {
  print("No scores available.")
}
```

Here is the output:

```shell
Scores available.
```

## Example 3: Using Swift `.count` on an Empty Array

In this example, the Swift `.count` property is used to find the length of an empty array:

```swift
let emptyArray: [String] = []

if emptyArray.count == 0 {
  print("The array is empty.")
} else {
  print("The array is not empty.")
}
```

Here is the output:

```shell
The array is empty.
```

## Frequently Asked Questions

### 1. Is Swift `.count` the same as `.length` in other languages?

Yes. While many languages like JavaScript use `.length`, Swift uses `.count`. They serve the same purpose — returning the number of elements in an array — but the name differs according to language conventions.

### 2. Is Swift `.count` performance-intensive for large arrays?

No. Swift `.count` is efficient because it’s a computed property that retrieves an already-known size, not by iterating through the array.

### 3. Can Swift `.count` be used with other collection types?

Yes. Swift `.count` can also be used with:

- Strings (Returns the number of characters)
- Dictionaries (Returns the number of key-value pairs)
- Sets (Returns the number of unique elements)
