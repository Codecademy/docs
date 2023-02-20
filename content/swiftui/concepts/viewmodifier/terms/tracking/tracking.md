---
Title: '.tracking()'
Description: 'Modifies the spacing of characters in the Text view.'
Subjects:
  - 'Mobile Development'
  - 'iOS'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Modifiers'
  - 'Xcode'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.tracking()`** modifier method modifies the spacing of characters in the [`Text`](https://www.codecademy.com/resources/docs/swiftui/views/text) view.

## Syntax

```pseudo
Text("Some text")
    .tracking(x)
```

The `.tacking()` modifier method takes parameter, `x`, which is entered as an integer to define the space to be added to deducted or deducted from each character's default spacing in `pt` (points). SwiftUI applies the system default value if `x` is given `0` as a value or no parameter is given. A positive value for `x` results additional spacing, whereas a negative value results a decrease in spacing.

## Example

In the example below, the `.tracking()` modifier method is called on three `Text` views with `-5`, no value and `5` parameters.

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
