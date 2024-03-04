---
Title: 'Spacer'
Description: 'Creates space between views.'
Subjects:
  - 'Computer Science'
  - 'Developer Tools'
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Interface'
  - 'iOS'
  - 'Swift UI'
  - 'Swift UI Views'
  - 'Views'
CatalogContent:
  - 'learn-swiftui'
  - 'paths/builds-ios-apps-with-swiftui'
---

A **`Spacer`** view is an adaptive view that creates space between views. It expands in dimensions as much as the parent view will allow.

## Syntax

```pseudo
Spacer()
```

## Examples

In the example below, the `Spacer()` in the `HStack` fills the view to the left of the `Text`, effectively pushing the `Text` to the right.

```swift
var body: some View {
  HStack {
    Spacer()
    Text("Example")
  }
}
```

This will display the following:

![SwiftUI Spacer Example 1](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-spacer-left.png)

In the next example below, each `Spacer()` fills the view on both the left and right of the `Text`. This effectively pushes the `Text` into the center, with each `Spacer` expanding as much as the parent view will allow on each side.

```swift
var body: some View {
  HStack {
    Spacer()
    Text("Example")
    Spacer()
  }
}
```

This will display the following:

![SwiftUI Spacer Example 2](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-spacer-left-and-right.png)
