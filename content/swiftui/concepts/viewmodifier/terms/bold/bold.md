---
Title: '.bold()'
Description: 'Applies a bold style to text characters in a View.'
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

The **`.bold()`** modifier applies a bold style to text characters in a [`View`](https://www.codecademy.com/resources/docs/swiftui/views).

## Syntax

`.bold()` is called underneath a `View` using dot notation and is applied to all text inside that `View`.

```pseudo
struct MyView: View {
    var body: some View {
        Text("I will be bold text!")
            .bold()
    }
}
```

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

In the above example, the `.bold()` modifier is called on the `Text` view. This applies a bold style to all text within the `Text` view.

This will display:

![SwiftUI ViewModifier .bold()](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-bold.png)
