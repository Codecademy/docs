---
Title: '.underline()'
Description: 'Applies an underline style to text characters in a view.'
Subjects:
  - 'Mobile Development'
  - 'iOS'
Tags:
  - 'SwiftUI'
  - 'SwiftUI ViewModifiers'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.underline()`** view modifier in SwiftUI applies an underline style to text characters in a View.

## Syntax

```pseudo
Text("This text will be underlined")
    .underline()
```

The `.underline()` modifier is applied to all characters within the `Text` (which conforms to the `View` protocol).

## Example

The following example creates some underlined text:

```swift
var body: some View {
    Text("Underlined text")
        .underline()
    }
```

In the above example, the `.underline()` modifier is called on the `Text` view. This applies an underlined style to all characters within the `Text`.

This will display the following:

![SwiftUI ViewModifier Underline](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-viewmodifier-underline.png)
