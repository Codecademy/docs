---
Title: 'LazyHStack'
Description: 'The **LazyHStack** view is a layout container where elements are arranged in a horizontal line (left-to-right) and are created when needed.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'Stacks'
  - 'SwiftUI'
  - 'SwiftUI Views'
  - 'Views'
---

The **LazyHStack** view is a layout container where elements are arranged in a horizontal line (left-to-right) and are created when needed.

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

This will display the following:

![HStack](https://raw.githubusercontent.com/Codecademy/docs/main/media/lazyHStack-gif.gif)
