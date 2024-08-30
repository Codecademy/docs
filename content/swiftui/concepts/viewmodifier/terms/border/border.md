---
Title: '.border()'
Description: 'Applies a border to a view, which can be customized with a specified style and width.'
Subjects:
  - 'Mobile Development'
  - 'iOS'
Tags:
  - 'SwiftUI'
  - 'SwiftUI ViewModifiers'
  - 'Xcode'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.border()`** view modifier in SwiftUI can be used to add a border to a view. The border can be customized with a specified style and width.

## Syntax

```pseudo
View
    .border(content, width: CGFloat)
```

This view modifier can be applied to any type of `View`, including [`Text`](https://www.codecademy.com/resources/docs/swiftui/views/text), [`Image`](https://www.codecademy.com/resources/docs/swiftui/views/image), and any type of layout such as [`VStack`](https://www.codecademy.com/resources/docs/swiftui/views/vstack), [`HStack`](https://www.codecademy.com/resources/docs/swiftui/views/hstack), and [`ZStack`](https://www.codecademy.com/resources/docs/swiftui/views/zstack).

It can accept the following parameters:

- `content`: A required value that sets the color and style of the border which needs to conform to the `ShapeStyle` protocol, like a [`Color`](https://www.codecademy.com/resources/docs/swiftui/views/color) or `HierarchicalShapeStyle`.
- `width`: This optional value determines the width of the border and defaults to 1.

> **Note**: The `.border()` modifier had a `cornerRadius` parameter which has since been deprecated. If rounding the corners of the border is needed, the [`.overlay()`](https://www.codecademy.com/resources/docs/swiftui/viewmodifier/overlay) modifier and a [`RoundedRectangle()`](https://www.codecademy.com/resources/docs/swiftui/views/roundedrectangle) with a `cornerRadius` value can be used instead.

## Example

```swift
var body: some View {
    Text("This view has a blue border.")
        .padding()
        .border(.blue, width: 4)
}
```

In the above example, a text view displays the text `"This view has a blue border."` with some padding. The `.border()` modifier is then applied to the view, which adds a border around it.

In the example, a blue border is specified with a width of 4 points. However, these values can be customized as needed to achieve the desired look for an app.

This will display:

![SwiftUI ViewModifier Border](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-viewmodifier-border.png)
