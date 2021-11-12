---
Title: 'Tuples'
Description: 'Tuples compound multiple values into a single value.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Tuples'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

Tuples are a data type introduced in Swift version 4. They are used to group multiple value, separated by commas `,`, into a single value that is enclosed in parentheses `()`.

**Note:** Tuples are _compound types_. This means that they  combine different types of data.

## Syntax

```swift
var myTuple = (value1, value2, ...)
```

## Accessing Values

Values of a tuple can be accessed using indeces:

```swift
var computerScience = (1960, "George Forsythe")

print(computerScience.0)
// Output: 1960
print(computerScience.1)
// Output: George Forsythe
```

Values can also be named and accessed through them:

```swift
var alanTuring = (
  name: "Alan Mathison Turing",
  born: 1912,
  inventions: ["Universal Turing Machine", "Bombe"]
)

print(alanTuring.name)
// Alan Mathison Turing
print(alanTuring.born)
// 1912
print(alanTuring.inventions)
// ["Universal Turing Machine", "Bombe"]
```

## Changing Values

