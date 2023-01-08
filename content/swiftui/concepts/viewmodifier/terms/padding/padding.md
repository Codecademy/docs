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

The `.padding()` modifier method can take one or two parameters:

- `edge` to specify the edge on which the padding should be applied. One or multiple edges or a collection of edges can be specified. For example, `.top` will add padding only to the view's top edge, `[.bottom, trailing]` will add padding to the bottom and right edge of the view, and `.vertical`  will add padding to the left and right edge of the view. If no edge is specified, the padding will be applied on all edges of the view.

- `number` to specify the amount of padding in points. For example, `20` will apply 20 points of padding to the view. The default padding will be applied to the view if no `number` is given.

> **Note:** The `.padding()` modifier method can be used without any specified parameters, with one or two parameters.

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
