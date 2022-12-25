---
Title: 'Capsule'
Description: 'Creates a capsule shape that can be modified as needed.'
Subjects:
  - 'Software Development'
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Views'
  - 'Views'
CatalogContent:
  - 'learn-swiftui'
  - 'paths/build-ios-apps-with-swiftui'
---

A **Capsule** shape is essentially a rounded rectangle with a more pronounced corner radius which gets measured by halving the rectangle's smallest side.

The **`Capsule`** is one of SwiftUI pre-built shapes like [rectangle](https://www.codecademy.com/resources/docs/swiftui/views/rectangle), rounded rectangle, [circle](https://www.codecademy.com/resources/docs/swiftui/views/circle), and [ellipse](https://www.codecademy.com/resources/docs/swiftui/views/ellipse) which can be modified as desired.

## Syntax

```pseudo
var body: some View {
    Capsule()
        // Modifiers here
}
```

## Example

The following example creates a `Capsule`:

```swift
var body: some View {
    Capsule(style: .continuous)
        .fill(.red)
        .frame(width: 250, height: 50)
}
```

- `(style: .continuous)` makes the shape look more natural to the eye by giving continuity to the rounded borders.
- `(style: .circular)` is another styling attribute capsules have and the outcome looks sharper on the screen.

Swift will assign a circular style automatically when no style attribute is specified.

The code-block above will display a `Capsule` filled with the color red and set a frame that is `250` points wide and `50` points high.

This will display the following:

![Capsule](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-capsule.png)
