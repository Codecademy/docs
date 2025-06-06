---
Title: 'Capacity'
Description: 'Returns the total number of elements that the array can contain without allocating new storage.'
Subjects:
- 'Computer Science'
- 'IOS'
- 'Mobile Development'
Tags:
- 'Swift'
- 'Arrays'
- 'Data Structures'
- 'Memory'
- 'Variables'
- 'Collections'
CatalogContent:
- 'learn-swift'
- 'paths/build-ios-apps-with-swiftui'
---

The ****capacity**** of a [Swift](https://www.codecademy.com/resources/docs/swift) [array](https://www.codecademy.com/resources/docs/swift/arrays) represents the amount of memory currently allocated to store elements without resizing. When the number of elements exceeds this capacity, the array automatically reallocates memory—typically using an exponential growth strategy—to maintain efficient appending performance.

## Syntax

    var arrayName: [Int] = []
    arrayName.capacity

## Example

    var numbers: [Int] = []
    print(numbers.capacity)  // prints 0
    
    numbers.append(1)
    numbers.append(2)
    numbers.append(3)
    print(numbers.capacity)  // prints 4
