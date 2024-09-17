---
Title: '.forEach()'
Description: 'Iterates over each key-value pair in a Swift dictionary, applying a closure to both the key and value.'
Subjects:
  - 'Computer Science'
  - 'Mobile Development'
Tags:
  - 'Dictionary'
  - 'Properties'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---


The **`.forEach()`** method is used to iterate over each key-value pair in a Swift dictionary. It applies a specified closure to each key-value pair, allowing for actions or computations to be performed on each element without manual key access. This method is particularly useful for executing side effects or processing elements concisely and functionally.

## Syntax

```pseudo
dictionary.forEach { (key, value) in 
    // Code to execute for each key-value pair
}
```

- `dictionary`: The variable name for the dictionary instance.
- `{ (key, value) in ... }`: Defines a closure where key and value are parameters representing each key-value pair from the `dictionary`. 

## Example
Here's an example of using 'forEach' with a dictionary:


Here's an example of using `.forEach()` with a dictionary:

```swift
let fruits = ["apple": 3, "banana": 2, "cherry": 5]
fruits.forEach { (key, value) in
    print("There are \(value) \(key)s.")
}
```
The code above produces the following output:
```shell
There are 3 apples.
There are 2 bananas.
There are 5 cherrys.
```
> **_NOTE:_**  The order of key-value pairs iterated over in a Swift dictionary using forEach is not guaranteed and may vary between executions.