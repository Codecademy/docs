---
Title: 'Accessibility'
Description: 'Accessibility in SwiftUI refers to the built-in tools that enable creating user interfaces that work well for all users, including individuals with diverse needs.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'SwiftUI'
  - 'iOS'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**[Accessibility](https://www.codecademy.com/resources/docs/uiux/accessibility)** in Swift UI refers to the built-in tools that enable creating user interfaces that work well for all users, including individuals with diverse needs.

## The Importance of Accessibility

Creating apps with SwiftUI with accessibility in mind is necessary to meet accessibility guidelines. Furthermore, it also helps create a more [inclusive design](https://www.codecademy.com/resources/docs/uiux/inclusive-design) and user-friendly experience. Standard accessibility features work by default to ensure the app is accessible for everyone, while accessibility modifiers enable developers to further customize the app's accessibility features.

## Standard Accessibility Features

By default, SwiftUI provides basic accessibility labels to the most common elements, such as:

- Buttons,
- Text fields,
- Lists,
- Navigation views,
- Sliders.

These labels describe the purpose and function of the element, making it easier for screen readers and other assistive technologies to convey meaningful information to users. These labels are generated automatically, requiring no action from developers.

```swift
var body: some View {
    Button("Login") {
    // Login action
    }
}
```

This will render a button with default styles and the "Login" text, ensuring its visibility to screen readers and adaptive technologies.

## Accessibility Modifiers

SwiftUI provides a range of modifiers to fine-tune the accessibility of your app's elements:

- `accessibilityLabel()` and `accessibilityHint()` modifiers allow you to specify custom labels and hints for elements:

    ```swift
    var body: some View {
        Image("info").accessibilityLabel("Information icon")
    }
    ```

  This will render the image while providing a more precise description of assistive technologies.

- `accessibilityValue()` modifier can define the value associated with the element, such as sliders:

    ```swift
    var body: some View {
        Slider(value: $sliderValue, in: 0...100)
            .accessibilityValue("\(Int(sliderValue)) percent")
        Text("Value: \(Int(sliderValue))")
    }
    ```

    This will render a slider while providing context to VoiceOver users about the slider's current value.

- `accessibilityTraits()` modifier can indicate the traits of an element:

    ```swift
    var body: some View {
        Button("Login") {
        // Login action
        }
        .accessibilityTraits(.button)
    }
    ```

    This will render the button while informing VoiceOver and other assistive technologies that the element is a button.

- Modifiers for Dynamic Text: SwiftUI supports Dynamic Type, which means your app's text can adapt to users' chosen text size:

    ```swift
    var body: some View {
        Text("Accessibility in SwiftUI")
            .font(.body)
            .scaledFont(size: 18)
    }
    ```

    In this example above, the `Text` element is initially set with `.font(.body)`, and then the `.scaledFont()` modifier is applied to adjust the font size to `18 points`. This ensures the text remains legible even as the user changes their preferred text size settings.

- Focus Management with the `.focused()` modifier lets you control which element initially gets focus, enhancing the user experience for keyboard and VoiceOver users:

    ```swift
    var body: some View {
        TextField("Username", text: $username)
            .focused($username, equals: true)
    }
    ```

    This will render a `TextField`, and when the view appears, the keyboard will automatically be shown, and the cursor will be placed in the `TextField`, ready for user input.
