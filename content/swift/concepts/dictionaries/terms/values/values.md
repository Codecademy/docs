---
Title: '.values'
Description: 'Returns a collection containing all the values in a dictionary.'
Subjects:
  - 'Computer Science'
  - 'iOS'
Tags:
  - 'Dictionary'
  - 'Methods'
  - 'Properties'
  - 'Values'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.values`** property in Swift is used to access a [collection](https://www.codecademy.com/resources/docs/swift/collections) of all the values stored in a key-value dictionary.

## Syntax

```pseudo
dictionaryName.values
```

- `dictionaryName`: Refers to the dictionary instance from which the values are accessed.

## Example

The code below creates a dictionary with key-value pairs and then uses the `.values` property to print only the values from the dictionary:

```swift
var worldCupWinners = [
  "Argentina": 2022,
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

> Note: The values will be printed in a random order.
