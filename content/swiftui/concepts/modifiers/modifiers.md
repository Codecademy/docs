---
Title: 'Modifiers'
Description: 'Modifiers are methods that can alter views.'
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

In [SwiftUI](https://www.codecademy.com/resources/docs/swiftui), **Modifiers** are methods that can be called on a particular [Views](https://www.codecademy.com/resources/docs/swiftui/views).

## Syntax

A `modifier` is a method that when called on a `View`, returns a new, altered `View`, that will replace the original `View` created. Built in `modifiers` such as `bold(_:)`, come built-in with Swift and all `Views` have access to these methods. `bold(_:)` can be used like so:

```psuedo
struct MyView: View {
    var body: some View {
        VStack {
            Text("Hello World")
                .bold()
                //Modifier methods like .bold() can be called underneath a text, button or even a View.
        }
    }
}
```

Here the `bold(_:)` `modifier` is being called on the text: `Text("Hello World")`, which, replaces the original "Hello World" text with a new "**Hello World**" text. In this way the `modifier` method `bold(_:)` has been called on a view, and returned a new, altered view.

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

Each time a user presses the Button, the variable `codingStreakCount` will increase by one.

This code creates this output:

![alt text](https://github.com/AustinWheel/firstRep/blob/main/ExampleCode.png)
