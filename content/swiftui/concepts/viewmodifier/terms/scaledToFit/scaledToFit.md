---
Title: '.scaledToFit()'
Description: 'Scales the view to fit its parent view while maintaining the original aspect ratio.'
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

The **`.scaledToFit()`** modifier method scales a [view](https://www.codecademy.com/resources/docs/swiftui/views) to fit its parent view while maintaining the original aspect ratio.

## Syntax

```pseudo
Image("image-file")
    .scaledToFit()
```

The `.scaledToFit()` modifier takes no parameters and returns the view scaled with the original aspect ratio.

## Example

In the example below, the `.scaledToFit()` modifier is applied on an image:

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

This will display the following:

![SwiftUI ViewModifier scaledToFit](https://raw.githubusercontent.com/Codecademy/docs/main/media/scaled-to-fit.jpg)

The image is scaled down in the example above with the `.scaledToFit()` modifier to fit the width of the parent view. The original aspect ratio of the image is maintained.
