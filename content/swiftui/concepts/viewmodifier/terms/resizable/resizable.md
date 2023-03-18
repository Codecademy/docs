---
Title: '.resizable()'
Description: 'Configures an image in a View to resize itself to fit the surrounding space of its parent container.'
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

The **`.resizable()`** modifier method configures an image in a [`View`](https://www.codecademy.com/resources/docs/swiftui/views), resizing itself to fit the surrounding space of its parent container.

## Syntax

```pseudo
Image("image-file")
    .resizable()
```

The `.resizable()` modifier is applied to the [`Image`](https://www.codecademy.com/resources/docs/swiftui/views/image) view, which makes the image resize itself to fit its space. Additionally, the `.resizable()` modifier accepts two optional parameters:

- `capInsets: EdgeInsets = EdgeInsets()` parameter sets the parts of the image that should not be affected by the resizing or, while tiling, it affects the spacing between each tile. The `EdgeInsets()` parameter also takes parameters as sides and spacing (e.g., `top: 20`).
- `resizable(resizingMode: Image.ResizingMode = .stretch)`, where `.stretch` sets the resizing mode to stretch the image (the default mode) or `.tile` repeats the image to fill the available space.

```pseudo
import SwiftUI

struct ContentView: View {
  var body: some View {
    VStack {
      Image("RedCircle")
        .resizable(capInsets: EdgeInsets(
          top: 20,
          leading: 20,
          bottom: 20,
          trailing: 20
        ), resizingMode: .tile) // .stretch can also be used
    }
    .frame(width: 300, height: 300)
  }
}
```

## Example (Without Parameters)

The following example creates an image of a red circle that is resizable and fills the space of its ['VStack'](https://www.codecademy.com/resources/docs/swiftui/views/vstack) parent view, which has a size of `300` by `300` points (`pt`), and a border to show its size:

```swift
import SwiftUI

struct ContentView: View {
  var body: some View {
    VStack {
      Image("RedCircle")
        .resizable()
    }
    .frame(width: 300, height: 300)
    .border(.black, width: 2)
  }
}
```

The left image shows the red circle without the `.resizable()` modifier not filling the available space. The right image shows the red circle with the `.resizable()` modifier filling up the space:

![SwiftUI ViewModifier .resizable()](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-resizable.png)

## Example (With Parameters)

The following example sets the `capInsets: EdgeInsets()` for `top`, `leading`, `bottom`, and `trailing` edges to `20`. Next, the image is tiled within the parent container by setting the `resizingMode: .tile`. This tiles many red circles within the `300` x by `300` `pt` (points) parent container and sets the space between the circles to 20, making them closer together. The circles would be further apart if a lower value of 10 is used. If 50 is used, the circles would push together, forming a giant red square.

```swift
import SwiftUI

struct ContentView: View {
  var body: some View {
    VStack {
      Image("RedCircle")
        .resizable(capInsets: EdgeInsets(
          top: 20,
          leading: 20,
          bottom: 20,
          trailing: 20
        ), resizingMode: .tile)
    }
    .frame(width: 300, height: 300)
  }
}
```

This will display the following:

![SwiftUI ViewModifier .resizable() Tiling of 20](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-resizable-tile.png)

Changing the `EdgeInsets` values to 50 will result in the following:

![SwiftUI ViewModifier .resizable() Tiling of 50](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-resizable-tile-50.png)
