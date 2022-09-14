---
Title: 'HStack'
Description: 'The HStack view creates horizontally stacked elements, where elements lay in a left-to-right layout.'
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

The **`HStack`** view is a layout container where elements, or subviews, are arranged in a horizontal line (left-to-right).

## Syntax

This view rests within the body of some `View`.

```pseudo
var body: some View {
  HStack {
    Subviews here
  }
}
```

## Example

```swift
var body: some View {
  HStack {
    Text("Subview 1")
    Text("Subview 2")
  }
}
```

This will display:

![HStack](https://raw.githubusercontent.com/Codecademy/docs/main/media/hstack.png)
