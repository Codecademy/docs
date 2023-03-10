---
Title: '.scaledToFit()'
Description: 'Scales the view to fit its parent view while maintaining the original aspect ratio.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'SwiftUI'
  - 'SwiftUI ViewModifiers'
CatalogContent:
  - 'learn-swift'
  - 'paths/computer-science'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.scaledToFit()`** modifier can be used to scale a [view](https://www.codecademy.com/resources/docs/swiftui/views) to fit its parent view while maintaining the original aspect ratio.

## Syntax

```pseudo
struct MyStructure: View {
    var body: some View {
        Image("imagename")
            .scaledToFit()
    }
}
```

## Example

In the example below, the image contains the `.scaledToFit()` modifier.

```swift
import SwiftUI

struct MyStructure: View {
    var body: some View {
        Image("imagename")
            .resizable()
            .scaledToFit()
    }
}
```

In the example above, the image that contains the `.scaledToFit()` modifier has been scaled down to fit the width of the parent. The original aspect ratio of the image has been maintained.

![SwiftUI ViewModifier scaledToFit](https://raw.githubusercontent.com/Codecademy/docs/main/media/scaled-to-fit.jpg)
