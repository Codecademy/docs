---
Title: '.remove()'
Description: 'Removes and returns a specified element from a set.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Sets'
  - 'Methods'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.remove()`** method removes and returns a specified element from a set.

## Syntax

```pseudo
setName.remove(at: element)
```

If the `element` parameter exists in `setName`, it is removed and returned.

## Example

In the example below, The `"autumn"` element in the `weather` set is removed:

```swift
var weather: Set = ["spring", "summer", "autumn", "fall", "winter"]
let toRemove = "autumn"
if let _ = weather.remove(toRemove) {
  print(weather)
}
```

This will output the following:

```shell
["spring", "summer", "fall", "winter"]
```
