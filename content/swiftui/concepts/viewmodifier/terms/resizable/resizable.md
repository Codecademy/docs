---
Title: '.resizable()'
Description: 'Sets the mode that an image in a View resizes itself to, to fit the surrounding space of its parent container.'
Subjects:
  - 'Mobile Development'
  - 'iOS'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Modifiers'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.resizable()`** modifier sets the mode that an image in a [`View`](https://www.codecademy.com/resources/docs/swiftui/views) resizes itself to, to fit the surrounding space of its parent container. 

## Syntax

```pseudo
struct ContentView: View {
    var body: some View {
        VStack {
            Image("image-file")
                .resizable()
        }
        .frame(width: 300, height: 300)
    }
}
```

Inside the view, the `.resizable()` modifier is applied to the [`Image` view](https://www.codecademy.com/resources/docs/swiftui/views/image). The image will now resize to fit in the parent ['VStack' view](https://www.codecademy.com/resources/docs/swiftui/views/vstack)'s frame of 300px by 300px.

## Example

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Image(systemName: "checkmark.square.fill")
                .resizable()
        }
        .frame(width: 300, height: 300)
    }
}
```



This will display:

![SwiftUI ViewModifier .resizable()](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-resizable.png)

## Optional Arguments

The **`.resizable()`** modifier accepts two optional arguments: **`capInsets: EdgeInsets = EdgeInsets()`** and **`resizingMode: Image.ResizingMode = .stretch`**. 

```pseudo
struct ContentView: View {
    var body: some View {
        VStack {
            Image(systemName: "checkmark.square.fill")
                .resizable(capInsets: EdgeInsets(
                    top: 0,
                    leading: 0,
                    bottom: 0,
                    trailing: 0
                ), resizingMode: .tile) // We can also use .stretch
        }
    }
}
```
