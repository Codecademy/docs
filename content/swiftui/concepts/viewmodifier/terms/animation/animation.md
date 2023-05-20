---
Title: '.animation()'
Description: 'Applies an animation to a view.'
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

The **`.animation()`** modifier applies an animation to a [view](https://www.codecademy.com/resources/docs/swiftui/views).

## Syntax

```pseudo
View
    .animation(animation, value: switchValue)
```

The `.animation()` modifier takes two arguments:

- An animation property or function, for example `.easeIn` or `.easeIn(duration: 2)`.
- A `value` that whenever it changes, triggers the animation.

## Example

The following example shows text that fades in when a button is pressed:

```swift
import SwiftUI

struct AnimationView: View {

    @State private var showText = false

    var body: some View {
        VStack {

            Button("Show Secret Message") {
                showText.toggle()
            }
            .buttonStyle(.bordered)

            Text("Hello!")
                .font(.largeTitle)
                .opacity(showText ? 1 : 0)
                .animation(.easeIn(duration: 2), value: showText)
        }
    }
}
```

In the above example, `showText` is initially set to `false`, setting the opacity of the view `Text("Hello!")` to be `0`, hiding the text.

When the button is pressed, `showText` changes to be `true` and triggers the animation, easing in the text to a visible opacity of `1` over a `2` second duration.

This will display:

![SwiftUI ViewModifier .animation()](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-viewmodifier-animation.gif)
