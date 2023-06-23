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

The **`.first()`** method returns the first element of the array that fulfills the specified condition. Otherwise, it returns `nil`.

> **Note:** `.first()` is a method while `.first` is a property. Details about the `.first` array property can be found near the bottom of this entry.

## Syntax

```pseudo
arrayName.first(where: { condition })
```

The `.first()` method takes a single `condition` parameter. It is a [closure](https://www.codecademy.com/resources/docs/swift/closures) that returns a [boolean](https://www.codecademy.com/resources/docs/general/data-types/boolean) value indicating whether a given array element is a match.

## Example

```swift
var values = [3, 4, 5, 6, 7]

let greaterThanFive = values.first(where: { $0 > 5 })

print(greaterThanFive!) // Force unwrapping optional
```

In the example above, the `.first()` method is searching through the `values` array. The first item that meets the condition of being greater than `5` will be returned.

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
