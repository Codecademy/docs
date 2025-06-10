---
Title: 'Capacity'
Description: 'Returns the total number of elements that the array can contain without allocating new storage.'
Subjects:
  - 'Computer Science'
  - 'IOS'
  - 'Mobile Development'
Tags:
  - 'Arrays'
  - 'Collections'
  - 'Data Structures'
  - 'Memory'
  - 'Swift'
  - 'Variables'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`capacity`** of a Swift [array](https://www.codecademy.com/resources/docs/swift/arrays) represents the amount of memory currently allocated to store elements without requiring a resize. If the number of elements exceeds this capacity, the array automatically reallocates memory, usually following an exponential growth pattern—to ensure efficient performance during appends.

## Syntax

```pseudo
array.capacity
```

**Parameters:**

`capacity` is a read-only property and does not take any parameters.

**Return value:**

Returns the number of elements the array can store in its currently allocated memory without reallocating.

## Example

The following code prints the array's initial capacity, appends elements, and then prints the updated capacity to show how Swift manages memory allocation dynamically:

```swift
var numbers: [Int] = []
print(numbers.capacity)
    
numbers.append(1)
numbers.append(2)
numbers.append(3)
print(numbers.capacity) 
```

The output of this code will be:

```shell
0
3
```
