---
Title: '.first()'
Description: 'Returns the first element of the sequence that satisfies the given predicate.'
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

The **`.first()`** method returns the first element of the sequence that satisfies predicate, or nil if there is no element that satisfies predicate.

## Syntax

```pseudo
arrayName.first()
```

The `.first()` method takes one argument:

- `predicate`, a closure that takes an element of the sequence as its argument and returns a Boolean value indicating whether the element is a match.

> **Note:** If there is no element that satisfies the predicate `nil` is returned.

## Example

```swift
var values = [3,4,5,6,7]

let greaterThanFive  = values.first(where: { $0 > 5 })
print(greaterThanFive)
```

In the example above, the `.first()` method is searching through the `values` array. The  `.first()` method has a predicate, that is looking for items greater than `5`. This will output:

```shell
6
```

---


---
Title: '.first()'
Description: 'Returns the first element of the sequence that satisfies the given predicate.'
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

The **`.first()`** method returns the first element of the sequence that satisfies predicate, or nil if there is no element that satisfies predicate.

## Syntax

```pseudo
arrayName.first
```

The `.first` property takes one argument:

> **Note:** The `.first` property returns an optional value, so we need to unwrap it. There are different techniques to unwrap optionals.

## Example

```swift
var values = [3,4,5,6,7]

let firstItem  = values.first
print(firstItem)
```

In the example above, the we assign the `.first` property of the `values` array to the variable `firstItem`. The `.first` property will return the first item of the `values` array. This will output:

```shell
3
```
