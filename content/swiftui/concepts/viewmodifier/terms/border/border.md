---
Title: '.border()'
Description: 'Applies a horizontal line through the middle of the text in a string.'
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
    .border(_ content: ShapeStyle, width: CGFloat = 1)
```

This method has one required parameter:

- `content`: A value that sets the color and style of the border which needs to conform to the `ShapeStyle` protocol, like a `Color` or `HierarchicalShapeStyle`.

And one optional parameter:

- `width`: This value determines the width of the border with a default value of 1.

## Example

```swift
var body: some View {
    Text("This view has a blue border.")
        .padding()
        .border(.blue, width: 4)
}
```

In the above example, we have a Text view that displays the text `"This view has a blue border."` with some padding. We've then applied the `.border()` modifier to the Text view, which adds a border around the view.

In our example, we've specified a blue border with a width of 4 points. However, you can customize these values as needed to achieve the desired look for your app.

This will display:

![SwiftUI ViewModifier Border](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-viewmodifier-border.png)

> **Note**: Keep in mind that the .border() modifier had a `cornerRadius` parameter which has since been deprecated so if you want to round the corners of your border you can use the `overlay()` modifier and having a `RoundedRectangle()` with an `cornerRadius` value instead.
