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

The **`.padding()`** modifier method applies padding to the [view](https://www.codecademy.com/resources/docs/swiftui/views).

## Syntax

```pseudo
Text("This text has padding around it.")
    .padding(edges, amount)
```

The `.padding()` modifier method uses the following optional parameters:

- The `edges` is a [set](https://www.codecademy.com/resources/docs/swift/sets) that specifies which side(s) the padding should be applied to. The following options are possible:
  - `.all` (default option): Applies padding to all edges of the view
  - `.top`: Applies padding to the top edge of the view
  - `.bottom`: Applies padding to the bottom edge of the view
  - `.trailing`: Applies padding to the right edge of the view
  - `.leading`: Applies padding to the left edge of the view
  - `.vertical`: Applies padding to both the left and right edges of the view
  - `.horizontal`: Applies padding to both the top and bottom edges of the view
- The `amount` of padding is given in points (as an integer). If this is given a `nil` value, SwiftUI assigns a default amount based on the device being used.

> **Note:** The `.padding()` modifier method can be used without any specified attributes, or with one or with two attributes specified.

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
