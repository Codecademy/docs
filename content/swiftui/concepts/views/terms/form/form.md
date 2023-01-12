---
Title: 'Form'
Description: 'Container that collects controls used for data entry. Like `Settings` on iPhones and Macs.'
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

The **`Form`** view displays collected data in a single column. It is the main element used inside the "Settings" application on the iPhone or iPad or "System Settings" on other devices.

## Syntax

```pseudo
var body: some View {
    Form {
        Subviews here
    }
}
```

## Example

In the example below, a `Form` is wrapped inside a `NavigationView` that will display 4 fields: 1 `Text`, 1 `TextField` where the user can insert their email, 1 `Button` and one `NavigationLink` that leads to an empty view.

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

- This is just an example to show how useful a `Form` is. There are plenty more use cases to it. 
- `NavigationView` is fundamental to to the display and to make the `NavigationLink` work properly

This will display the following:

![Form](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-form.png)
