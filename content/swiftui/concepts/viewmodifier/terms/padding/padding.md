---
Title: '.padding()'
Description: 'Applies padding to the view.'
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

The **`.padding()`** modifier method applies padding to the [view](https://www.codecademy.com/resources/docs/swiftui/views).

## Syntax

```pseudo
Text("This text has padding around it.")
    .padding(edges, amount)
```

The `.padding()` modifier method has the following attributes:

- `edge` to specify the edge on which the padding should be applied. The following options are possible:
  - `.all` is the default option, and it applies padding to all edges of the view,
  - `.top` applies padding to the top edge of the view,
  - `.bottom` applies padding to the bottom edge of the view,
  - `.trailing` applies padding to the right edge of the view,
  - `.leading` applies padding to the left edge of the view,
  - `.vertical` applies padding to both the left and right edges of the view,
  - `.horizontal` applies padding to both the top and bottom edges of the view,
  - multiple edges can also be specified simultaneously, e.g.: `[.bottom, .trailing]` will add padding to the bottom and right edge of the view.

- `number` to specify the amount of padding in points. If no `number` is given, the default padding, which is 10, will be applied equally to the edges of the view. To specify the padding, an integer must be entered; e.g., `20` will apply 20 points of padding to the view.

> **Note:** The `.padding()` modifier method can be used without any specified attributes, or with one or with two attributes specified.

## Example

```swift
var body: some View {
    Text("I have no padding.")
    Text("I have no padding.")
    Text("I have top and bottom padding.")
        .padding(.horizontal, 40)
    Text("I have no padding.")
}
```

This will display the following:

![SwiftUI ViewModifier Padding](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-padding.png)
