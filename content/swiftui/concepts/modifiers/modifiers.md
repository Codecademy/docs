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

A `modifier` is a method that when called on a `View`, returns a new, altered `View`, that will replace the original `View` created. Built in `modifiers` such as `bold(_:)`, come built-in with Swift and all `Views` have access to these methods. `bold(_:)` can be used like so:

```psuedo
struct MyView: View {
    var body: some View {
        Vstack {
            Text("Hello World")
                .bold()
        }
    }
}
```

Here the `font(_:)` `modifier` is being called on the text: `Text("Hello World")`, which, replaces the original "Hello World" text with a new "**Hello World**" text. In this way the `modifier` method `bold(_:)` has been called on a view, and returned a new, altered view.

Below are some modifier methods built-in with Swift: