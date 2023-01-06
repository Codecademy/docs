---
Title: '.frame()'
Description: 'Positions the View within an invisible frame with the given sizes.'
Subjects:
  - 'Mobile Development'
  - 'iOS'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Modifiers'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.frame()`** modifier positions the [`View`](https://www.codecademy.com/resources/docs/swiftui/views) within an invisible frame with the given sizes.

## Syntax

```pseudo
struct MyView: View {
    var body: some View {
        Text("Centered text within a frame")
            .frame(width: 100, height: 100, alignment: .center)
    }
}
```

Inside `some View`, the `.frame()` modifier is applied to all text within the [`Text` view](https://www.codecademy.com/resources/docs/swiftui/views/text).

## Example

The following example creates some bold text:

```swift
import SwiftUI

struct BoldView: View {
    var body: some View {
        Text("I'm Bold Text!")
            .bold()
    }
}
```

In the above example, the `.frame()` modifier is called on the `Text` view. This applies a bold style to all text within the `Text` view.

This will display:

![SwiftUI ViewModifier .frame()](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-bold.png)
