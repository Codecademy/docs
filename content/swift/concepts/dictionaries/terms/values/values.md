---
Title: '.values'

Description: '.value is used to loop through a collection of values within a dictionary.'
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

The **`.Values`** method is used to loop through a stored collection of values within a key-value dictionary. 

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

```shell
// prints : [2010, 2022, 2018, 2014] 
```

> **Note:** The print-out of the values will be in a random order. 

