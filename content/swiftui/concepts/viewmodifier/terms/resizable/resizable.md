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

The **`.resizable()`** modifier configures an image in a [`View`](https://www.codecademy.com/resources/docs/swiftui/views) to resize itself to fit the surrounding space of its parent container.

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

Inside the view, the `.resizable()` modifier is applied to the [`Image` view](https://www.codecademy.com/resources/docs/swiftui/views/image). The image will now resize to fit in the parent ['VStack' view](https://www.codecademy.com/resources/docs/swiftui/views/vstack)'s frame of `300x300`.

### Optional Parameters

The `.resizable()` modifier accepts two optional parameters: `resizable(capInsets: EdgeInsets = EdgeInsets())` and `resizable(resizingMode: Image.ResizingMode = .stretch)`. The `capInsets: EdgeInsets = EdgeInsets()` parameter sets the parts of the image that should not be affected by the resizing or while tiling it affects the spacing in between each tile. The `resizable(resizingMode: Image.ResizingMode = .stretch)` sets the mode of the resizing to either stretch (the default mode) or tile the image.

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

The following example creates a red circle image that is resizable and fills the space of its `VStack` parent view, which is `300x300`, and a border to show its size:

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

The image on the left is before applying the `.resizable()` modifier and on the right is after, showing the image fitting the surrounding space within the border:

![SwiftUI ViewModifier .resizable()](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-resizable.png)

## Example (With Parameters)

The following example sets the `capInsets: EdgeInsets()` for `top`, `leading`, `bottom`, and `trailing` to `20`. Next, the image is tiled within the parent container by setting the `resizingMode: .tile`. This tiles many red circles within the `300x300` parent container and sets the space between the circles to `20`, basically making them closer together. If a lower value of `10` is used, the circles would be further apart. If `50` is used, the circles would push together and basically form a giant red square.

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

This will display:

![SwiftUI ViewModifier .resizable() Tiling of 20](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-resizable-tile.png)

Changing the `EdgeInsets` values to `50`, will result in the following:

![SwiftUI ViewModifier .resizable() Tiling of 50](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-resizable-tile-50.png)
