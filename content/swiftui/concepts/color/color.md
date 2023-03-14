---
Title: 'Color'
Description: 'Creates a color instance.'
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

**`Color`** creates a color instance. `Color`s can be used as arguments, for example to fill backgrounds and shapes or to apply color to text. They can also be used directly as [views](https://www.codecademy.com/resources/docs/swiftui/views), creating a rectangle area filled with their color, that adapts to fill the space available.

## Syntax

`Color` instances can be declared using dot notation or bracket notation:

```pseudo

let someColor = Color.color property

let someColor = Color(.color property or variable and/or color component values)

```

Here are some of the standard color properties that are available. Many of the color properties will change depending on their context, for example if light or dark mode is set.

- `.red` (context dependent)
- `.orange` (context dependent)
- `.green` (context dependent)
- `.white`
- `.black`
- `.primary` (context dependent)
- `.secondary` (context dependent)

The SwiftUI developer documentation specifies how to [create colors from component values](https://developer.apple.com/documentation/swiftui/color).

## Example

The following example displays some uses for `Color`. An array of colors is declared and used to fill a series of [views](https://www.codecademy.com/resources/docs/swiftui/views):

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {

        let rainbowColors = [Color.red, Color.orange, Color.yellow, Color.green, Color.mint, Color.teal, Color.cyan, Color.blue, Color.indigo, Color.purple, Color.brown]

        VStack {
            HStack {
                ForEach(rainbowColors, id: \.self) { color in
                    Circle()
                        .fill(color)
                }
            }
            ForEach(rainbowColors, id: \.self) { color in
                color
            }
        }
        .padding()
    }
}
```

In the example above, the first `ForEach` loop displays a sequence of [`Circle`](https://www.codecademy.com/resources/docs/swiftui/views/circle)s filled with each color in the `rainbowColors` array. The next `ForEach` loop returns each color in the array, creating a sequence of rectangle [views](https://www.codecademy.com/resources/docs/swiftui/views) filled with each color.

This will display:

![SwiftUI Modifier](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-color.png)
