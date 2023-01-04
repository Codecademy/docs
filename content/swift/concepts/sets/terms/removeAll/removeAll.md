---
Title: '.removeAll()' # 
Description: 'Removes every item from a Set in Swift.' # 
Subjects: # 
  - 'iOS'
  - 'Mobile Development'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'iOS'
  - 'SwiftUI'
  - 'Sets'
  - 'Xcode'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **.removeAll()** method is used to remove every value from a [Set](https://www.codecademy.com/resources/docs/swift/sets) in Swift. 

## Syntax

```
setName.removeAll(where: { condition })
```  

- `.removeAll()` will remove all values from `setName`.
- A `condition` is optional. If not declared, all values within the set will be removed. If it is declared, either `true` or `false` will be returned and if it evaluates to `true` for a specific value, that value within the set will be removed.

## Example

The following is an example of the .removeAll() method:
```swift block
var weather: Set = ["spring", "summer", "autumn", "fall", "winter"]

weather.removeAll()

print(weather)
```

This will output:
```shell block
[]
```
