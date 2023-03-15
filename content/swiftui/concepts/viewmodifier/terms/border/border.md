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

This method has one required parameter and one optional parameter:

- `content`: A required value that sets the color and style of the border which needs to conform to the `ShapeStyle` protocol, like a `Color` or `HierarchicalShapeStyle`.
- `width`: This optional value determines the width of the border and defaults to 1.

## Example

```swift
var body: some View {
    Text("This view has a blue border.")
        .padding()
        .border(.blue, width: 4)
}
```

In the above example, we have a Text view that displays the text `"This view has a blue border."` with some padding. The `.border()` modifier is then applied to the Text view, which adds a border around the view.

In our example, a blue border is specified with a width of 4 points. However, these values can be customized as needed to achieve the desired look for an app.

This will display:

![SwiftUI ViewModifier Border](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-viewmodifier-border.png)

> **Note**: Keep in mind that the .border() modifier had a `cornerRadius` parameter which has since been deprecated so if you want to round the corners of your border you can use the `overlay()` modifier and have a `RoundedRectangle()` with a `cornerRadius` value instead.
