---
Title: 'Ellipse'
Description: 'Creates an ellipse shape that can be modified as needed.'
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

The **`Ellipse`** is one of SwiftUI pre-built shapes like [rectangles](https://www.codecademy.com/resources/docs/swiftui/views/rectangle) and [circles](https://www.codecademy.com/resources/docs/swiftui/views/circle).

## Syntax

```pseudo
var body: some View {
    Ellipse()
        Modifiers here
}
```

## Example

The following example makes a blue `Ellipse` with a dimension of `150` points wide by `50` points high:

```swift
var body: some View {
    Ellipse()
        .fill(.blue)
        .frame(width: 150, height: 50)
}
```

This will display the following:

![Ellipse](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-ellipse.png)
