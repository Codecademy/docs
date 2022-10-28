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

An **image** can be used to enhance the aesthetic of the [user interface (UI)] (https://www.codecademy.com/resources/docs/uiux) and can be functional when used correctly.

## Syntax

```pseudo 
`Image`("image-example")
    // Fitting and aspect ratios
```

A text label can be added to the `image` and the `image` can be changed to fit the requirements.

## Example

The following example adds the codecademy logo clipped to a circle shape:

Once the `image` you would like to use has been added to the 'Assets' (Assets.xcassets) section of your correspoding project it can be called upon.

```swift
var body: some View {
    Image("image-example")
        .resizable()
        .aspectRatio(contentMode: .fill)
        .frame(width: 250.0, height: 250.0, alignment: .center)
        .clipShape(Circle())
}

Use of the .resizable() modifier allowings you to set the aspect ratio
The .aspectRatio() modifier fills the entire content of the parent container
The size can then be restricted to a custom frame
In this case the .clipShape() modifier is a Circle()

This will display the following image:
![Image](https://raw.githubusercontent.com/Codecademy/docs/main/media/image-example.png)
