---
Title: 'Button'
Description: 'A basic component in the UI which the user interacts with to perform a certain action.'
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

A **button** is a basic component in the [UI](https://www.codecademy.com/resources/docs/uiux) which the user interacts with to perform a certain action, such as logging into a site or deleting a file.

## Syntax

```pseudo
Button("Label of button") {
  // What happens when you click the button
}
```

The `"Label of button"` is what is shown on the button. It can be an icon, text or a combination of both.

## Example

To make a button which will count the number of times we click it:

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

The above snippet creates a button that displays `"Click Me"`. When the user clicks on it, the number next to the text will increase with the number of clicks.

This will display the following:

![Button](https://raw.githubusercontent.com/Codecademy/docs/main/media/button.png)
