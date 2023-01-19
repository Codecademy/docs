---
Title: '.fontWeight()'
Description: 'Sets the font weight of the text in Text view.'
Subjects:
  - 'Mobile Development'
  - 'iOS'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Modifiers'
  - 'Xcode'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.fontWeight()`** modifier sets the font weight.

## Syntax

```pseudo
Text("your text")
  .fontWeight(.weight)
```

`.weight` can take of the following values:

- .ultraLight
- .thin
- .light
- .regular
- .medium
- .semibold
- .bold
- .heavy
- .black

## Example

In the following example we use `.regular` and `.bold` expressions to set font weight.

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
