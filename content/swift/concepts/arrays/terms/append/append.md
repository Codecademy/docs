---
Title: '.append()'
Description: 'Adds an element to the end of an array.'
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

The **`.append()`** method will add an element to the end of an array. It allows for single and multiple element additions.

## Syntax

```pseudo
arrayName.append(element)

arrayName.append(contentsOf: [element1, element2, ...])
```

The method is called on an array instance, and one or more elements can be added by using the `contentsOf:` parameter.

## Example

```swift
var topBabyNames = ["Sophia", "Liam"]

topBabyNames.append("Riley")
print(topBabyNames)

topBabyNames.append(contentsOf: ["Olivia", "Noah"])
print(topBabyNames)
```

This will output:

```shell
["Sophia", "Liam", "Riley"]
["Sophia", "Liam", "Riley", "Olivia", "Noah"]
```

> **Note:** [Big-O](https://www.codecademy.com/resources/docs/general/big-o-notation) of this method is **O(1)**.
