---
Title: 'VStack'
Description: 'The VStack view is a layout container where elements, or subviews, are arranged in a vertical line (top-to-bottom).'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'Stacks'
  - 'SwiftUI'
  - 'SwiftUI Views'
  - 'Views'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`VStack`** view is a layout container where elements, or subviews, are arranged in a vertical line (top-to-bottom).

## Syntax

```pseudo
var body: some View {
  VStack {
    Subviews here
  }
}
```

The `VStack` view rests within the body of a `View`.

## Example

In the example below, two `Text` subviews are nested in the `VStack`:

```swift
var body: some View {
  VStack {
    Text("Subview 1")
    Text("Subview 2")
  }
}
```

This will display the following:

![VStack](https://raw.githubusercontent.com/Codecademy/docs/main/media/vstack.png)
