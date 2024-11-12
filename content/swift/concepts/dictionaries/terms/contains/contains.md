---
Title: '.contains()'
Description: 'Returns a boolean value that indicates whether a dictionary contains a specified key.'
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

The **`.contains()`** method returns a boolean value that indicates whether a dictionary contains a specified key. The method takes a single argument, which is a key. If the dictionary contains the specified key, the method returns `true` otherwise, it returns `false`.

## Syntax

```pseudo
dictionary.contains{check}
```

- `dictionary`: An instance of the Dictionary type in Swift.
- `check`: A closure that evaluates whether a specific key or value exists within the dictionary.

## Example

The below example shows the usage of `.contains()` method:

```swift
var fruitStand = [
  "Apples": 12,
  "Bananas": 20,
  "Oranges": 17
]

print(fruitStand.contains(where: { key, value in
  return key == "Apples" && value == 12
}))

print(fruitStand.contains(where: { key, value in
  return key == "Grapes" && value == 10
}))
```

This will output:

```shell
true
false
```
