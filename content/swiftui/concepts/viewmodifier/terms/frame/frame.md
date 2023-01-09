---
Title: '.frame()'
Description: 'Positions the View within an invisible frame with the given sizes.'
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

The **`.frame()`** modifier method positions the [`View`](https://www.codecademy.com/resources/docs/swiftui/views) within an invisible frame with the specified attributes.

## Syntax

The **`.frame()`** modifier method can set a static or responsive frame for the view. The static frame will have a fixed size with the specified attributes. In contrast, the flexible frame can shrink and grow the view depending on the surroundings and content of the view.

### Defining a fix-sized frame

```pseudo
Text("Some text is here.")
    .frame(width: 100, height: 100, alignment: .topLeading)
```

The `.frame()` modifier method has the following attributes:

- `width` to define the width of the view in `pt`(points).

- `height` to specify the height of the view in `pt`(points).

- `alignment` to specify the alignment of the view within the frame. If no `alignment` is specified, the view will be centered within the frame.

### Defining a flexible-sized frame

```pseudo
Text("Some text is here.")
    .frame(minWidth: 100,
           idealWidth: 120,
           maxWidth: 200,
           minHeight: 100,
           idealHeight: 120,
           maxHeight: 200,
           alignment: .bottom)
```

In this case, the `.frame()` modifier method has the following attributes: `minWidth`, `idealWidth`, `maxWidth`, `minHeight`, `idealHeight`,  `maxHeight`, and  `alignment`.

## Example

The following example creates a fixed-sized frame:

```swift
import SwiftUI

struct BoldView: View {
    var body: some View {
        Text("Short text in a big frame.")
            .frame(width: 150, height: 50, alignment: .topTrailing)
            .border(Color.magenta, width: 4)
    }
}
```

In the above example, the `.frame()` modifier is called on the `Text` view. The specified attributes will create a frame with the width of `150pt` and the height of `50pt` and with top right alignment.

> **Note:** The `.frame()` modifier method does not apply border around the view. Here the `.border()` modifier method is used to visualize the frame.

This will display:

![SwiftUI ViewModifier .frame()](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-frame.png)
