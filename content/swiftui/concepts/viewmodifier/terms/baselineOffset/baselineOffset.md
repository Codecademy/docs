---
Title: '.baselineOffset()'
Description: 'Moves text up or down relative to its baseline.'
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

The **`.baselineOffset()`** modifier method moves text in a [view](https://www.codecademy.com/resources/docs/swiftui/views) vertically, relative to its baseline. The bounds of the text's parent view expands to contain the modified text.

## Syntax

```pseudo
Text("This text is shifted vertically.")
    .baselineOffset(amount)
```

- `.baselineOffset()` specifies how many points the text is shifted up or down.
- The `amount` of offset is given in points as an integer. This parameter is required and can be positive, negative, or zero.

## Example

```swift
var body: some View {
    VStack {
        Text("I have no vertical shift.")
            .border(Color.red)

        Text("I have no vertical shift.")
            .baselineOffset(0)
            .border(Color.yellow)

        Text("I have 15 points of vertical shift upwards.")
            .baselineOffset(15)
            .border(Color.blue)

        Text("I have 15 points of vertical shift downwards.")
            .baselineOffset(-15)
            .border(Color.green)
    }
    .padding(50)
    .background(Color(red: 0.1, green: 0.1, blue: 0.1))
    .foregroundColor(.white)
}
```

This will display the following:

![SwiftUI ViewModifier Baseline Offset](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-viewmodifier-baselineoffset.png)
