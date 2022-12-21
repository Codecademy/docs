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

The **`TextField`** is a view that allows user to fill in the field with the relative data. 
The first parameter refers to the text that will be displayed in a lighter color inside the field. 
The second parameter refers to what the input will be, it's a binding parameter so that swift will always know if and when this parameter changes.

## Syntax

```pseudo
var body: some View {
    TextField(_ title: StringProtocol, text: Binding<String>)
}
```

## Example

In the example below, a `VStack` holds a series of `TextFields` and one `SecureField`. This example reassemble a sort of 'Sign Up' page.

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
- The top 5 variables are market as private because it is important that those information do not leave the current page.
- `TextField` not also has different keyboard types but also keyboard styles. If no type or style is specified Swift will display them as `(.default)`.
- `SecureField` is simply a `TextField` that instantly hides the character and is commonly used to setup passwords.
- There are two images for this example, the first one represents an empty textfield and the second one a filled one.

This will display the following:

![empty TextField](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-textfield.png)
![filled TextField](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-textfield-fill.png)
