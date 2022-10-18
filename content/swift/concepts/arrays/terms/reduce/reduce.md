---
Title: '.reduce()'
Description: 'Loops/Iterates over every item in a sequence, combines them into one value, and returns the combined result.'
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

The **`.reduce()`** method produces a single value from the elements of an entire sequence using the given closure.

## Syntax

```pseudo
arrayName.reduce(_:_:) 
```

The `.reduce()` method takes two arguments:

- initial value - To store the initial value or result returned by the closure from each iteration.
- closure - It takes 2 arguments, first one is the result from previous execution of the closure and the other one is next item in the collection.

## Example

```swift
var values = [2,3,4,5]

let sum  = values.reduce(0, { x, y in x + y })
print(sum)
```

In the example above, We are calculating the sum of the elements where `0` is the initial value followed by the closure, `x` holds the result of the previous execution and `y` is the next item in Array. This will output:

```shell
14
```
