---
Title: '.first()'
Description: 'Returns the first element of the array that satisfies the given condition.'
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

The **`.first()`** method returns the first element of the array that fulfills the condition, or `nil` if there is no element that fulfills the condition.

> **Note:** `.first()` is an method while `.first` is a property. For details about the `.first` array property see the bottom part of this document.

## Syntax

```pseudo
arrayName.first(where: { condition })
```

The `.first()` method takes one argument:

- `condition`, a [closure](https://www.codecademy.com/resources/docs/swift/closures) that takes an element of the array as its argument and returns a Boolean value indicating whether the element is a match.

## Example

```swift
var values = [3,4,5,6,7]

let greaterThanFive = values.first(where: { $0 > 5 })

print(greaterThanFive!) // Force unwrapping optional
```

In the example above, the `.first()` method is searching through the `values` array. The condition is if an item in the array is greater than `5` and will return the first item that meets that condition.

This will output:

```shell
6
```

## The `.first` Property

The **`.first`** property returns the first element of the array.

### Syntax

```pseudo
arrayName.first
```

> **Note:** The `.first` property returns an optional value that should be unwrapped. There are different techniques to unwrap [optionals](https://www.codecademy.com/resources/docs/swift/optionals).

### Example

```swift
var numbers = [5, 1, 8, 4]

print(numbers.first!)
```

In the example above, the `.first` property of the `numbers` array is printed out. The `.first` property will return the first item of the `numbers` array as an optional value. `!` forces the expression to unwrap the value of the returned first element.

> **Note:** Force unwrapping optionals in this way is not recommended because it does not handle `nil` cases.

After unwrapping the value of the returned first element, the output will be:

```shell
5
```
