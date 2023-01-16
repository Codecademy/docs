---
Title: '.frame()'
Description: 'Applies an invisible frame around the View with the specified size parameters.'
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

The **`.frame()`** modifier method applies an invisible frame around the [`View`](https://www.codecademy.com/resources/docs/swiftui/views) with the specified size parameters.

## Syntax

The **`.frame()`** modifier method can create a fixed or flexible frame for the view. A fixed frame has a fixed size with the specified width and height. In contrast, a flexible frame can shrink and grow the view depending on the surroundings and content of the view. In both cases, some parameters are optional and can be left out entirely or passed `nil` as a value.

### Defining a fixed frame

```pseudo
Text("Some text is here.")
    .frame(width: x, height: y, alignment: .position)
```

The `.frame()` modifier method has the following optional parameters:

- `x` entered as an integer to define the width of the view in `pt` (points). SwiftUI assigns the view's width to the frame if `x` is given `nil` as a value.

- `y` entered as an integer to define the view's height in `pt` (points). SwiftUI assigns the view's height to the frame if `y` is given `nil` as a value.

- `.position` aligns the view within the frame. If the view size and the frame size are the same, there is no effect on the alignment of the view. Otherwise, the following options are available:

  - `.topLeading`: Positions the view to the top left corner of the frame.
  - `.top`: Positions the view to the top middle of the frame.
  - `.topTrailing`: Positions the view to the top right corner of the frame.
  - `.leadingFirstTextBaseline`: Positions the view to the top-most text baseline and left side of the frame.
  - `.centerFirstTextBaseline`: Positions the view to the top-most text baseline and center of the frame.
  - `.trailingFirstTextBaseline`: Positions the view to the top-most text baseline and right side of the frame.
  - `.leading`: Positions the view to the frame's vertical middle and left side.
  - `.center`: Positions the view to the center of the frame.
  - `.trailing`: Positions the view to the frame's vertical middle and right side.
  - `.leadingLastTextBaseline`: Positions the view to the bottom-most text baseline and left side of the frame.
  - `.centerLastTextBaseline`: Positions the view to the bottom-most text baseline and center of the frame.
  - `.trailingLastTextBaseline`: Positions the view to the bottom-most text baseline and right side of the frame.
  - `.bottomLeading`: Positions the view to the bottom left corner of the frame.
  - `.bottom`: Positions the view to the bottom center of the frame.
  - `.bottomTrailing`: Positions the view to the bottom right corner of the frame.

> **NOTE:** The `.frame()` modifier method can be used with one parameter specified (either `height` or `width`) or two parameters specified (`height` and `width`, or `alignment` and one sizing parameter) or with all three parameters specified.

### Defining a flexible frame

```pseudo
Text("Some text is here.")
    .frame(minWidth: x,
           idealWidth: y,
           maxWidth: z,
           minHeight: u,
           idealHeight: v,
           maxHeight: w,
           alignment: .position)
```

In this case, the `.frame()` modifier method has the following optional parameters:

- `x` entered as an integer to define the minimum width of the view in `pt` (points).
- `y` entered as an integer to define the ideal width of the view in `pt` (points).
- `z` entered as an integer to define the maximum width of the view in `pt` (points).
- `u` entered as an integer to define the minimum height of the view in `pt` (points).
- `v` entered as an integer to define the ideal height of the view in `pt` (points).
- `w` entered as an integer to define the maximum height of the view in `pt` (points).
- `.position` positions the view within the frame. The same is true here, as written in the above section.

## Example

The following example creates a fix-sized frame:

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

In the above example, the `.frame()` modifier is called on the `Text` view. The specified parameters will create a `150pt` wide and `50pt` height frame with the view (the text) placed in the top right corner of the frame.

> **Note:** The `.frame()` modifier method does not apply a border around the view. Here the `.border()` modifier method is used to visualize the frame.

This will display the following::

![SwiftUI ViewModifier .frame()](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-frame.png)
