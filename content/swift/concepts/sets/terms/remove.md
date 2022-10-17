---
Title: '.remove()'
Description: 'Remove an element at a specified index.'
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
arrayName.remove(at: index)
```

## Example

```swift
var weather: Set = ["spring", "summer", "autumn", "fall", "winter"]
let toRemove = "autumn"
if let _ = weather.remove(toRemove) {
    print(weather)
}

```

In the example above, the 'autumn' element is removed. This will output:

```shell
autumn is 
["spring", "summer", "fall", "winter"]
```
