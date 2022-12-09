---
Title: 'ViewModifier'
Description: 'ViewModifiers are methods that can alter views.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Modifiers'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

A **`ViewModifier`** is a protocol that can be called on a particular [view](https://www.codecademy.com/resources/docs/swiftui/views). Modifier methods adhere to the protocol and return a new, altered `View` that will replace the originally created `View`.

## Syntax

```pseudo
struct MyView: View {
    var body: some View {
        View(s) here
            Modifier methods like .bold() can be called underneath a View.
            Multiple modifiers can be chained using dot notation.
    }
}
```

## Example

The following example displays some text:

```swift
import SwiftUI

struct ContentView: View {
    var name: String = "Sam"

    var body: some View {
        Text("Hello \(name)")
            .font(.title)
            .bold()
    }
}
```

In the example above, the `.font()` and `.bold()` modifiers are called on a `Text` view. In addition, a built-in text style, `.title` property, is passed into the `.font()` modifier.

This will display:

![SwiftUI Modifier](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-viewmodifier.png)
