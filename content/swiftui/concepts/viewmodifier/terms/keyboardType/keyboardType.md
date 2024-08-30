---
Title: '.keyboardType()'
Description: 'Specifies the keyboard type to use for text entry.'
Subjects:
  - 'Mobile Development'
  - 'iOS'
Tags:
  - 'SwiftUI'
  - 'SwiftUI ViewModifiers'
  - 'Xcode'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.keyboardType()`** view modifier method in SwiftUI is used to specify the keyboard type from the `UIKeyboardType` enumeration to use for text entry.

> **Note**: This method is specifically for use with text entry, so it can be applied as a view modifier to any view that accepts text input from the user, like a `TextField`.

## Syntax

```pseudo
TextField("Some label", text: $someValueBinding)
    .keyboardType(parameter)
```

This method has one required parameter:

- `type`: One of the keyboard types defined in the `UIKeyboardType` enumeration.

## Example

The following example demonstrates how to use the `.keyboardType()` method to ensure the user can enter a correctly formatted email address:

```swift
TextField("user-name@example.com", text: $emailAddress)
    .keyboardType(.emailAddress)
```

This will display:

![SwiftUI ViewModifier KeyboardType](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-viewmodifier-keyboardtype.png)
