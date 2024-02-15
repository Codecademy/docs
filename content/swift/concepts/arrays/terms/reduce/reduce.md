---
Title: '.reduce()'
Description: 'Loops or iterates over every item in a sequence, combines them into one value using a specified closure, and returns the combined result.'
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

The **`.reduce()`** method loops or iterates over every item in a sequence, combines them into one value using a specified [closure](https://www.codecademy.com/resources/docs/swift/closures), and returns the combined result.

## Syntax

```pseudo
arrayName.reduce(initialValue, closure)
```

The `.reduce()` method takes two arguments:

- `initialValue` stores the initial value or result returned by the closure from each iteration.
- `closure` takes 2 arguments. The first one is the result from previous execution of the closure, and the second one is next item in the collection.

> **Note:** If the array has no elements, the `initalValue` is returned.

## Example

```swift
var values = [2,3,4,5]

let sum  = values.reduce(0, { x, y in x + y })
print(sum)
```

In the example above, `0` is the initial value. `x` holds the result of the previous execution and `y` is the next item in the array. The closure performs an addition operation and returns the sum of all elements in the `values` array. This will output:

```shell
14
```
