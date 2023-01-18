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

The **`.fontWeight()`** modifier sets the font weight. We can apply the following weights:
+ ultraLight
+ thin
+ light
+ regular
+ medium
+ semibold
+ bold
+ heavy
+ black

## Syntax

```pseudo
Text("your ultraLight text")
    .fontWeight(.ultraLight)
```

## Example

In the following example we use regular and bold weights to set font weight.

```swift
import SwiftUI

struct SomeView: View {
    var body: some View {
      VStack {
        Text("new font Weight")
            .fontWeight(.regular)
         Text("new font Weight")
            .fontWeight(.bold)
        }
    }
}
```

This will display:

![SwiftUI ViewModifier .fontWeight()](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-fontWeight-example.png)
