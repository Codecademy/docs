---
Title: 'LazyHStack'
Description: 'The LazyHStack view is a layout container where elements are created as needed and are arranged in a horizontal line (left-to-right).'
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

The **`LazyHStack`** view is a layout container where items are arranged in a horizontal line (left-to-right), like in a standard [`HStack`](https://www.codecademy.com/resources/docs/swiftui/views/hstack) view, but it will only create them when needed. This is useful for creating long lists and can allow an app to run smoother and faster.

## Syntax

```pseudo
var body: some View {
    LazyHStack {
        Subviews here
    }
}
```

The `LazyHStack` view rests within the body of a `View`.

## Example

In this example, a `ScrollView` contains a `LazyHStack` that consists of columns stacked next to each other in the view:

```swift
var body: some View {
    ScrollView(.horizontal) {
        LazyHStack {
            ForEach(1...100, id: \.self) {
                Text("Column \($0)")
            }
        }
    }
}
```

- `ScrollView()` displays the content within the scrollable region and adjusts what portion of the content is visible. Here, the axis is set to `.horizontal`, which allows for horizontal scrolling.
- `ForEach` is a method that takes two parameters, a `ClosedRange<Int>` and an `id` so SwiftUI can identify each of the items uniquely in order to update the values when changed. In this case, 100 `Text` subviews are created.
- `$0` is a short hand syntax used to reference the first argument in a closure.

This will display the following:

![HStack](https://raw.githubusercontent.com/Codecademy/docs/main/media/lazyHStack-gif.gif)
