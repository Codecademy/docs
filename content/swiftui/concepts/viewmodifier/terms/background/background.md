---
Title: '.background()'
Description: 'Applies a background to a view, which can be customized depending on the provided parameters.'
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

The **`.background()`** view modifier in SwiftUI can be used to apply a background to a view. This can be useful when creating custom views, or when trying to achieve a specific visual effect.

## Syntax

```pseudo
View
    .background(
        Content,
        alignment: .center,
        blendMode: .overlay,
        ignoresSafeAreaEdges: .all
    )
```

This method has one required parameter:

- `Content`: The view to use as the background.

Additionally, there are a few optional parameters:

- `alignment`: The alignment of the background within the view.
  > **Note**: The `alignment` parameter's default value is `.center`, but other options include `.top`, `.bottom`, `.leading`, `.topTrailing`, `.bottomLeading`, and `.bottomTrailing`.
- `blendMode`: The blend mode to use when rendering the background.
  > **Note**: The `blendMode` parameter takes a `BlendMode` enumeration value. Some possible values are `.normal`, `.multiply`, `.screen`, `.overlay`, and `.colorDodge`, among others.
- `ignoresSafeAreaEdges`: Whether the background should ignore safe area edges.
  > **Note**: The `ignoresSafeAreaEdges` parameter takes a `Bool` value. When set to `true`, the background will ignore the safe area edges, and when set to `false`, the background will respect the safe area edges.

## Example

```swift
var body: some View {
    VStack {
        Text("I have an Indigo background!")
    }
    .padding()
    .foregroundColor(.white)
    .background(Color.indigo)
    .cornerRadius(12)
}
```

In the above example, a `Text` view is displaying the string `"I have an Indigo background!"`. The `.padding()` modifier adds space around the text, while `.foregroundColor()` sets the text color to white.

The `.background()` modifier is then applied with the `Color.indigo` value passed in as the content parameter, to give the view an indigo background.

Finally, a corner radius of `12` points is applied to the view using the `.cornerRadius()` modifier. This creates a view with an indigo background, white text, and rounded corners.

This will display:

![SwiftUI ViewModifier Background](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-viewmodifier-background.png)

> **Note**: Keep in mind that the `.background()` modifier can only be applied to a single view. If a background is required for a group of views, it is recommended to use a container view, such as [`ZStack`](https://www.codecademy.com/resources/docs/swiftui/views/zstack). Additionally, the `.opacity()` modifier can be used along with `.background()` to adjust the transparency of the background.
