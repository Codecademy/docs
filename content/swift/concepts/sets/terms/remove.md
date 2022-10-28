---
Title: '.remove()'
Description: 'Removes an element at a specified index.'
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

The **`.remove()`** method removes an element at a specified index.

## Syntax

```pseudo
setName.remove(at: index)
```

## Example
In the example below, The `autumn` element in the `weather` array is removed:

```swift
var weather: Set = ["spring", "summer", "autumn", "fall", "winter"]
let toRemove = "autumn"
if let _ = weather.remove(toRemove) {
    print(weather)
}

```

This will output the following:

```shell
autumn is 
["spring", "summer", "fall", "winter"]
```
