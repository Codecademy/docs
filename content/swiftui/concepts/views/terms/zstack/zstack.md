---
Title: 'ZStack'
Description: 'The ZStack view is a layout container where elements, or subviews, are arranged as overlaying one another (back-to-front)'
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
    Rectangle()
      .fill(.black)
      .frame(width: 100, height: 100)
    Rectangle()
      .fill(.pink)
      .frame(width: 100, height: 100)
      .offset(x: 25, y: 25)
  }
}
```

In the snippet above, two `Rectangle` subviews are stacked on top of one-another. Order matters here; the bottom-most subview will appear on top. For visual clarity, the top-most rectangle view's x- and y-coordinates were offset by `25`. This will display:

![ZStack](https://raw.githubusercontent.com/Codecademy/docs/main/media/zstack.png)
