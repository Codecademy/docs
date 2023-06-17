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

- An animation type property or method, for example `.easeIn` or `.easeIn(duration: 2)`.
- A `value` that triggers the animation when the `switchValue` variable changes. This variable can be an integer or boolean.

Below is a table describing some of the animation type properties and methods.

| Property or Method      | Description                                                                                                                                                    |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.easeIn`               | Animation starts slow then speeds up.                                                                                                                          |
| `.easeIn(duration:)`    | Same as `.easeIn`, but with a duration specified in seconds.                                                                                                   |
| `.easeOut`              | Animation starts fast then slows down.                                                                                                                         |
| `.easeOut(duration:)`   | Same as `.easeOut`, but with a duration specified in seconds.                                                                                                  |
| `.easeInOut`            | Amimation starts slow, speeds up, then slows down.                                                                                                             |
| `.easeInOut(duration:)` | Same as `.easeInOut`, but with a duration specified in seconds.                                                                                                |
| `.linear`               | Animation has a constant speed.                                                                                                                                |
| `.linear(duration:)`    | Same as `.linear`, but with a duration specified in seconds.                                                                                                   |
| `.spring()`             | Animation behaves like a spring. `response`,`dampingFraction`, and `blendDuration` can be optionally added as arguments to change the behaviour of the spring. |

## Example

The following example shows text that fades in when a [button](https://www.codecademy.com/resources/docs/swiftui/views/button) is pressed:

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

In the example above, `showText` is initially set to `false`, setting the opacity of the view `Text("Hello!")` to be `0`, hiding the text.

When the button is pressed, `showText` changes to be `true` and triggers the animation, easing in the text to a visible opacity of `1` over a `2` second duration.

This will display:

![SwiftUI ViewModifier .animation()](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-viewmodifier-animation.gif)
