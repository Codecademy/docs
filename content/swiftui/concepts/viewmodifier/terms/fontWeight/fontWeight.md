---
Title: '.fontWeight(_:)'
Description: 'Sets the font weight of the text.'
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

The **`.fontWeight(_:)`** modifier sets the font weight. We can apply the following weights: ultraLight, thin, light, regular, medium, semibold, bold, heavy and black.

## Syntax

```pseudo
Text("your ultraLight text")
  .fontWeight(.ultraLight)
```

## Example

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

![SwiftUI ViewModifier fontWeight(_:)](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-fontWeight-example.png)
