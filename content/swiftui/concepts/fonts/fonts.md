---
Title: 'Fonts'
Description: 'Font is a struct that creates font instances that can be applied to text.'
Subjects:
  - 'Mobile Development'
  - 'iOS'
Tags:
  - 'SwiftUI'
  - 'Fonts'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**`Font`** is a `struct` that creates `Font` instances that can be applied to text by passing them to the [`.font()`](https://www.codecademy.com/resources/docs/swiftui/viewmodifier/font) view modifier.

`Font` instances can be created using standard fonts, which are type properties of `Font`. Fonts can also be created and modified using built-in `Font` methods such as `.system()`, [`.italic()`](https://www.codecademy.com/resources/docs/swiftui/viewmodifier/italic), and [`.bold()`](https://www.codecademy.com/resources/docs/swiftui/viewmodifier/bold).

## Standard Fonts

Below is a list of some of the standard `Font` type properties:

- `.largeTitle` a large, title font style.
- `.title` a title font style.
  -`.title2` a smaller title font style.
  -`.title3` the smallest title font style.
- `.headline` a headline font style.
- `.body` the default font style.
- `.footnote` a footnote font style.
- `.caption` a caption font style.

## Modifying and Creating Fonts

Below is a list of some of the `Font` methods used to modify and create fonts:

- `.bold()` applies a bold style.
- `.italic()` applies an italic style.
- `.weight()` applies the specified weight style.
- `.monospaced()` applies a monospaced font style.
- `.lowercaseSmallCaps()` converts lowercase characters to small capital characters.
- `.system(_ style:, design:, weight:)` applies a specified font style with optional design and/or weight styles.
- `.system(size:, weight:, design:)` applies a specified size with optional weight and/or design styles.

It is also possible to create custom fonts using the `.custom()` method.

## Example

The following example shows a [`VStack`](https://www.codecademy.com/resources/docs/swiftui/views/vstack) containing text views with three different fonts applied:

```swift
import SwiftUI

struct FontView: View {
    let titleFont = Font.largeTitle.lowercaseSmallCaps()
    let footnoteFont = Font.system(.footnote, design: .serif, weight: .bold)

    var body: some View {
        VStack {
            Text("I Love to See the Summer Beaming Forth")
                .font(titleFont)
            Text("\nI love to see the summer beaming forth \nAnd white wool sack clouds sailing to the north \nI love to see the wild flowers come again \nAnd mare blobs stain with gold the meadow drain\n")
                .monospaced()
            Text("- John Clare")
                .font(footnoteFont)
        }
        .padding()
    }
}
```

In the above example:

- The first text view has `titleFont` applied. `titleFont` is created from the standard `Font` type property, `.largeTitle`, with the method `.lowercaseSmallCaps()` applied to it.
- The next text view has the method `.monospaced()` applied, setting the text to use a monospaced font.
- The last text view has a created system font `footnoteFont` applied, with a `.footnote` style, `.serif` design, and `.bold` weight.

This will display:

![SwiftUI Fonts](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-font.png)
