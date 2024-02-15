---
Title: '.insert()'
Description: 'Adds an element to a desired position of an array.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Arrays'
  - 'Methods'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.insert()`** method will add an element to a desired position of an array. When an element is added at the specified index, all later ones are pushed to the right in order to make room. This method allows for single and multiple element additions.

## Syntax

```pseudo
arrayName.insert(element, at: index)

arrayName.insert(contentsOf: [element1, element2, ...], at: index)
```

The method is called on an array instance `at` a specific `index`, and one or more elements can be added using the `contentsOf:` parameter.

## Example

```swift
var topBabyNames = ["Liam", "Olivia", "Emma", "Elijah"]

topBabyNames.insert("Noah", at: 2)
print(topBabyNames)

topBabyNames.insert(contentsOf: ["Oliver", "Charlotte"], at: 4)
print(topBabyNames)
```

This will output:

```shell
["Liam", "Olivia", "Noah", "Emma", "Elijah"]
["Liam", "Olivia", "Noah", "Emma", "Oliver", "Charlotte", "Elijah"]
```
