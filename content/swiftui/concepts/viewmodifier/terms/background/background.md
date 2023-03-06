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
        _ content: View,
        alignment: Alignment = .center,
        blendMode: BlendMode? = nil,
        ignoresSafeAreaEdges: Edge.Set = .init()
    )
```

This method has one required parameter:

- `content`: The view to use as the background.

And a few optional parameters:

- `alignment`: The alignment of the background within the view.
  > **Note**: The `alignment` parameter's default value is `center`, but other options include `.top`, `.bottom`, `.leading`, `.topTrailing`, `.bottomLeading`, and `.bottomTrailing`.
- `blendMode`: The blend mode to use when rendering the background.
- `ignoresSafeAreaEdges`: Whether the background should ignore safe area edges.

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

In the above example, we have a `Text` view displaying the string `"I have an Indigo background!"`. The `.padding()` modifier adds space around the text, while `.foregroundColor()` sets the text color to white.

The `.background()` modifier is then applied with the `Color.indigo` value passed in as the content parameter, to give the view an indigo background.

Finally, a corner radius of 12 points is applied to the view using the `.cornerRadius()` modifier. This creates a view with an indigo background, white text, and rounded corners.

This will display:

![SwiftUI ViewModifier Background](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-viewmodifier-background.png)

> **Note**: Keep in mind that the `.background()` modifier can only be applied to a single view. If a background is required for a group of views, it is recommended to use a container view, such as `ZStack`. Additionaly, the `.opacity()` modifier can be used along with `.background()` to adjust the transparency of the background.
