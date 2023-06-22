---
Title: '.filter()'
Description: 'Returns an updated array from existing array by removing elements that do not meet the condition stated in the filter. The existing array does not change.'
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

The **`.filter()`** method returns an updated array based on the existing array with all entries that meet the condition stated in the filter. If no entry meets the condition stated in the filter, the method returns `nil`. The original, existing array is not affected by this method.

## Syntax

```pseudo
arrayName.filter({$0 condition })
```

The `.filter()` method takes a single `condition` parameter. It is a [closure](https://www.codecademy.com/resources/docs/swift/closures) that returns a [boolean](https://www.codecademy.com/resources/docs/general/data-types/boolean) value indicating whether a given array element is a match.

## Example

```swift
var names = ["Ariel", "Jamsin", "Cinderella", "Aurora", "Belle", "Mulan", "Tiana", "Moana"]

//return all elements that start with an "A"
var result = names.filter( {$0.hasPrefix("A")})

print(result)
```

In the example above, the `.filter()` method is searching through the `names` array. All items that meet the condition of starting with `A` will be returned.

This will output:

```shell
["Ariel", "Aurora"]
```
