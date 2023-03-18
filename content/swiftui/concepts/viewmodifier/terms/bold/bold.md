---
Title: '.bold()'
Description: 'Applies a bold style to text characters in a View.'
Subjects:
  - 'Mobile Development'
  - 'iOS'
Tags:
  - 'SwiftUI'
  - 'SwiftUI ViewModifiers'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.bold()`** modifier method applies a bold font weight to [text](https://www.codecademy.com/resources/docs/swiftui/views/text).

## Syntax

```pseudo
Text("I will be bold text!")
    .bold()
```

The `.bold()` modifier takes no parameters and returns a `Text` view with bold text.

## Example

The following example creates bolded text:

```swift
import SwiftUI

struct BoldView: View {
    var body: some View {
        Text("I'm Bold Text!")
            .bold()
    }
}
```

In the above example, the `.bold()` modifier is applied on the `Text` view, which applies a bold style to all the text within the `Text` view.

This will display the following:

![SwiftUI ViewModifier .bold()](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-bold.png)
