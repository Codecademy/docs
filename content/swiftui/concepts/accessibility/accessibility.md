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

- `AccessibilityInputLabels` and `AccessibilityActions` modifiers can enhance interactive elements by adding context and accessibility-specific actions.

## Accessibility Techniques in SwiftUI

Beyond accessibility modifiers, some general techniques form the backbone of a user-centric design catering to diverse abilities and needs. These techniques are the following:

- Focus Management with the `.focused()` modifier lets you control which element initially gets focus, enhancing the user experience for keyboard and VoiceOver users:

    ```swift
    var body: some View {
        TextField("Username", text: $username)
            .focused($username, equals: true)
    }
    ```

    This will render a `TextField`, and when the view appears, the keyboard will automatically be shown, and the cursor will be placed in the `TextField`, ready for user input.

- Modifiers for Dynamic Text: SwiftUI supports Dynamic Type, which means your app's text can adapt to users' chosen text size:

    ```swift
    var body: some View {
        Text("Accessibility in SwiftUI")
            .font(.body)
            .scaledFont(size: 18)
    }
    ```

    In this example above, the `Text` element is initially set with `.font(.body)`, and then the `.scaledFont()` modifier is applied to adjust the font size to `18 points`. This ensures the text remains legible even as the user changes their preferred text size settings.

- Semantic Views and Tags: Using semantic views and tags (e.g., `.button`, `.image`, `.heading`, and `.link`) for role-specific styling can aid the visual appearance and interactions of the app while also enhancing VoiceOver users' navigation experiences.
Modifiers for Dynamic Text: Ensure text remains legible across various sizes, accommodating users' preferences.
- VoiceOver Integration: VoiceOver is a built-in [screen reader](https://www.codecademy.com/article/how-to-setup-screen-reader) for iOS and macOS to assist visually impaired users. VoiceOver automatically interacts with the accessibility labels, hints, traits, and other modifiers you apply to your UI elements.
- Gestures and Accessibility: Gesture modifiers with meaningful accessibility labels can provide clear interaction cues.

## Testing for Accessibility

Along with accessibility modifiers and techniques, the following testing methodologies and proactive approaches to accessibility can help developers create apps that provide a more inclusive and enjoyable user experience:

- Testing with Screen Readers: Regularly test your app with screen readers like VoiceOver to ensure all elements are correctly labelled and convey the intended information.
Keyboard Navigation: Verify that all interactive elements, like buttons and text fields, are accessible and functional using keyboard navigation alone.
- Dynamic Type Testing: Test your app with various Dynamic Type settings to ensure that text remains readable and that layouts adjust accordingly.
- Contrast Testing: Perform contrast testing to ensure that text and graphics have sufficient contrast for low-vision users.
- Test with Real Content: Test your app with accurate content rather than placeholder text to simulate actual usage scenarios.
- Focus Order Testing: Verify that the focus order of elements is logical and intuitive when using VoiceOver or keyboard navigation.
- Accessibility Inspector: Utilize Xcode's Accessibility Inspector to identify any accessibility issues within your app.
- Beta Testing: Involve users with disabilities in your beta testing phase to gather real-world feedback.
- User Feedback: Provide a clear channel for users to provide feedback on accessibility issues or suggestions for improvement.
- Stay Updated: Keep up with the latest accessibility guidelines and best practices as they evolve.
- Continual Learning: Invest time in understanding various disabilities and the challenges users face. This can help you make more informed design decisions.
- Collaboration: Engage with accessibility communities and experts to gain insights and learn from their experiences.
