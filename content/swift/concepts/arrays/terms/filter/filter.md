---
Title: '.filter()'
Description: 'Returns a new array with only the elements that meet the condition stated in the filter.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'Filter'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.filter()`** method takes an array and returns a new array with only elements that meet the condition stated in the filter. If none of the elements meet the condition stated in the filter, the method returns `nil`. The original, existing array is not affected by this method.

## Syntax

```pseudo
arrayName.filter({$0 condition })
```

The `.filter()` method takes a single `condition` parameter. It is a [closure](https://www.codecademy.com/resources/docs/swift/closures) that returns a [boolean](https://www.codecademy.com/resources/docs/general/data-types/boolean) value indicating whether a given array element is a match.

In the example below, the `.filter()` method is used to search through the `names` array. All items that meet the condition of starting with `A` will be returned.

## Example

```swift
var names = ["Ariel", "Jamsin", "Cinderella", "Aurora", "Belle", "Mulan", "Tiana", "Moana"]

// Return all elements that start with an "A"
var result = names.filter( {$0.hasPrefix("A")})

print(result)
```

This will output:

```shell
["Ariel", "Aurora"]
```
