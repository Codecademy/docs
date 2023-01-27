---
Title: '.textFieldStyle()'
Description: 'Applies a specified style to a TextField'
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

The **`.textFieldStyle()`** modifier applies a specified style to a [`TextField`](https://www.codecademy.com/resources/docs/swiftui/views/textfield).

## Syntax

```pseudo
        TextField("label", text: $bindingValue)
            .textFieldStyle(style)
```

The style passed as an argument to `.textFieldStyle()` is applied to the `TextField`. Built-in styles are available in Swift UI and it's also possible to create custom styles.

> **Note:** If `.textFieldStyle()` is called on a [`View`](https://www.codecademy.com/resources/docs/swiftui/views), the specified style will be applied to every `TextField` within that view, unless it has its own `.textFieldStyle()`.

## Example

The following example shows a `TextField` with a built-in style applied:

```swift
import SwiftUI

struct myView: View {

    @State private var myName: String = "Sam Swift"

    var body: some View {
        VStack {
            TextField("Name", text: $myName)
                .textFieldStyle(.roundedBorder)
        }
        .padding()
    }
}
```

In the above example, `.textFieldStyle(.roundedBorder)` is called on the `TextField`, applying a rounded border style.

This will display:

![SwiftUI ViewModifier .textFieldStyle()](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-textFieldStyle-roundedBorder.png)
