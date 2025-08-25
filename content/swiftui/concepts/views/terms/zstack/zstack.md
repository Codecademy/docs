---
Title: 'ZStack'
Description: 'A container view in SwiftUI that layers its child views along the z-axis, allowing visual stacking and depth.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Views'
  - 'UI'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

A **`ZStack`** is a container view in SwiftUI that overlays its child views on top of each other along the z-axis, creating layered interfaces. Unlike other stack types that arrange views horizontally or vertically, `ZStack` positions all child views in the same coordinate space, with each successive view appearing above the previous one. This layering behavior makes `ZStack` the go-to choice for creating complex visual compositions where views need to be stacked on top of each other.

`ZStack` is commonly used for creating background overlays, image compositions with text, card-style interfaces, badge notifications, floating action buttons, and any scenario where visual depth and layering enhance the user experience.

## Syntax

```pseudo
ZStack(alignment: Alignment, content: () -> Content)
```

**Parameters:**

- `alignment`: Specifies how child views are positioned within the ZStack. Default is `.center`. Available options include `.topLeading`, `.top`, `.topTrailing`, `.leading`, `.center`, `.trailing`, `.bottomLeading`, `.bottom`, and `.bottomTrailing`.
- `content`: A view builder closure that contains the child views to be layered. The first view in the closure appears at the bottom of the stack, and the last view appears at the top.

**Return value:**

A view that layers its child views on top of each other according to the specified alignment.

## Example 1: Basic Layering Using `ZStack`

This example demonstrates the fundamental layering behavior of `ZStack` with simple shapes and text:

```swift
import SwiftUI

struct BasicLayeringView: View {
  var body: some View {
    ZStack {
      // Background circle (bottom layer)
      Circle()
        .fill(Color.blue)
        .frame(width: 200, height: 200)

      // Middle layer rectangle
      Rectangle()
        .fill(Color.green.opacity(0.7))
        .frame(width: 150, height: 100)

      // Top layer text
      Text("ZStack Demo")
        .font(.title)
        .fontWeight(.bold)
        .foregroundColor(.white)
    }
    .padding()
  }
}
```

The output produced by this code will be:

![A blue circle with a green rectangle over it and white text reading "ZStack Demo" centered on top](https://raw.githubusercontent.com/Codecademy/docs/main/media/zStack-output-1.png)

This example creates a layered composition with three elements. The blue circle forms the base layer, followed by a semi-transparent green rectangle in the middle, and white text on top. Each view maintains its own size and properties while being positioned according to the default center alignment. The layering order follows the declaration order in the `ZStack`.

## Example 2: Image Background with Content

This example shows how to create a common UI pattern using `ZStack` to overlay content on top of a background image:

```swift
import SwiftUI

struct ImageBackgroundView: View {
  var body: some View {
    ZStack(alignment: .bottomLeading) {
      // Background image (bottom layer)
      Image("landscape")
        .resizable()
        .aspectRatio(contentMode: .fill)
        .frame(width: 350, height: 250)
        .clipped()
        .cornerRadius(12)

      // Dark overlay for better text readability
      Rectangle()
        .fill(Color.black.opacity(0.4))
        .frame(width: 350, height: 250)
        .cornerRadius(12)

      // Content overlay (top layer)
      VStack(alignment: .leading, spacing: 8) {
        Text("Mountain Vista")
          .font(.title2)
          .fontWeight(.semibold)
          .foregroundColor(.white)

        Text("Captured at sunrise in the Rocky Mountains")
          .font(.subheadline)
          .foregroundColor(.white.opacity(0.9))
          .lineLimit(2)
      }
      .padding()
    }
    .shadow(radius: 10)
  }
}
```

The output produced by this code will be:

![A sunrise over misty mountains with the caption "Mountain Vista" and a subheading about the Rocky Mountains](https://raw.githubusercontent.com/Codecademy/docs/main/media/zStack-output-2.png)

This example demonstrates a practical use case where ZStack creates a card-like interface with an image background and overlaid content. The `bottomLeading` alignment ensures the text content is positioned at the bottom-left corner of the image. The semi-transparent black overlay improves text readability over the image, and the [`VStack`](https://www.codecademy.com/resources/docs/swiftui/views/vstack) organizes the text content vertically within the overlay area.

## Frequently Asked Questions

### 1. How does `ZStack` determine its size?

`ZStack` takes the union of all its child views' frames, meaning it will be as large as needed to contain all child views. In most cases, this results in the `ZStack` being as large as its largest child view.

### 2. Can I control the layering order of views in `ZStack`?

Yes, the layering order is determined by the declaration order in the `ZStack`. The first view appears at the bottom (furthest back), and the last view appears at the top (frontmost).

### 3. How can I align views differently within a ZStack?

Use the `alignment` parameter when creating the `ZStack`. For example, `ZStack(alignment: .topLeading)` will align all child views to the top-left corner instead of the default center alignment.
