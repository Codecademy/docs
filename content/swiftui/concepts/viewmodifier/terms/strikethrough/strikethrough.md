---
Title: '.strikethrough()'
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

The **`.strikethrough`** view modifier method in SwiftUI can be used to strike through text within a view.

> **Note**: This method is specifically for use with text, so it can be applied as a view modifier to any view that displays text, such as a Text or Label View. However, it cannot be applied to views that do not display text, such as an Image View.

## Syntax

```psuedo
Text("This text will have a red line through it's center.")
    .strikethrough(color: .red)
```

## Example

```swift
var body: some View {
    Text("Here is a TextView with the .strikethrough() method applied to it using custom parameters.")
        .strikethrough(true, color: .blue)
}
```

This will display:

![SwiftUI ViewModifier Strikethrough](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-viewmodifier-strikethrough.png)
