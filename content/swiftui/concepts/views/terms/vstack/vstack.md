---
Title: 'VStack'
Description: 'The VStack view is a layout container where elements, or subviews, are arranged in a vertical line (top-to-bottom).
'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Views'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`VStack`** view is a layout container where elements, or subviews, are arranged in a vertical line (top-to-bottom).

## Syntax

This view rests within the body of some `View`.

```pseudo
var body: some View {
  VStack {
    Subviews here
  }
}
```

## Example

```swift
var body: some View {
  VStack {
    Text("Subview 1")
    Text("Subview 2")
  }
}
```

This will display:

![VStack](https://raw.githubusercontent.com/Codecademy/docs/main/media/vstack.png)
