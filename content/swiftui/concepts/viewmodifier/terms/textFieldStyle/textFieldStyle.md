---
Title: '.textFieldStyle()'
Description: 'Applies a specified style to a text field.'
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

The **`.textFieldStyle()`** modifier applies a specified style to a [text field](https://www.codecademy.com/resources/docs/swiftui/views/textfield).

## Syntax

```pseudo
TextField("label", text: $bindingValue)
    .textFieldStyle(style)
```

The `style` passed as an argument to `.textFieldStyle()` is applied to the `TextField`. Built-in styles are available in SwiftUI and it's also possible to create custom styles.

> **Note:** If `.textFieldStyle()` is called on a [view](https://www.codecademy.com/resources/docs/swiftui/views), the specified style will be applied to every text field within that view, unless it has its own `.textFieldStyle()`.

Here are some of the available built-in text field styles:

- `.automatic` applies the default style to a text field.
- `.plain` does not apply any styles to a text field.
- `.roundedBorder` applies a rounded border to a text field.

## Examples

The following example shows a `TextField` contained in a [`VStack`](https://www.codecademy.com/resources/docs/swiftui/views/vstack), with a built-in style applied:

```swift
import SwiftUI

struct myView: View {

    @State private var myName: String = "Sam Swift"

    var body: some View {
        VStack {
            TextField("Name", text: $myName)
                .textFieldStyle(.roundedBorder)
        }
        .padding()
    }
}
```

In the above example, `.textFieldStyle(.roundedBorder)` is called on the `TextField`, applying a rounded border style.

This will display:

![SwiftUI ViewModifier .textFieldStyle()](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-textFieldStyle-roundedBorder.png)

The next example shows four text fields with different styles applied to them:

```swift
import SwiftUI

struct myView: View {

    @State private var value1: String = "TextField with .automatic style"
    @State private var value2: String = "TextField with .plain style"
    @State private var value3: String = "TextField with .roundedBorder style"
    @State private var value4: String = "TextField with custom style"

    var body: some View {

        VStack() {

            TextField("Automatic Style", text: $value1)
                .textFieldStyle(.automatic)

            TextField("Plain Style", text: $value2)
                .textFieldStyle(.plain)

            TextField("Rounded Border Style", text: $value3)
                .textFieldStyle(.roundedBorder)

            TextField("Custom Style", text: $value4)
        }
        .padding()
        .background(.purple)
        // ↓ Custom textFieldStyle applied to the VStack view
        .textFieldStyle(WhiteBorder())
    }
}

// Structure creating a custom textFieldStyle
struct WhiteBorder: TextFieldStyle {
    func _body(configuration: TextField<Self._Label>) -> some View {
        configuration
            .padding()
            .overlay(
                RoundedRectangle(cornerRadius: 30)
                    .stroke(Color.white, lineWidth:2)
            )
    }
}
```

The example above has some text fields contained in a `VStack` with a purple background.

- The first `TextField` applies the built-in `.automatic` style, which applies the default style.
- The second `TextField` applies the `.plain` style, which doesn't apply any decoration.
- The third `TextField` applies the `.roundedBorder` style, adding a rounded border.
- The fourth `TextField` inherits the parent `VStack`'s custom style, and has a white rounded rectangle border applied to it.

The `struct` creating the custom `TextFieldStyle` called `WhiteBorder()` is also included below the `VStack`.

This will display:

![SwiftUI ViewModifier custom .textFieldStyle()](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-textFieldStyle-custom.png)
