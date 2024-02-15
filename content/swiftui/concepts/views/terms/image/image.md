---
Title: 'Image'
Description: 'Allows users to incorporate images.'
Subjects:
  - 'Software Development'
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Views'
  - 'Image'
  - 'Views'
CatalogContent:
  - 'learn-swiftui'
  - 'paths/build-ios-apps-with-swiftui'
---

An **`Image`** view is used to incorporate images and enhance the aesthetic of the [user interface (UI)](https://www.codecademy.com/resources/docs/uiux) and can be functional when used correctly.

## Syntax

```pseudo
`Image`("image-example")
// Fitting and aspect ratios
```

A text label can be added to the `image` and the `image` can be changed to fit the requirements.

## Example

The following example adds the Codecademy logo clipped to a circle shape:

Once the `image` to be used has been added to the project's 'Assets' (Assets.xcassets) library, it can be loaded.

```swift
var body: some View {
  Image("image-example")
    .resizable()
    .aspectRatio(contentMode: .fill)
    .frame(width: 250.0, height: 250.0, alignment: .center)
    .clipShape(Circle())
}
```

The `.resizable()` modifier fills the entire content of the parent container. The `.aspectRatio()` maintains the original aspect ratio. The size can then be restricted to a custom `.frame()`. In this case, the `.clipShape()` modifier is a [`Circle()`](https://www.codecademy.com/resources/docs/swiftui/views/circle).

This will display the following image:

![Image](https://raw.githubusercontent.com/Codecademy/docs/main/media/image-example.png)
