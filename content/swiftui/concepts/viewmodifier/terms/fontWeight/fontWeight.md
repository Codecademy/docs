---
Title: '.fontWeight(_:)'
Description: 'Sets the font weight of the text.'
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
                .fontWeight(.ultraLight)
            Text("new font Weight")
                .fontWeight(.thin)
            Text("new font Weight")
                .fontWeight(.light)
            Text("new font Weight")
                .fontWeight(.regular)
            Text("new font Weight")
                .fontWeight(.medium)
            Text("new font Weight")
                .fontWeight(.semibold)
            Text("new font Weight")
                .fontWeight(.bold)
            Text("new font Weight")
                .fontWeight(.heavy)
            Text("new font Weight")
                .fontWeight(.black)              
        } 
    }
}

```



This will display:

![SwiftUI ViewModifier .bold()](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-bold.png)
