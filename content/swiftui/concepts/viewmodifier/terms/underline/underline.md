---
Title: '.underline()'
Description: 'A ViewModifier that applies an underline style to text characters in a View.'
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

**.underline()** is a [`ViewModifier`](https://www.codecademy.com/resources/docs/swiftui/viewmodifier) that applies an underline style to text characters in a [`View`](https://www.codecademy.com/resources/docs/swiftui/views).
## Syntax

```psuedo
Text("This text will be underlined")
    .underline()
```

## Example

```swift
var body: some View {
    Text("Underlined text")
        .underlined()
}
```

This will display:

![SwiftUI ViewModifier Underline](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-viewmodifier-underline.png)
