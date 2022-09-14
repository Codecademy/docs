---
Title: 'ZStack'
Description: 'The ZStack view creates zed stacked elements, where elements lay in a back-to-front layout.'
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

The **`ZStack`** view is a layout container where elements, or subviews, are arranged as overlaying one another (back-to-front).

## Syntax

This view rests within the body of some `View`.

```pseudo
var body: some View {
  ZStack {
    Subviews here
  }
}
```

## Example

```swift
var body: some View {
  ZStack {
    Text("Subview 1")
    Text("Subview 2")
  }
}
```

This will display:

![ZStack](https://raw.githubusercontent.com/Codecademy/docs/main/media/zstack.png)
