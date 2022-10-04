---
Title: 'Tuples'
Description: 'Compounds multiple values into a single value.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Tuples'
  - 'Arrays'
  - 'Dictionaries'
  - 'Sets'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**Tuples** are a data structure introduced in [Swift 4.0](https://www.swift.org/blog/swift-4.0-released/). It is used to group multiple values, separated by commas `,`, into a single value that is enclosed in parentheses `()`.

> **Note:** Tuples are compound types. This means that they can combine different types of data.

## Syntax

```swift
var myTuple = (value1, value2, ...)
```

> **Note:** Names should be in camelCase.

## Accessing and Changing Values

Values of a tuple can be accessed using indices:

```swift
var computerScience = (1960, "George Forsythe")

print(computerScience.0)
// Output: 1960

print(computerScience.1)
// Output: George Forsythe
```

Values or elements can also be referenced with a named property:

```swift
var alanTuring = (
  name: "Alan Mathison Turing",
  born: 1912,
  inventions: ["Universal Turing Machine", "Bombe"]
)

print("\(alanTuring.name) was born in \(alanTuring.born) and invented the \(alanTuring.inventions[0]).")
// Alan Mathison Turing was born in 1912 and invented the Universal Turing Machine.
```

These values can then be altered through their indices or name:

```swift
computerScience.0 = 1961
print(computerScience.0)
// Output: 1961

alanTuring.inventions.append("Automatic Computing Engine")
print(alanTuring.inventions)
// Output: ["Universal Turing Machine", "Bombe", "Automatic Computing Engine"]
```
