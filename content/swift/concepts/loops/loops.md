---
Title: "Loops"
Subjects:
  - "Mobile Development"
  - "Computer Science"
Tags:
  - "Loops"
  - "For"
  - "While"
  - "Control Flow"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-swift"
  - "https://www.codecademy.com/learn/paths/build-ios-apps-with-swiftui"
---

## `for`-`in` Loop

The `for`-`in` loop is used to iterate over collections, including strings and ranges.

```swift
for char in "hehe" {
  print(char)
}
```

The output would be:

```bash
h
e
h
e
```

## `continue` Keyword

The `continue` keyword will force the loop to move on to the next iteration.

```swift
for num in 0...5 {
  if num % 2 == 0 {
    continue
  }
  print(num)
}
```

The output would be:

```
1
3
5
```

## `break` Keyword

To terminate a loop before its completion, use the `break` keyword.

```swift
for char in "supercalifragilisticexpialidocious" {
  if char == "c" {
    break
  }
  print(char)
}
```

The output would be:

```
s
u
p
e
r
```

## Ranges

Ranges created by the `...` operator will include the numbers from the lower bound to (and includes) the upper bound.

```swift
let zeroToThree = 0...3

// zeroToThree: 0, 1, 2, 3
```

## `stride()` Function

Calling `stride()` with the 3 necessary arguments creates a collection of numbers; the arguments decide the starting number to, the (excluded) ending number, and how to increment/decrement from the start to the end.

```swift
for oddNum in stride(from: 1, to: 5, by: 2) {
  print(oddNum)
}
```

The output would be:

```
1
3
```

