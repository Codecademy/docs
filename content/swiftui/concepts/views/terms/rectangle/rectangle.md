---
Title: 'Rectangle'
Description: 'A rectangular shape aligned inside the frame of the view containing it.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'Rectangle'
  - 'SwiftUI'
  - 'SwiftUI Views'
  - 'Views'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`Rectangle`** view is a pre-built rectangular shape that is aligned inside the frame of the `View` containing it, and can be visually modified as desired.

SwiftUI has several built-in shapes, such as a rectangle, [circle](https://www.codecademy.com/resources/docs/swiftui/views/circle), and capsule. The color and placement of each shape can be modified as needed.

## Syntax

```pseudo
var body: some View {
  Rectangle()
}
```

## Example

It can be changed to the desired shape by attaching a modifier to the `Rectangle`.

```swift
var body: some View {
  Rectangle()
  .fill(Color.green)
  .frame(width: 100, height: 100)
  .padding(20)
  .background(Color.yellow)
  .cornerRadius(10.0)
}
```

Order matters here; there is a yellow rectangle with a border width of `20` points and rounded corners of `10.0` points. Above, there's a green rectangle that's `100` points in length and `100` points in width.

This will display the following:

![ZStack](https://raw.githubusercontent.com/Codecademy/docs/main/media/rectangle.png)
