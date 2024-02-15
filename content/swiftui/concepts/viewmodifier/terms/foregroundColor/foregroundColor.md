---
Title: '.foregroundColor()'
Description: 'Sets the foreground color that is displayed in a view.'
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

The **`.foregroundColor()`** modifier sets the foreground color displayed in a [view](https://www.codecademy.com/resources/docs/swiftui/views).

## Syntax

```pseudo
Text("We are setting the foreground color to green!")
    .foregroundColor(color)
```

The `.foregroundColor()` applies the `color` to the `Text` which conforms to the `View` protocol.

## Example

```swift
struct ContentView: View {
    var body: some View {
        Text("We are setting the foreground color to green!")
            .foregroundColor(.green)
    }
}
```

In the above example, the `.foregroundColor()` modifier with the `.green` parameter is called on the `Text` view. This applies the color green to all characters.

This will display the following:

![SwiftUI ViewModifier .foregroundColor()](https://raw.githubusercontent.com/Codecademy/docs/main/media/SwiftUI-foregroundColor-display.png)
