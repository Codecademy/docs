---
Title: 'Form'
Description: 'Displays a collection of data in a single column. An example is the settings application for Apple devices.'
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

The **`Form`** view displays collected data in a single column. It is the main element used inside the settings application on Apple devices or "System Settings" on other devices.

## Syntax

```pseudo
var body: some View {
    Form {
        Subviews here
    }
}
```

## Example

In the example below, a `Form` is wrapped inside a `NavigationView` that will display four fields:

```swift
@State private var email = ""

var body: some View {
    NavigationView {
        Form {
            Text("This is a text")
            TextField("This is a textfield", text: $email)
            Button("This is a button") { }
            NavigationLink("This is a navigation link", destination:EmptyView())
        }
    }
}
```

- `NavigationView` is fundamental to to the display and to make the `NavigationLink` work properly.
- The [Text](https://www.codecademy.com/resources/docs/swiftui/views/text) view is a built-in way to display standard text.
- The `TextField` view allows the user to insert contact informations, type memos, and edit the content of a specific field.
- The [Button](https://www.codecademy.com/resources/docs/swiftui/views/button) view allows users to interact with the UI and perform certain actions.
- The `NavigationLink` view controls how the navigation between views is displayed to the user.

This will display the following:

![Form](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-form.png)
