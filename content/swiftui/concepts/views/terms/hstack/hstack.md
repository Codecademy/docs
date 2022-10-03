---
Title: 'HStack'
Description: 'The HStack view is a layout container where elements, or subviews, are arranged in a horizontal line (left-to-right).'
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

The **`HStack`** view is a layout container where elements, or subviews, are arranged in a horizontal line (left-to-right).

## Syntax

```pseudo
var body: some View {
  HStack {
    Subviews here
  }
}
```

The `HStack` view rests within the body of a `View`.

## Example

```swift
var body: some View {
  HStack {
    Text("Subview 1")
    Text("Subview 2")
  }
}
```

In the example above, two `Text` subviews are nested in the `HStack`.

This will display the following:

![HStack](https://raw.githubusercontent.com/Codecademy/docs/main/media/hstack.png)
