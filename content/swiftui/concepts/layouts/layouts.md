---
Title: 'Layouts'
Description: 'Layout is a protocol in SwiftUI used to create layouts for user interfaces. Layouts specify how to arrange the views they contain.'
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

**`Layout`** is a `protocol` in SwiftUI used to create layouts for user interfaces. Layouts specify how to arrange the [views](https://www.codecademy.com/resources/docs/swiftui/views) they contain. It's possible to create custom and conditional layouts. There are also built-in layouts that can be used when creating conditional layouts.

## Custom Layouts

Custom layouts can be used when the built-in layouts and views don't meet the layout needs of an application.

### Defining Custom Layouts

When creating a custom layout, the methods `.sizeThatFits()` and `.placeSubviews()` are required to conform to the `Layout` `protocol`:

```pseudo
struct myLayout: Layout {
    func sizeThatFits(
        // Parameters: proposal, subviews, and cache
    ) -> CGSize {
        // Custom code to calculate and return the size of the layout container.
    }

    func placeSubviews(
        // Parameters: in, proposal, subviews, and cache
    ) {
        // Custom code for arranging the subviews.
    }
}
```

It's also possible to add additional behavior for alignment and spacing by adding optional methods and type properties associated with the `Layout` `protocol`.

### Using Custom Layouts

Custom layouts can be used in the same way as other view containers such as [HStack](https://www.codecademy.com/resources/docs/swiftui/views/hstack). Include views in braces after the layout name:

```pseudo
myLayout {
  // Views go here.
}
```

### Custom Layout Example

The code below is for a custom layout called `GalaxyLayout` that places its views in a spiral:

```swift
struct GalaxyLayout: Layout {
    func sizeThatFits(
        proposal: ProposedViewSize,
        subviews: Subviews,
        cache: inout Void
    ) -> CGSize {
        // Use as much space as is available.
        proposal.replacingUnspecifiedDimensions()
    }

    func placeSubviews(
        in bounds: CGRect,
        proposal: ProposedViewSize,
        subviews: Subviews,
        cache: inout Void
    ) {
        // Set the radius to fit within the available space.
        let radius = min(bounds.size.width, bounds.size.height) / 2.0

        // Calculate the angle for each view, depending on the total number of views.
        let angle = Angle.degrees(360.0 / Double(subviews.count)).radians

        // Place each view, rotating around the center of the space, with a decreasing radius to create a spiral effect.
        for (index, subview) in subviews.enumerated() {
            var place = CGPoint(x: 0, y: -radius*CGFloat(Float(index))/10)
                .applying(CGAffineTransform(
                    rotationAngle: angle * Double(index)))
            place.x += bounds.midX
            place.y += bounds.midY
            subview.place(at: place, anchor: .center, proposal: .unspecified)
        }
    }
}
```

In the above example, the `.sizeThatFits()` method specifies to use all the space available. The `.placeSubviews()` method uses some math to place each view along a spiral shape.

> **Note**: In SwiftUI, containers are limited to 10 subviews.

Below, an instance of `GalaxyLayout` is being used to create a mini galaxy using text and emoji:

```swift
var body: some View {
    GalaxyLayout {
        Text(".")
        Text(".")
        Text("*")
        Text("*")
        Text("✨")
        Text("✨")
        Text("✨")
        Text("✨")
        Text("✨")
        Text("🌟")
    }
    .foregroundColor(.white)
    .background(.black)
}
```

This will display:

![SwiftUI Custom Layout](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-custom-layout.png)

## Conditional Layouts

Conditional layouts can change dynamically. If the space available gets smaller, for example, it's possible to automatically switch to a more concise layout.

The syntax below shows how to create a conditional layout:

```pseudo
// Declare a variable that returns a specific layout.
// If some condition is true, some layout is returned, otherwise another layout is returned.
let MyLayout = myCondition ? AnyLayout(SomeLayout) : AnyLayout(AnotherLayout)

MyLayout {
    // Subviews go here.
}
```

The layouts in the conditional statement need to be wrapped with `AnyLayout()` and can be built-in or custom. Then, the following instance of `MyLayout` will display its containing views using the relevant layout.

Below are some of the built-in layouts that conditional layouts can use:

- `GridLayout()` arranges subviews in a grid.
- `HStackLayout()` arranges subviews horizontally.
- `VStackLayout()` arranges subviews vertically.
- `ZStackLayout()` overlays subviews.

### Conditional Layout Example

In the example below, the variable `layout` is set to use either a vertical `VStackLayout()` or horizontal `HStackLayout()`, depending on whether the variable `stackBricks` is `true` or `false`. A toggle switch is bound to `stackBricks` so it can be toggled on and off, with an animation to smoothen the layout transitions. Then a `ForEach` loop is used to create green rectangles within an instance of the conditional layout, `layout`:

```swift
@State private var stackBricks = false

var body: some View {
    let layout = stackBricks ? AnyLayout(VStackLayout()) : AnyLayout(HStackLayout())

    VStack {
        Toggle("Stack Bricks", isOn: $stackBricks.animation()).font(.title2)
        Spacer()
        layout {
            ForEach(0..<6) { i in
                RoundedRectangle(cornerRadius: 5)
                    .fill(.green)
                    .frame(width:50, height:50)
            }
        }
    }
    .padding()
}
```

When `stackBricks` is toggled on and off, the layout changes between horizontal and vertical, with the bricks stacking and unstacking, displaying the following:

![SwiftUI Conditional Layout](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-conditional-layout.gif)
