---
Title: 'Ranges'
Description: 'Ranges are used to create an interval of values.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Range'
  - 'Data Structures'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**Ranges** are used to create an interval of values. There are two kinds of range [structures](https://www.codecademy.com/resources/docs/swift/structures), `Range` and `ClosedRange`.

`Range` instances are declared using the `..<` operator. They include values from a lower bound up to, but **excluding** an upper bound.

`ClosedRange` instances are declared using the `...` operator. They contain values from a lower bound up to and **including** an upper bound.

## Creating Ranges

The syntax below shows how to create a `Range` with `lower` as the lower bound value and `upper` as the upper bound value:

```pseudo
let newRange = lower..<upper
```

A `ClosedRange` can be created similarly:

```pseudo
let newClosedRange = lower...upper
```

## Using Ranges

Some useful applications of ranges are:

- For iteration with for-in [loops](https://www.codecademy.com/resources/docs/swift/loops).
- In [switch](https://www.codecademy.com/resources/docs/swift/switch) statements to find out if a value lies within an interval.
- Selecting a section of an [array](https://www.codecademy.com/resources/docs/swift/arrays).

### For-in Loop Example

The example below uses for-in loops with a `Range` and then a `closedRange` to print some emoji trees:

```swift
for n in 1..<4 {
  print(String(repeating: "🌲", count: n))
}

for n in 1...4 {
  print(String(repeating: "🌳", count: n))
}
```

This will output:

```shell
🌲
🌲🌲
🌲🌲🌲
🌳
🌳🌳
🌳🌳🌳
🌳🌳🌳🌳
```

### Switch Example

The example below uses a switch statement and a range to determine which emoji to print depending on the value of `treeHeight`:

```swift
let treeHeight = 2

switch treeHeight {
case 0...30:
    print("🌱")
default:
     print("🌳")
}
```

This will output:

```shell
🌱
```

### Array Example

The example below prints out a section of the `tree` array using a range to select the element indexes:

```swift
let trees = ["Pine", "Oak", "Ash", "Willow", "Olive"]

print(trees[2...4])
```

This will output:

```shell
["Ash", "Willow", "Olive"]
```
