---
Title: 'LazyVStack'
Description: 'A view that arranges its children in a line that grows vertically, creating items only as needed.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Views'
  - 'Views'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`LazyVStack`** has all the properties as a standard `VStack` but it will not create items until it needs to render them on screen. This comes very handy when creating long lists and can allow an app to run smoother and faster.

## Syntax

```pseudo
var body: some View {
    LazyVStack {
        Subviews here
    }
}
```

## Example

In the example below, a `ScrollView` contains a `LazyVStack` that consists of a vertical row of text views:

```swift
var body: some View {
    ScrollView(.vertical) {
        LazyVStack(alignment: .center) {
            ForEach(1...100, id: \.self) {
                Text("Row \($0)")
            }
        }
    }
}
```

- `ScrollView()` displays the content within the scrollable region and adjusts what portion of the content is visible. Here, the axis is set to `.vertical`, which allows for vertical scrolling.
- `ForEach` is a method that takes two parameters, a `ClosedRange<Int>` and an `id` so SwiftUI can identify each of the items uniquely in order to update the values when changed. In this case, 100 `Text` subviews are created.
- `$0` is a short hand syntax used to reference the first argument in a closure.

This will display the following:

![LazyVStack](https://raw.githubusercontent.com/Codecademy/docs/main/media/lazyVStack-gif.gif)
