---
Title: '.contains'
Description: 'A Boolean value that indicates whether a dictionary contains a specified key.'

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

The **`.contains`** method returns a Boolean value that indicates whether a dictionary contains a specified key. The method takes a single argument, which is a key. If the dictionary contains the specified key, the method returns `true`; otherwise, it returns `false`.


## Syntax

```pseudo
dictionaryInstance.contains(where: { key, value in
  return key == "key" && value == "value"
})
```

## Example

```swift
var fruitStand = [
  "Apples": 12,
  "Bananas": 20,
  "Oranges": 17
] 

print(fruitStand.contains(where: { key, value in
  return key == "Apples" && value == 12
}))

// Output: true 

print(fruitStand.contains(where: { key, value in
  return key == "Grapes" && value == 10
}))
// Output: false 
```

In the example above, the `fruitStand` dictionary contains key-value pairs for apples, bananas, and oranges. The first `print` statement checks if the dictionary contains the key-value pair "Apples": 12, which is true. The second `print` statement checks for the key-value pair "Grapes": 10, which is false.

The `.contains` method is useful for checking the presence of specific key-value pairs in a dictionary.

