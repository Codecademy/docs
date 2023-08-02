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

## Instantiating a Shape

The protocol comes with some shapes included such as capsule, circle, ellipse, rectangle, and rounded rectangle.

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
<br>

## Creating a Custom Shape

Shapes that are not included can be made using path operations, and should conform to the `Shape` protocol.

```swift
struct someShape: Shape {
    func path(in rect: CGRect) -> Path {
    // Define the shape using path operations
    }
}
```
- The function returns a `Path` that describes the shape contained inside a rectangular frame of reference.

## Examples
Since there is no Triangle shape built-in, a custom one can be made using path operations.

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

- By conforming to the `Shape` protocol, a custom shape inherits all the capabilities of a built-in shape.

<br>

To display the custom shape, it can be called in a view just like a built-in shape.
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
- The code displays a yellow triangle with a blue background
