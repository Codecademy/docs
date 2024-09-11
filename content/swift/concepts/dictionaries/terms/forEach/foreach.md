---
Title: 'forEach'
Description: 'The forEach method allows iteration over each key-value pair in a Swift dictionary.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'Dictionary'
  - 'Properties'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---



The **`forEach`** method is used to iterate over each key-value pair in a Swift dictionary.
It applies a specified closure to each element in the dictionary.
This method is particularly useful for performing actions or computations on each element
without needing to manually handle key access.

## Syntax

```pseudo
dictionary.forEach { (key, value) in 
    // Code to execute for each key-value pair
}
```

- dictionary:  This is the Swift dictionary you want to iterate over. It contains key-value pairs that you want to process.
- foreach: This is the method called on the dictionary object. It takes a closure as its argument.
- { (key, value) in: This is the closure syntax used with forEach. Think of it as a placeholder for each key-value pair in the dictionary.

## Example
Here's an example of using 'forEach' with a dictionary:
```swift
let fruits = ["apple": 3, "banana": 2, "cherry": 5]

fruits.forEach { (key, value) in
    print("There are \(value) \(key)s.")
}
```
if you run this code, this will be the output:
```shell
There are 3 apples.
There are 2 bananas.
There are 5 cherrys.
```