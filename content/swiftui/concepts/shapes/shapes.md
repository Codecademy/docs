---
Title: "Shape"
Description: "Methods for implementing built-in and custom shapes in a SwiftUI view."
Subjects:
  - "Mobile Development"
  - "iOS"
Tags:
  - "SwiftUI"
  - "SwiftUI Shapes"
CatalogContent:
  - "learn-swift"
  - "paths/build-ios-apps-with-swiftui"
---

The **`Shape`** protocol is used to create and implement built-in, and custom shapes.

## Syntax

```swift
struct someShape: Shape {
    func path(in rect: CGRect) -> Path {
    // Define the shape using path operations
    }
}
```

## Examples

### Instantiating a Shape

- The protocol comes with some shapes included such as capsule, circle, rectangle, and rounded rectangle.

```swift
var body: some View {
    VStack {
        Capsule()
        Circle()
        Ellipse()
        Rectangle()
        RoundedRectangle()
    }
}
```

### Creating a Custom Shape

- Shapes that are not included can be made using path operations, and should conform to the `Shape` protocol.

```swift
import SwiftUI

struct Parallelogram: Shape {
    func path(in rect: CGRect) -> Path {
        Path { path in
            let horizontalOffset: CGFloat = rect.width * 0.2
            path.move(to: CGPoint(x: rect.minX, y: rect.minY))
            path.addLine(to: CGPoint(x: rect.maxX, y: rect.minY))
            path.addLine(to: CGPoint(x: rect.maxX - horizontalOffset, y: rect.maxY))
            path.addLine(to: CGPoint(x: rect.minX, y: rect.maxY))
            path.addLine(to: CGPoint(x: rect.minX + horizontalOffset, y: rect.minY))
        }
    }
}
```
- This function returns a `Path` that describes the shape contained inside a rectangular frame of reference.
- To display the custom shape, it can be called in a view just like a built-in shape.
```swift
struct ContentView: View {
    Parallelogram()
        .foregroundColor(.blue)
        .frame(width: 300, height: 100)
}
```
- By conforming to the `Shape` protocol, a custom shape inherits all the capabilities of a built-in shape.

