---
Title: 'Button'
Description: 'A very basic component in UI, which is used to interact and perform certain actions'
Subjects:
  - 'Sotfware Development'
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

A very basic component in UI, which is used to interact and perform certain actions, such as logging into a page, or deleting a file etc.

## Syntax

```swift
Button("Text inside the button"){
  //What happens when you click the button
}
```

The `Text inside the button` is what is shown inside the button.

## Example

To make a `'delete'` button:

```swift
    Button("Delete") {
     //Deletes a file
}
 .font(.title)
 .padding()
 .backgroundColor(Color.red)
 .cornerRadius(40)
 .foregroundColor(Color.white)
 .overlay(RoundedRectangle(cornerRadius: 40).stroke(Color.red))
```

## Codebyte Example
To `count` the number of times we `click` the button:


```codebyte/swiftui
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
This will display the following:
![Button](https://raw.githubusercontent.com/girijakar/docs/main/media/button.png)
