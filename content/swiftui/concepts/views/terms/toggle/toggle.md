---
Title: 'Toggle'
Description: 'A switch that can be turned on or off.'
Subjects:
  - 'Software Development'
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Views'
  - 'Toggle'
  - 'Views'
CatalogContent:
  - 'learn-swiftui'
  - 'paths/build-ios-apps-with-swiftui'
---

A **`Toggle`** is a View that chooses between "on or off" options based on a `Bool` type value.

## Syntax

```pseudo
Toggle(_ title: StringProtocol, isOn: Binding<Bool>)
```

The usual method for creating a text-only `Toggle` involves passing a string as the first parameter, rather than using a trailing closure, and a Boolean property that determines the state of the toggle (on or off).

## Example

The following example displays a `Toggle` that turns on/off a "Wi-Fi" switch. It takes just a `isOn:` binding parameter and the `Label` will be inside a trailing closure.

```swift
@State var isWifiOn = false

var body: some View {
    Toggle(isOn: $isWifiOn) {
        Text("Wi-Fi")
    }
    .padding()
}
```

`.padding()` is a view modifier that gives the view that is attached to some space. In this way, the toggle and its label are not squished to the end of the screen.
 
This will display the following when the `Toggle` is off:

![Toggle when off](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-toggle-off.png)

This will display the following when the `Toggle` is on:

![Toggle when on](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-toggle-on.png)
