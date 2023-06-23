---
Title: 'TextField'
Description: 'Allows the user to insert contact information, type memos, and edit the content of a specific field.'
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

**`TextField`** is a view that allows the user to fill in the field with data, such as contact information or memos.

## Syntax

```pseudo
var body: some View {
    TextField("Text field description", text: bindingParameter)
}
```

- The `"Text field description"` string refers to the text that will be displayed with a lighter color inside the field.
- `text:` is passed a `bindingParameter` so that Swift will always know if and when this parameter changes.

## Example

In the example below, a `VStack` holds a series of `TextField`s and one `SecureField`, which represents a sign-up page:

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

- The declared variables are marked with the `private` keyword which only allows them to be accessed within the module that they are created in.
- `TextField` not only has different keyboard types but also keyboard styles. This includes different keyboards per style or type (e.g., email format, number pad, or ASCII). If no type or style is specified, Swift will apply the `.default` modifier which can differ depending on the operating system and device's default style settings.
- `SecureField` is a text field view that instantly hides characters and is commonly used for password input.

This will display an empty text field:

![Empty TextField](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-textfield.png)

This will display a filled text field:

![Filled TextField](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-textfield-fill.png)
