---
Title: '.tint()'
Description: 'Sets the tint color displayed in a view.'
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

The **`.tint()`** modifier sets the tint color displayed in a [view](https://www.codecademy.com/resources/docs/swiftui/views).

## Syntax

```pseudo
Button("This is a button")
  .tint(color)
```

The `.tint()` applies the `color` to the `Button` which conforms it to the `View` protocol.

## Example

```swift
struct ContentView: View {
  var body: some View {
      Button("This is a button")
          .tint(.blue)
  }
}
```

In the above example, the `.tint()` modifier with the `.blue` parameter is called on the `Button` view. This applies the blue tint color to the button.

This will display the following:

![SwiftUI Button with blue tint color](https://raw.githubusercontent.com/Codecademy/docs/main/media/SwiftUI-tint-display.png)

> **Note**: When a tint is applied to a view hierarchy, it only affects the text inside controls, like buttons and links, not plain Text views.
