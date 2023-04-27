---
Title: '.tracking()'
Description: 'Adjusts the spacing of the characters in a Text view.'
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

The **`.tracking()`** modifier method adjusts the spacing of the characters in a [`Text`](https://www.codecademy.com/resources/docs/swiftui/views/text) view.

## Syntax

```pseudo
Text("Some text")
    .tracking(x)
```

The `.tracking()` modifier method takes one parameter, `x`, entered as an integer to define the space to be added to or deducted from each character's default spacing in `pt` (points). The value of `x` can create the following trackings:

- `0` or not specifying a value results in the system's default spacing of each character,
- A positive value applies additional spacing,
- A negative value decreases spacing.

> **Note:** `.tracking()` is not the same as `.kerning()`. Although both the `.tracking()` and `.kerning()` modifier methods adjust the spacing of the characters, they behave differently. `.tracking()` will pull apart the ligatures and does not leave trailing whitespace, while `.kerning()` will maintain ligatures and leaves some trailing whitespace.

## Example

In the example below, the `.tracking()` modifier method is called on three `Text` views with decreased, default, and increased tracking values.

```swift
var body: some View {
    Text("Tracking.")
        .tracking(-5)
    Text("Tracking.")
        .tracking()
    Text("Tracking.")
        .tracking(5)
    }
```

This will display the following:

![SwiftUI ViewModifier Tracking](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-viewmodifier-tracking.png)
