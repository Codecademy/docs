---
Title: 'Ellipse'
Description: 'Built-in ellipse shape that can be modified as needed.'
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

The **`Ellipse`** is one of SwiftUI pre-built shapes like [rectangles](https://www.codecademy.com/resources/docs/swiftui/views/rectangle), [circles](https://www.codecademy.com/resources/docs/swiftui/views/circle), and capsules which can be modified as wanted.

## Syntax

```pseudo
var body: some View {
    Ellipse()
        // Modifiers here
}
```

## Example

The following example makes a blue `Ellipse` with the dimension of `150` wide x `50` height:

```swift
var body: some View {
    Ellipse()
        .fill(.blue)
        .frame(width: 150, height: 50)
}
```

This will display the following:

![Ellipse](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-ellipse.png)
