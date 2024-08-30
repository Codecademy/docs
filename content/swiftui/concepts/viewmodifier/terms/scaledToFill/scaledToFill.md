---
Title: '.scaledToFill()'
Description: 'Scales the view to fill its parent view while maintaining the original aspect ratio.'
Subjects:
  - 'Mobile Development'
  - 'iOS'
Tags:
  - 'SwiftUI'
  - 'SwiftUI ViewModifiers'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.scaledToFill()`** modifier method scales a view to fill its parent view while maintaining the original aspect ratio. It takes no parameters.

## Syntax

```pseudo
View
    .scaledToFill()
```

> **Note**: This method is the same as using `.aspectRatio()` with a `nil` aspect ratio and a content mode of `.fill`.

## Example

In the example below, the `.scaledToFill()` modifier is applied to a circle:

```swift
import SwiftUI

struct MyStruct: View {
    var body: some View {
        Circle()
            .scaledToFill()
    }
}
```

The image on the left shows the circle without the `.scaledToFill()` modifier applied. The image on the right shows the circle with the `.scaledToFill()` modifier applied.

![SwiftUI ViewModifier scaledToFill](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-viewmodifier-scaledToFill.png)
