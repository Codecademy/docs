---
Title: 'TextField'
Description: 'A view that allows the user to insert information, type memos, and edit the content.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Views'
  - 'Views'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`TextField`** is a view that allows the user to fill in the field with data. 

## Syntax

```pseudo
var body: some View {
    TextField("Text field description", text: bindingParameter)
}
```

- `_ title:` refers to the text that will be displayed in a lighter color inside the field. 
- `text:` refers to what the input will be, it's a binding parameter so that Swift will always know if and when this parameter changes.

## Example

In the example below, a `VStack` holds a series of `TextFields` and one `SecureField`. This example resembles a 'Sign Up' page.

```swift
@State private var name = ""
@State private var lastName = ""
@State private var username = ""
@State private var email = ""
@State private var password = ""

var body: some View {
    VStack {
        TextField("Name", text: $name)
        
        TextField("Last Name", text: $lastName)
            .keyboardType(.default)
            
        TextField("Username", text: $username)
            .keyboardType(.asciiCapable)
            
        TextField("Email", text: $email)
            .keyboardType(.emailAddress)
            
        SecureField("Password", text: $password)
    }
    .padding()
}
```

- The top 5 variables are marked as private because it is important that the information does not leave the current page.
- `TextField` not only has different keyboard types but also keyboard styles. If no type or style is specified, Swift will display them as `(.default)`.
- `SecureField` is a `TextField` that instantly hides the character and is commonly used to setup passwords.

There are two images for this example. The first represents empty textfields and the second represents filled textfields:

This will display the following:

![Empty TextField](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-textfield.png)
![Filled TextField](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-textfield-fill.png)
