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

- `predicate`, a [closure](https://www.codecademy.com/resources/docs/swift/closures) that takes an element of the sequence as its argument and returns a Boolean value indicating whether the element is a match.

> **Note:** If there is no element that satisfies the predicate `nil` is returned.

## Example

```swift
var values = [3,4,5,6,7]

let greaterThanFive  = values.first(where: { $0 > 5 })
print(greaterThanFive)
```

In the example above, the `.first()` method is searching through the `values` array. The  `.first()` method has a predicate, that is looking for items greater than `5`. This will output the first item that is greater than 5:

```shell
6
```

---
> **Note:** `.first` is an array property while `.first()` is an array method.
---
Title: '.first'
Description: 'Returns the first element of the sequence.'
Subjects:

- 'iOS'
- 'Mobile Development'
Tags:
- 'Arrays'
- 'Properties'
CatalogContent:
- 'learn-swift'
- 'paths/build-ios-apps-with-swiftui'

---

The **`.first`** property returns the first element of the sequence.

## Syntax

```pseudo
arrayName.first
```

> **Note:** The `.first` property returns an optional value, that should be unwrapped. There are different techniques to [unwrap optionals](https://www.codecademy.com/resources/docs/swift/optionals).

## Example

```swift
var numbers = [5, 1, 8, 4]

print(numbers.first!)
```

In the example above, the `.first` property of the `numbers` array is printed out. The `.first` property will return the first item of the `numbers` array as an optional value. The `!` forces to unwrap the value of the returned first element. This will output:

```shell
5
```
