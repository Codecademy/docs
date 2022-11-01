---
Title: 'LazyHStack'
Description: 'The LazyHStack view is a layout container where elements are arranged in a horizontal line (left-to-right) and are created when needed.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'Stacks'
  - 'SwiftUI'
  - 'SwiftUI Views'
  - 'Views'
---

The **`LazyHStack`** view is a layout container where elements are arranged in a horizontal line (left-to-right) and are created when needed. This comes very handy when creating long lists and your app can run smoother and faster.


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

In this example a `ScrollView` contains a `LazyHStack` that consists of columns stacked next to each other in the view. The `LazyHStack` will create the columns only when they are needed.

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

`ScrollView(.vertical)`displays the content within the scrollable region and adjusts what portion of the content is visible. It can scroll vertically  with `(.vertical)`, horizontally with `(.horizontal)` or both ways.
`ForEach` is a method that takes two parameters, a `ClosedRange<Int>` and a ID so SwiftUI can identify each of your items uniquely in order to update the values when changed. In this case creates 100 subviews with the text "Column `\($0)`".
`\($0)` is a short hand syntax used to reference the "first argument" in a closure.

This will display the following:

![HStack](https://raw.githubusercontent.com/Codecademy/docs/main/media/lazyHStack-gif.gif)
