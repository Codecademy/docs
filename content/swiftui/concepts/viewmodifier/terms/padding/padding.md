---
Title: '.padding()'
Description: 'Applies spacing around a view.'
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

The **`.padding()`** modifier method applies padding or spacing around a [view](https://www.codecademy.com/resources/docs/swiftui/views).

## Syntax

```pseudo
Text("This text has padding around it.")
    .padding(edges, amount)
```

The `.padding()` modifier method uses the following optional parameters:

- `edge` specifies which side(s) the padding should be applied to. The following options are possible:

  | Option                  | Applies padding to               |
  | ----------------------- | -------------------------------- |
  | `.all` (default option) | All edges of the view            |
  | `.top`                  | Top edge of the view             |
  | `.bottom`               | Bottom edge of the view          |
  | `.trailing`             | Right edge of the view           |
  | `.leading`              | Left edge of the view            |
  | `.horizontal`           | Top and bottom edges of the view |
  | `.vertical`             | Left and right edges of the view |

- The `amount` of padding is given in points as an integer. If given a `nil` value, SwiftUI assigns a default amount based on the device being used.

Using the `.padding()` modifier method without any specified parameter results in the default behavior of the modifier: the default amount of spacing applied to all the edges of the view.

## Example

```swift
var body: some View {
    Text("I have no padding.")
    Text("I have no padding.")
    Text("I have top and bottom padding!")
        .padding(.horizontal, 40)
    Text("I have no padding.")
}
```

This will display the following:

![SwiftUI ViewModifier Padding](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-padding.png)
