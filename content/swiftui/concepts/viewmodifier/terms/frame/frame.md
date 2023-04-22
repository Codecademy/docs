---
Title: '.frame()'
Description: 'Applies an invisible frame around the view with the specified sizes.'
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

The **`.frame()`** modifier method applies an invisible frame around the [`View`](https://www.codecademy.com/resources/docs/swiftui/views) with the specified sizes.

## Syntax

The `.frame()` modifier can create a fixed- or flexible-sized frame for the view. A fixed frame has a specified width and/or height. In contrast, a flexible frame can shrink and grow the view depending on the surroundings and content of the view. In both cases, the `.frame()` modifier takes various parameters for the dimensions and alignment of the created frame. Some parameters are optional and can be left out entirely or passed `nil` as a value.

### Defining a Fixed Frame

```pseudo
Text("Some text is here.")
    .frame(width: x, height: y, alignment: .position)
```

The `.frame()` modifier method has the following optional parameters:

- `x` is entered as an integer to define the view's width in `pt` (points). SwiftUI assigns the view's width to the frame if `x` is given `nil` as a value or `width: x` is left out.
- `y` is entered as an integer to define the view's height in `pt` (points). SwiftUI assigns the view's height to the frame if `y` is given `nil` as a value or `height: y` is left out.
- `.position` aligns the view within the frame. If the view size and the frame size are the same, there is no effect on the alignment of the view. Otherwise, the following options are available:
  - `nil`: SwiftUI assigns the default alignment to the frame if `.position` is given `nil` as a value or `alignment: .position` is left out.
  - `.center` (default option): Positions the view to the center of the frame.
  - `.leading`: Positions the view to the frame's vertical middle and left side.
  - `.trailing`: Positions the view to the frame's vertical middle and right side.
  - `.topLeading`: Positions the view to the top left corner of the frame.
  - `.top`: Positions the view to the top middle of the frame.
  - `.topTrailing`: Positions the view to the top right corner of the frame.
  - `.bottomLeading`: Positions the view to the bottom left corner of the frame.
  - `.bottom`: Positions the view to the bottom middle of the frame.
  - `.bottomTrailing`: Positions the view to the bottom right corner of the frame.
  - `.leadingFirstTextBaseline`: Positions the view to the top-most text baseline and left side of the frame.
  - `.centerFirstTextBaseline`: Positions the view to the top-most text baseline and middle of the frame.
  - `.trailingFirstTextBaseline`: Positions the view to the top-most text baseline and right side of the frame.
  - `.leadingLastTextBaseline`: Positions the view to the bottom-most text baseline and left side of the frame.
  - `.centerLastTextBaseline`: Positions the view to the bottom-most text baseline and middle of the frame.
  - `.trailingLastTextBaseline`: Positions the view to the bottom-most text baseline and right side of the frame.

> **NOTE:** The `.frame()` modifier method can be used with one parameter specified (either `height` or `width`) or two parameters specified (`height` and `width`, or `alignment` and one sizing parameter) or with all three parameters specified.

### Defining a Flexible Frame

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

- `x` is entered as an integer to define the minimum width of the view in `pt` (points).
- `y` is entered as an integer to define the ideal width of the view in `pt` (points).
- `z` is entered as an integer to define the maximum width of the view in `pt` (points).
- `u` is entered as an integer to define the minimum height of the view in `pt` (points).
- `v` is entered as an integer to define the ideal height of the view in `pt` (points).
- `w` is entered as an integer to define the maximum height of the view in `pt` (points).
- `.position` positions the view within the frame. The same is true here, as written in the above section.

> **NOTE:** For a flexible frame, the `.frame()` modifier method needs at least one parameter defined and can be used with any number of parameters defined: for both width and height parameters, only the minimum value can be specified, the maximum value specified, or both minimum and maximum can be specified. The ideal width/height is considered only if both minimum and maximum widths/heights are specified.

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

In the above example, the `.frame()` modifier is called on the `Text` view. The specified parameters will create a `150pt` wide and `50pt` high frame with the view (the text) placed in the top right corner of the frame.

> **Note:** The `.frame()` modifier method does not apply a border around the view. Here the `.border()` modifier method is used to visualize the frame.

This will display the following:

![SwiftUI ViewModifier .frame()](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-frame.png)
