---
Title: '.font()'
Description: 'Applies a specified font to text in a view.'
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

The **`.font()`** modifier applies a specified font to text in a [view](https://www.codecademy.com/resources/docs/swiftui/views).

## Syntax

```pseudo
Text("This text will have the font below applied to it.")
    .font(.fontName)
```

The `.fontName` passed as an argument to the `.font()` modifier is applied to all text within the [text view](https://www.codecademy.com/resources/docs/swiftui/views/text). There are a selection of standard fonts available. It's also possible to create system fonts and add in custom fonts.

Here are some standard fonts:

- `.largeTitle` applies a large title style.
- `.title` applies a title style.
- `.headline` applies a headline style.
- `.body` applies a body text style.
- `.caption` applies a caption style.
- `.footnote` applies a footnote style.

## Example

The following example shows a [`VStack`](https://www.codecademy.com/resources/docs/swiftui/views/vstack) containing texts with different fonts applied using the `.font()` modifier:

```swift
import SwiftUI

struct FontView: View {
    var body: some View {
        VStack {
            Text("This is a Large Title")
                .font(.largeTitle)
            Text("A Title Looks Like This")
                .font(.title)
            Text("Headline text will look like this!")
                .font(.headline)
            Text("This is how body text appears.")
                .font(.body)
            Text("Some text with no font applied.")
            Text("Footnote text is quite small.")
            .font(.footnote)
            Text("Some text using a created system serif font.")
                .font(.system(.title, design: .serif, weight: .semibold))
            Text("Some text using a created system monospaced font.")
                .font(.system(.title2, design: .monospaced, weight: .bold))
        }.padding()
    }
}
```

In the above example, various standard fonts are applied to the first six text views. The last two text views have created system fonts applied to them.

This will display:

![SwiftUI ViewModifier .font()](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-viewmodifier-font.png)
