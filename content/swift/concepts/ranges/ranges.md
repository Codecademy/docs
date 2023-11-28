---
Title: 'Ranges'
Description: 'Ranges are used to create an interval of values.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Range'
  - 'Data Structures'
  - 'Loops'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**Ranges** are used to create an interval of values. There are two kinds of range [structures](https://www.codecademy.com/resources/docs/swift/structures), `Range` for creating half-open ranges and `ClosedRange` for creating closed ranges.

## Creating Ranges

### Half-open Ranges

`Range` instances are declared using the `..<` half-open range operator. They include values from a lower bound up to, but **excluding** an upper bound.

The syntax below shows how to create a half-open range with `lower` as the lower bound value and `upper` as the upper bound value:

```pseudo
let newRange = lower..<upper
```

### Closed Ranges

`ClosedRange` instances are declared using the `...` closed range operator. They contain values from a lower bound up to and **including** an upper bound.

The syntax below shows how to create a closed range with `lower` as the lower bound value and `upper` as the upper bound value:

```pseudo
let newClosedRange = lower...upper
```

## Using Ranges

Some useful applications of ranges are:

- For iteration with `for-in` [loops](https://www.codecademy.com/resources/docs/swift/loops).
- In [switch](https://www.codecademy.com/resources/docs/swift/switch) statements to find out if a value lies within an interval.
- Selecting a section of an [array](https://www.codecademy.com/resources/docs/swift/arrays).

### For-in Loop Example

The example below uses `for-in` loops with a half-open range and then a closed range to print some emoji trees:

```swift
for n in 1..<4 {
  print(String(repeating: "🌲", count: n))
}

for n in 1...4 {
  print(String(repeating: "🌳", count: n))
}
```

The above example will result in the following output:

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

The example below uses a switch statement and a closed range to determine which emoji to print depending on the value of `treeHeight`:

```swift
let treeHeight = 2

switch treeHeight {
case 0...30:
    print("🌱")
default:
     print("🌳")
}
```

The above example will result in the following output:

```shell
🌱
```

### Array Example

The example below prints out a section of the `tree` array using a closed range to select the element indexes:

```swift
let trees = ["Pine", "Oak", "Ash", "Willow", "Olive"]

print(trees[2...4])
```

The above example will result in the following output:

```shell
["Ash", "Willow", "Olive"]
```
