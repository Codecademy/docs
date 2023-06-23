---
Title: '.fontWeight()'
Description: 'Sets the font weight of the text in Text view.'
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

The **`.fontWeight()`** modifier sets the font weight of the text in [Text View](https://www.codecademy.com/resources/docs/swiftui/views/text).

## Syntax

```pseudo
Text("your text")
  .fontWeight(.weight)
```

`.weight` can be one of the following values:

- `.ultraLight`
- `.thin`
- `.light`
- `.regular`
- `.medium`
- `.semibold`
- `.bold`
- `.heavy`
- `.black`

## Example

In the following example, the font weight is set using the `.regular` and `.bold` expressions.

```swift
import SwiftUI

struct SomeView: View {
  var body: some View {
    VStack {
      Text("Regular Font Weight")
        .fontWeight(.regular)
      Text("Bold Font Weight")
        .fontWeight(.bold)
    }
  }
}
```

This will display:

![SwiftUI ViewModifier .fontWeight()](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-fontWeight-example.png)
