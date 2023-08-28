---
Title: '.italic()'
Description: 'Indicates that the font inside a view should have an italic style applied to it.'
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

The **`.italic()`** view modifier method in SwiftUI can be used to make text within a view appear in italic style.

## Syntax

```pseudo
Text("This text will be italic")
    .italic()
```

## Example

```swift
var body: some View {
    Text("I hope this appears as italic.")
        .italic()
}
```

This will display:

![SwiftUI ViewModifier Italic](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-viewmodifier-italic.png)
