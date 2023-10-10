---
Title: 'Shape'
Description: 'The Shape protocol is used for implementing built-in and custom shapes in a SwiftUI view.'
Subjects:
  - 'Mobile Development'
  - 'iOS'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Shapes'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`Shape`** `protocol` is used to create and implement built-in, and custom shapes.

It inherits from the protocols: `Sendable`, `Animatable`, and [`View`](https://www.codecademy.com/resources/docs/swiftui/views).

## Instantiating a Shape

Some shapes conform to the `Shape` protocol like [circles](https://www.codecademy.com/resources/docs/swiftui/views/circle) and [rectangles](https://www.codecademy.com/resources/docs/swiftui/views/rectangle). To instantiate each of these built-in types, refer to `Self`:

```swift
Circle()
Rectangle()
```

Some other shapes include:

- [Capsule](https://www.codecademy.com/resources/docs/swiftui/views/capsule)
- [Ellipse](https://www.codecademy.com/resources/docs/swiftui/views/ellipse)
- [RoundedRectangle](https://www.codecademy.com/resources/docs/swiftui/views/roundedrectangle)

## Creating Custom Shapes

Shapes that are not built-in can be defined using path operations and should conform to the `Shape` protocol.

```swift
struct someShape: Shape {
    func path(in rect: CGRect) -> Path {
      // Define the shape using path operations
    }
}
```

The function should return a `Path` object that describes the shape contained inside a rectangular frame of reference.

## Example: Custom Triangle Shape

To build a triangle shape, a custom one can be made using path operations.

```swift
import SwiftUI

struct Triangle: Shape {
    func path(in rect: CGRect) -> Path {
        Path { path in
            path.move(to: CGPoint(x: rect.midX, y: rect.minY))
            path.addLine(to: CGPoint(x: rect.maxX, y: rect.maxY))
            path.addLine(to: CGPoint(x: rect.minX, y: rect.maxY))
            path.addLine(to: CGPoint(x: rect.midX, y: rect.minY))
        }
    }
}
```

By conforming to the `Shape` protocol, a custom shape inherits all the capabilities of a built-in shape.

### Displaying the Custom Shape

To display the custom shape, it can be called in a layout view just like any built-in shape:

```swift
var body: some View {
    ZStack {
        // Sets the color of the background
        Color.blue.ignoresSafeArea()

        Triangle()
            .foregroundColor(.yellow)
            .frame(width: 180, height: 180)
    }
}
```

This code results in the following output:

![SwiftUI Shape Yellow Triangle on a Blue Background](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-shapes-triangle.jpeg)
