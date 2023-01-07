---
Title: 'ScrollView'
Description: 'Scrollable view within the scrollable content region.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Views'
  - 'Views'
  - 'Xcode'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`ScrollView`** displays content within the scrollable content region. Based on platform appropriate scroll gestures, or how the code works, the view can scroll vertically, horizontally, or both.

## Syntax

```pseudo
var body: some View {
    ScrollView(.horizontal) {
        Subviews here
    }
}
```

The `ScrollView` view rests within the body of a `View`. It can accept two parameters:

- `.vertical` which is usually the standard if not specified.
- `.horizontal` which makes the view scroll horizontally.

## Example 1

In the first example below, the `ScrollView` scrolls vertically and contains a `LazyHStack` that consists of rows stacked on top of each other in the view:

```swift
var body: some View {
    ScrollView(.vertical) {
        LazyVStack {
            ForEach(0 ... 10, id: \.self) {
                Text("Row \($0)")
            }
        }
    }
```

This will display the following:

![Vertical ScrollView](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-scrollview-vertical.gif)

## Example 2

In this example, the `ScrollView` scrolls horizontally and contains a `LazyHStack` that consists of columns stacked next to each other in the view:

```swift
var body: some View {
    ScrollView(.horizontal) {
        LazyHStack {
            ForEach(0 ... 10, id: \.self) {
                Text("Row \($0)")
            }
        }
    }
```

`ScrollView()` displays the content within the scrollable region and adjusts what portion of the content is visible. Here, the axis is set to `.horizontal`, which allows for horizontal scrolling. `ScrollView()` natively will scroll vertically and the paramenter inside the brackets can be omitted.

This will display the following:

![Horizontal ScrollView](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-scrollview-horizontal.gif)
