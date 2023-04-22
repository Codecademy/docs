---
Title: '.overlay()'
Description: 'Layers the specified views in front of another view.'
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

The **`.overlay()`** layers the specified [views](https://www.codecademy.com/resources/docs/swiftui/views) in front of another view.

## Syntax

```pseudo
Text("This text will have views layered over top of it.")
  .overlay(alignment) {
    // Subviews here
}
```

The `.overlay()` modifier method takes two parameters to create a [`ZStack`](https://www.codecademy.com/resources/docs/swiftui/views/zstack) to group the foreground views:

- `alignment` specifies where to position the foreground views.
- `content` is used to declare the views to add to the foreground, stacked in the order listed. The last view appears at the front of the stack.

Using the `.overlay()` modifier method without any specified parameter results in the default behavior of the modifier: the foreground views will be centered on the view.

## Example

The following example uses the `.overlay` modifier to lay a star and a [`Circle`](https://www.codecademy.com/resources/docs/swiftui/views/circle) over a `Color` view:

```swift
import SwiftUI

struct ContentView: View {
  var body: some View {
    Color.blue
      .frame(width: 200, height: 200)
        .overlay {
          Circle()
            .frame(width: 100, height: 100)
          Image(systemName: "star.fill")
            .foregroundStyle(Color.yellow)
        }
    }
}
```

This will display the following:

![SwiftUI Overlay Modifier Example](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-viewmodifier-overlay.png)
