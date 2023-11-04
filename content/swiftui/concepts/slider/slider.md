---
Title: 'Slider'
Description: 'A structure that creates an interface with a sliding controller, enabling users to choose from a range of values.'
Subjects:
  - 'Mobile Development'
  - 'iOS'
Tags:
  - 'SwiftUI'
  - 'UI'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**`Slider`** is a [structure](https://www.codecademy.com/resources/docs/swift/structures) that creates an interface with a sliding controller, enabling users to choose from a range of values.

A `Slider` instance can be customized so that the value changes by a specific step amount within its range. It's also possible to add minimum and maximum labels and track when the slider is being edited.

## Syntax

To create a `Slider` instance, pass a bound variable to the required parameter, `value`. This means that the bound variable will update when the slider is changed. The syntax is as follows:

```pseudo
Slider(value: bound variable)
```

> **Note**: Bound variables are prefixed with `$` in SwiftUI.

### Optional Parameters

The syntax below includes the optional parameters available for a `Slider` instance:

```pseudo
Slider(
  value: bound variable,
  in: range,
  step: step amount,
  onEditingChanged: { _ in
    // Code to execute when the slider starts or stops being edited.
  },
  minimumValueLabel: minimum value label,
  maximumValueLabel: maximum value label,
  label: { slider label }
)
```

The optional parameters include:

- `in` specifies the range of values and defaults to `0...1` if omitted.
- `step` specifies a step amount for the value to increment by.
- `onEditingChanged` takes a callback [closure](https://www.codecademy.com/resources/docs/swift/closures) that sets its boolean parameter to `true` if the slider is being edited, or to `false` if not.
- `minimumValueLabel` is a [view](https://www.codecademy.com/resources/docs/swiftui/views) that displays the minimum value.
- `maximumValueLabel` is a view that displays the maximum value.
- `label` is a view or [label](https://www.codecademy.com/resources/docs/swiftui/views/label) describing the slider and although not shown by all slider styles, is used for [accessibility](https://www.codecademy.com/resources/docs/swiftui/accessibility).

## Example

The following example code will display a gray [circle](https://www.codecademy.com/resources/docs/swiftui/views/circle) that can be overlayed with a mint-colored circle using the slider above it:

```swift
import SwiftUI

struct SliderView: View {
  @State private var circleWidth: Double = 0
  @State private var isEditing = false

  var body: some View {
    VStack {
      Slider(
        value: $circleWidth,
        in: 0...300,
        step: 10,
        onEditingChanged: { editing in
            isEditing = editing
        },
        minimumValueLabel: Text("0"),
        maximumValueLabel: Text("300"),
        label: { Text("Circle Width") }
      )
      .tint(.mint)
      ZStack {
        Circle()
          .fill(.gray.opacity(0.2))
          .frame(width: 300)
        Circle()
          .fill(isEditing ? .purple : .mint)
          .frame(width: circleWidth)
        }
      Text("\(integer_t(circleWidth))").bold()
    }
    .padding()
  }
}
```

A `circleWidth` variable is declared and bound to a `Slider` instance inside a [`VStack`](https://www.codecademy.com/resources/docs/swiftui/views/vstack). The slider has a range between `0` and `300`, and a step increment of `10`. The `onEditingChanged` callback updates the boolean `isEditing` variable to `true` when the slider is in use and to `false` when not in use.

The slider line color is specified by applying the `.tint(.mint)` [view modifier](https://www.codecademy.com/resources/docs/swiftui/viewmodifier).

Below the `Slider` is a [`ZStack`](https://www.codecademy.com/resources/docs/swiftui/views/zstack) containing a 300-point wide `Circle` filled with a slightly opaque gray [color](https://www.codecademy.com/resources/docs/swiftui/colors).

Layered above the gray `Circle` is another `Circle` that has its width determined by `circleWidth`, it is purple while the user is editing the slider, and mint otherwise.

Below the `ZStack` is a [text view](https://www.codecademy.com/resources/docs/swiftui/views/text) that shows the value of `circleWidth` in real-time as the slider value changes.

This code will display:

![SwiftUI Slider](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-slider.gif)
