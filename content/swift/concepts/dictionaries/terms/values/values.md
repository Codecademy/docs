---
Title: '.values'
Description: 'Returns a collection containing all the values of the dictionary.'
Subjects:
  - 'Computer Science'
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Dictionary'
  - 'Methods'
  - 'Properties'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.values`** property in Swift is used to access a collection of all the values stored in a key-value dictionary.

## Syntax

```pseudo
dictionaryName.values
```

- `dictionaryName`: Refers to the dictionary instance from which the values are accessed using the `.values` property.

## Example

The code below creates a dictionary with key-value pairs and then uses the `.values` property to print only the values from the dictionary:

```swift
var worldCupWinners = [
  "Argentine": 2022,
  "France": 2018,
  "Germany": 2014,
  "Spain": 2010,
]

print(worldCupWinners.values)
```

The code above generates the following output:

```shell
[2010, 2022, 2018, 2014] 
```

> **Note:** The print-out of the values will be in a random order. 
