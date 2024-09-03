---
Title: '.values'
Description: '.value is used to loop through a collection of values within a dictionary.'
Subjects:
  - 'Mobile Development'
  - 'iOS'
  - 'Computer Science'
Tags:
  - 'Dictionary'
  - 'Properties'
  - 'Methods'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.Values`** method is used to loop through a stored collection of values within a **key-value dictionary**. 

## Syntax

```
print(dictionaryName.values)
```
- `dictionaryName` is the argument for the name of the dictionary you are wanting to pull the values from.
- `.value` is used to call the collection of values within the dictionary named within the argument,

## Examples

// The below code creates a populated dictionary, and then calls only the values of the dictionary to be printed. 

```
var worldCupWinners = [
  "Argentine": 2022,
  "France": 2018,
  "Germany": 2014,
  "Spain": 2010,
]

print(worldCupWinners.values)

// prints : [2010, 2022, 2018, 2014] 

// Note: The print-out of the values will be in a random order. 
```
