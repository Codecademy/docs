---
Title: 'Text'
Description: 'Allows users to display one or more lines of text.'
Subjects:
  - 'Software Development'
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Views'
  - 'Views'
CatalogContent:
  - 'learn-swiftui'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`Text`** view can display one or more lines of text on a screen. It is useful for read-only information.

## Syntax

```pseudo
Text("My Text")
    Modifiers here
```

Any information enclosed within the double quotes `"..."` will display on the screen.

## Example

The following example adds the text,`"Codecademy is Awesome!"`, on the display screen.

```swift
struct ContentView: View {
    var body: some View {
        VStack {
            Text("Codecademy is Awesome!")
                .bold()
        }
    }
}
```

This will display the following:

![SwiftUI Text View](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-text.png)
