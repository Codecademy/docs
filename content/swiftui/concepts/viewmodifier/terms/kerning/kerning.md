---
Title: '.kerning()'
Description: 'Adjusts the spacing size between text characters in a view.'
Subjects:
  - 'Mobile Development'
  - 'iOS'
Tags:
  - 'SwiftUI'
  - 'SwiftUI ViewModifiers'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.kerning()`** modifier adjusts the spacing size between text characters in a [view](https://www.codecademy.com/resources/docs/swiftui/views).

## Syntax

```pseudo
Text("This text will have kerning applied.")
    .kerning(amount)
```

The `.kerning()` modifier offsets text character spacing by the `amount` (in points) and is applied to all text in the [text view](https://www.codecademy.com/resources/docs/swiftui/views/text). The `amount` parameter is a float value. A positive value will increase the spacing size and a negative value will decrease it. A value of `0` will set the default text character spacing.

## Example

The following example creates some kerned text:

```swift
import SwiftUI

struct KerningView: View {
    var body: some View {
        VStack {
            Text("SQUASHED TEXT")
                .kerning(-5)
            Text("NORMAL TEXT")
                .kerning(0)
            Text("STRETCHED TEXT")
                .kerning(5)
        }
        .font(.largeTitle)
    }
}
```

In the above example, the `.kerning()` modifier is called on three text views, contained in a [`VStack`](https://www.codecademy.com/resources/docs/swiftui/views/vstack):

- In the first, the kerning value is set to `-5`, decreasing the spacing between the characters by `-5` points.
- In the second, the kerning value is set to `0`, applying the default spacing and so the text will not be affected.
- In the third, the kerning value is set to `5`, increasing the spacing between the characters by `5` points.

This will display:

![SwiftUI ViewModifier .kerning()](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-kerning.png)
