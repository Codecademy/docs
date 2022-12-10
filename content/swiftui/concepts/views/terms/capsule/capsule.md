---
Title: 'Capsule'
Description: 'Built-in capsule shape that can be modified as needed.'
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

A capsule shape is equivalent to a rounded rectangle where the corner radius is chosen as half the length of the rectangle’s smallest edge.

The **`Capsule`** is one of SwiftUI pre-built shapes like [rectangle](https://www.codecademy.com/resources/docs/swiftui/views/rectangle), rounded rectangle, [circle](https://www.codecademy.com/resources/docs/swiftui/views/circle), ellipse which can be modified as wanted.

## Syntax

```pseudo
var body: some View {
    Capsule()
        // Modifiers here
}
```

## Example

The following example creates a red `Capsule` with a continuous style and a dimension of `250` wide x `50` height:

```swift
var body: some View {
    Capsule(style: .continuous)
        .fill(.red)
        .frame(width: 250, height: 50)
}
```

- `(style: .continuous)` makes the shape look more natural to the eye by giving continuity to the rounded borders.
- `(style: .circular)` is another modifier that can be used, when omitting modifiers from `Capsule` this will be the native one

The code-block above will display a Capsule filled with color red and the frame makes it `250` wide and `50` height.

This will display the following:

![Capsule](https://raw.githubusercontent.com/Codecademy/docs/main/media/capsule.png)
