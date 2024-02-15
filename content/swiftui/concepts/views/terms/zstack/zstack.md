---
Title: 'ZStack'
Description: 'The ZStack view is a layout container where elements, or subviews, are arranged as overlaying one another (back-to-front).'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'Stacks'
  - 'SwiftUI'
  - 'SwiftUI Views'
  - 'Views'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`ZStack`** view is a layout container where elements, or subviews, are arranged as overlaying one another (back-to-front).

## Syntax

```pseudo
var body: some View {
  ZStack {
    Subviews here
  }
}
```

The `ZStack` view rests within the body of `View`.

## Example

In the snippet below, two `Rectangle` subviews are stacked on top of one-another:

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

Order matters here; the bottom-most subview will appear on top. For visual clarity, the top-most rectangle view's x- and y-coordinates were offset by `25`.

This will display the following:

![ZStack](https://raw.githubusercontent.com/Codecademy/docs/main/media/zstack.png)
