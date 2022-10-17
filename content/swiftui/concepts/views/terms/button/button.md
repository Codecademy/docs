---
Title: 'Button'
Description: 'Allows users to interact with the UI and perform certain actions.'
Subjects:
  - 'Software Development'
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Views'
  - 'Buttons'
  - 'Views'
CatalogContent:
  - 'learn-swiftui'
  - 'paths/build-ios-apps-with-swiftui'
---

A **button** is an interactive component in the [user interface (UI)](https://www.codecademy.com/resources/docs/uiux) that allows users to perform certain actions, such as logging into a site or deleting a file.

## Syntax

```pseudo
Button("Label of button") {
  // What happens when the button is used
}
```

The `"Label of button"` is what is shown on the button. It can be an icon, text or a combination of both.

## Example

The following example increases the `count` each time the `Button` is used:

```swift
@State var count = 0
var body: some View {
  Button("Click me: \(count)") {
    self.count += 1
  }
  .font(.title)
  .padding()
  .backgroundColor(Color.green)
  .cornerRadius(40)
  .foregroundColor(Color.black)
  .overlay(RoundedRectangle(cornerRadius: 40).stroke(Color.green))
```

Each time the user selects the `Button`, the number next to the text `"Click Me"` will increase `self.count` by 1.

This will display the following:

![Button](https://raw.githubusercontent.com/Codecademy/docs/main/media/button.png)
