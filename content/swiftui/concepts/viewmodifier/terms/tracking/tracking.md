---
Title: '.tracking()'
Description: 'Modifies the the spacing of characters in the Text view.'
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

The `.tacking()` modifier method has one parameter, `x`, which is entered as an integer to define the space to be added to each character in `pt` (points). SwiftUI applies the system default value if `x` is given `0` as a value or no parameter is given. A positive value for `x` results additional spacing, whereas a negative value results a decrease in spacing.

## Example

In the above example, the `.tracking()` modifier is called on `Text` views with different values for spacing.

```swift
var body: some View {
    Text("Less spacing.")
        .tracking(-5)
    Text("Default spacing.")
        .tracking()
    Text("More spacing.")
        .tracking(5)
    }
```

This will display the following:

![SwiftUI ViewModifier Tracking](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-viewmodifier-tracking.png)
