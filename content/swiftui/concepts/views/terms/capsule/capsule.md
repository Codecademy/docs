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

The **`Capsule`** is one of SwiftUI pre-built shapes like rectangles, circle, ellipse which can be modified as .

## Syntax

```pseudo
var body: some View {
    Capsule()
    // modifiers
}
```

## Example

The following example makes a red `Capsule` with a continuous style and a dimension of `250` wide x `50` height:

```swift
var body: some View {
    Capsule(style: .continuous)
        .fill(.red)
        .frame(width: 250, height: 50)
}
```

- `(style: .continuous)` makes the shape look more natural to the eye by giving continuity to the rounded borders.

This will display the following:

![Capsule](https://raw.githubusercontent.com/Codecademy/docs/main/media/capsule.png)
