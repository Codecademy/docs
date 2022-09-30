---
Title: '.isEmpty'
Description: 'Returns a true value is there are no key-value pairs in a dictionary and false otherwise.'
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

The `.isEmpty` property will return a true value if there are no key-value pairs in a dictionary and false if the dictionary does contain key-value pairs.

## Syntax

```pseudo
dictionaryInstance.isEmpty
```

## Example

```swift
var bakery = [String:Int]()

// Check if dictionary is empty
print(bakery.isEmpty)  // Prints: true

bakery["Cupcakes"] = 12

// Check if dictionary is empty
print(bakery.isEmpty)  // Prints: false
```
