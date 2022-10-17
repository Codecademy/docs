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

The **`rectangle`** A rectangular shape aligned inside the frame of the view containing it.

## Syntax

```pseudo
var body: some View {
  Rectangle()
}
```

SwiftUI has several built-in shapes, such as `Rectangle`, circles, and capsules, and you can create, color, and place each shape as needed.

## Example

You can change it to the desired shape by attaching a modifier to the Rectangle.

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

Order matters here; There is a yellow rectangle with a border's width of 20 and a rounded corner of 10. And there's a green rectangle that's 100 in length and 100 in width.

This will display the following:

![ZStack](https://raw.githubusercontent.com/Codecademy/docs/main/media/rectangle.png)
