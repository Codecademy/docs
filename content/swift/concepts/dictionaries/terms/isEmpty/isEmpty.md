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

The **`.isEmpty`** property will return a true value if there are no key-value pairs in a dictionary and false if the dictionary does contain key-value pairs.

## Syntax

```pseudo
dictionaryInstance.isEmpty
```

## Example

```swift
var bakery = [String:Int]()

print(bakery.isEmpty)

bakery["Cupcakes"] = 12

print(bakery.isEmpty)
```

In the example above, the `bakery` dictionary is checked if it `.isEmpty`; once when it is initiated, and again when a key-value pair is added. This will output:

```shell
true
false
```
