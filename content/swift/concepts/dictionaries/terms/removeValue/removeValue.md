---
Title: '.removeValue()'
Description: 'Removes a key-value pairing from a dictionary based on a given key.'
Subjects: 
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'Dictionaries'
  - 'Properties'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**The `.removeValue()` method will remove a key-value pairing from a dictionary based on a given key. If the key exists in the dictionary, the method will return the removed value. However, if the key is not found, the method will return nil.**

## Syntax

`dictionaryInstance.removeValue(forKey: key)`

## Example
```swift
var fruitBasket = [
    "Apples":3,
    "Bananas":7,
    "Oranges":2,
    "Pineapples":4,
]

if let removedValue = fruitBasket.removeValue(forKey: "Apples") {
    print(removedValue) // Output 3
  
} else {
    print("The key 'Apples' does not exist in the dictionary.")
}
```
In the example above, the `fruitBasket` dictionary is checked to see if the key `Apples` exists. If it does, it will remove that key and its print corresponding value. If it doesn't, a value of nil is returned.