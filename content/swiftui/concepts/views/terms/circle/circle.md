---
Title: 'Circle'
Description: 'Pre-built circular shape that can be visually modified as desired.'
Subjects:
  - 'Software Development'
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Views'
  - 'Views'
CatalogContent:
  - 'learn-swiftui'
  - 'paths/build-ios-apps-with-swiftui'
---

SwiftUI includes various pre-built shapes, like rectangles, **circles**, and capsules which can be generated, coloured, and positioned as desired.

## Syntax

```pseudo
Circle()
// Modifiers
```

`Circle` is one of the pre-built shapes. A developer can add modifiers to use different properties such as fill, stroke, alignment, frame, borders, and size to adjust the circle according to their requirements.

## Example

The following example make a `Circle` that is purple:

```swift
var body: some View {
  Circle()
  .fill(.purple)
  .frame(width: 200, height: 200)
}
```

The above code generates a circle with a dimension of `200`x`200` points. This will display the following:

![Circle](https://raw.githubusercontent.com/Codecademy/docs/main/media/circle.png)
