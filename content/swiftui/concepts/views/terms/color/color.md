---
Title: 'Color'
Description: 'Creates a color view, modifying the background color.'
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

A **Color** view is a way to incorporate colors into the user interface. It can be used to modify the backgrounds.

## Syntax

```pseudo
var body: some View {
    Color.color-example
    //Content that is being modified
        .foregroundColor(.color-example) //Modifier
}
```

- `Color.color-example` changes the background color.
- `.foregroundColor(.color-example)` changes the color of the content (ex: "text") itself.

## Example

The following example changes the colors to white on black:

```swift
var body: some View {
  VStack {
    Color.black
      .overlay(
          Text("Codecademy__")
            .foregroundColor(.white)
            )
      }
  .padding()
  }
```

- `Color.black` makes the background color black.
- `foregroundColor(.white)` sets the text color to white.

The code-block above will display an interface filled with the color black and the text "Codecademy" in white.

![Color](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-color-background.png)
