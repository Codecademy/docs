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

- `edge` to specify the edge on which the padding should be applied. This can be one or multiple edges. For example `.top` will add padding only to the top edge of the view, while `[.bottom, trailing]` will add padding on the left and right side of the view. If no edge is specified, the padding will be applied on all edges of the view.

- `number` to specify the amount of padding in `points`. If no `number` is given, the default padding will be applied to the view.

> **Note:** The `.padding()` modifier method can be used without any parameters specified, with one parameter or with two parameters.

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

This will display:

![SwiftUI ViewModifier Padding](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-padding.png)
