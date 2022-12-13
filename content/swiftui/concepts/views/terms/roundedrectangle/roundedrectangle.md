---
Title: 'RoundedRectangle'
Description: 'Creates a rectangular shape with rounded corners inside the frame of the view containing it.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'Rounded Rectangle'
  - 'SwiftUI'
  - 'SwiftUI Views'
  - 'Views'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`RoundedRectangle`** view is a pre-built rectangular shape with rounded corners that is aligned inside the frame of the `View` containing it.

SwiftUI has several built-in shapes, such as a [rectangle](https://www.codecademy.com/resources/docs/swiftui/views/rectangle), [ellipse](https://www.codecademy.com/resources/docs/swiftui/views/ellipse), and capsule.

## Syntax

```pseudo
var body: some View {
    RoundedRectangle(cornerRadius: Int)
        Modifiers here
}
```

## Example

The example below displays a cyan colored rectangle, with rounded corners, with a frame of `200` points wide by `50` points high:

```swift
var body: some View {
    RoundedRectangle(cornerRadius: 15)
        .fill(.cyan)
        .frame(width: 200, height: 50)
}
```

This will display the following:

![RoundedRectangle](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-roundedrectangle.png)
