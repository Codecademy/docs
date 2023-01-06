---
Title: '.padding()'
Description: 'Applies the specified padding to the view.'
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

The **`.padding()`** modifier applies the specified padding to the view.

## Syntax

The `.padding()` modifier can take one or two parameters:

- a set of edges to add padding. For example `.top` will apply padding only to the top of the view. By default, the padding will be applied on all edges of the view.

- a number to specify the amount of padding in `points`. If no number is given, the default padding will be applied.

```psuedo
Text("This text has padding around it.")
    .padding(edges, number)
```

## Example

```swift
var body: some View {
    Text("I have no padding.")
    Text("I have no padding.")
    Text("I have padding.")
        .padding(20)
    Text("I have no padding.")
}
```

This will display:

![SwiftUI ViewModifier Italic](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-viewmodifier-italic.png)
