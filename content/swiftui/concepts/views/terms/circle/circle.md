---
Title: 'Circle'
Description: 'Pre-built shape which can be colored and positioned as desired.'
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

SwiftUI includes various pre-built shapes, like rectangles, **circles**, and capsules, which can be generated, coloured, and positioned as desired.

## Syntax

```pseudo
Circle()
//Properties, such as fill, frame, borders etc.
```

The `"Circle"` is one of the pre-built shapes. The user can use different properties such as fill, stroke, alignment, size to adjust the circle according to their requirements.

## Example

The following example make a `"Circle"` which is filled with purple color:

```swift
  var body: some View{
    Circle()
      .fill(.purple)
      .frame(width: 200; height: 200)
  }
```

The above code generates a circle having dimensions of 200x200.

This will display the following:

![Circle](https://raw.githubusercontent.com/Codecademy/docs/main/media/circle.png)
