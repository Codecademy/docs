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

The **`.padding()`** modifier method applies padding to the view.

## Syntax

```psuedo
Text("This text has padding around it.")
    .padding(edge, number)
```

The `.padding()` modifier method has the following attributes:

- `edge` to specify the edge on which the padding should be applied. If no edge is specified, the padding will be applied on all edges of the view. To specify the edges, the following formats are possible:
  - one edge at a time, e.g., `.top` will add padding only to the view's top edge,
  - multiple edges, e.g.: `[.bottom, trailing]` will add padding to the bottom and right edge of the view, or
  - a collection of edges, e.g., `.vertical`, will add padding to the left and right edges of the view.

- `number` to specify the amount of padding in points. If no `number` is given, the default padding will be applied equally to the edges of the view. To specify the padding, a number must be entered without any units; e.g., `20` will apply 20 points of padding to the view.

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
