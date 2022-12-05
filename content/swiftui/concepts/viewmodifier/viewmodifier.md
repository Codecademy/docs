---
Title: 'ViewModifier'
Description: 'ViewModifiers are methods that can alter views.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Modifiers'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

In [SwiftUI](https://www.codecademy.com/resources/docs/swiftui), a **`ViewModifier`** is a method that can be called on a particular [View](https://www.codecademy.com/resources/docs/swiftui/views). This method returns a new, altered `View`, that will replace the originally created `View`.

## Syntax

```pseudo
struct MyView: View {
    var body: some View {
        // View(s) here
            // Modifier methods like .bold() can be called underneath a View.
            // Multiple modifiers can be chained using dot notation.
    }
}
```

## Example

The following example displays a text, "Hello Sam", where nameText is the name of a user, and contains a button that increases `codingStreakCount` each time that the Button is pressed.

```swift
import SwiftUI

struct ContentView: View {
    var nameText: String = "Sam"
    @State var codingStreakCount = 0

    var body: some View {
        VStack {
            Text("Hello \(nameText)")
                .font(.title)
                .bold()
                .multilineTextAlignment(.center)

            Button("Coding Streak: \(codingStreakCount)") {
                self.codingStreakCount += 1
            }
                .padding()
                .overlay(
                    RoundedRectangle(cornerRadius: 16)
                        .stroke(.brown, lineWidth: 4))
        }
            .foregroundColor(.brown)
            .padding()
    }
}
```

Each time a user clicks the `Button` labeled `"Coding Streak:"`, the value of the `codingStreakCount` variable will increases by one.

This code creates this output:

![SwiftUI Modifier](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-modifier.png)
